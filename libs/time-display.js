if (document.querySelector('time-display')) {
    customElements.define('time-display', TimeDisplay);
}
// expects Date.now()

// <time-display> new Date().now().toDateString() </time-display>


export class TimeDisplay extends HTMLElement {
    constructor () {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = ` 
        <div id="slotted-value">
            <slot></slot>
        </div>
        <div id="output"></div>
        `;
        this._onSlotChangeBound = this._onSlotChange.bind(this);
        this._output = this._root.getElementById('output');
        this._slottedValue = this._root.getElementById('slotted-value');
        this._timeSlot = this._root.querySelector('slot');
    }

    connectedCallback () {
        this._timeSlot.addEventListener('slotchange', this._onSlotChangeBound);
        this._onSlotChange();
        /*
            let el = document.getElementById('element');
            el.textContent = new Date();
            or
            let event = new CustomEvent('slotchange');
            el._timeSlot.dispatchEvent(event);
        */
    }

    _fade (el, { from = 1, to = 0 }) {
        return new Promise((resolve) => {
            let animation = el.animate([
                { opacity: from }, { opacity: to }
            ], { duration: 300, easing: 'cubic-bezier(0, 0, 0.3, 1)' });
            animation.onfinish = resolve;
        });
    }

    async _onSlotChange () {
        const textValue = this.getAttribute('value') || this.textContent || '';
        const dateTime = Date.parse(textValue.trim());
        if (Number.isNaN(dateTime)) {
            // Invalid date.
            return;
        }

        const value = new Date(dateTime);
        const supportsRelativeTimeFormat = ('RelativeTimeFormat' in Intl);
        const supportsDateTimeFormat = ('DateTimeFormat' in Intl);

        if (!supportsDateTimeFormat && !supportsRelativeTimeFormat) {
            return;
        }

        // Fade out everything.
        await Promise.all([
            this._fade(this._output, { from: 1, to: 0 }),
            this._fade(this._slottedValue, { from: 1, to: 0 })
        ]);

        // Permanently hide the original slotted value.
        this._slottedValue.style.display = 'none';

        if (supportsRelativeTimeFormat) {
            this._updateRelativeValue(value);
        } else if (supportsDateTimeFormat) {
            this._useAbsoluteValue(value);
        }

        await this._fade(this._output, { from: 0, to: 1 });
    }

    _useAbsoluteValue (value) {
        const formatter = new Intl.DateTimeFormat(navigator.language);
        this._output.textContent = formatter.format(value);
    }

    _updateRelativeValue (given) {
        const now = new Date();
        let unit = 'second';
        let value = (given.getTime() - now.getTime()) / 1000;
        if (Math.abs(value) > 60) {
            value /= 60;
            unit = 'minute';
            if (Math.abs(value) > 60) {
                value /= 60;
                unit = 'hour';
                if (Math.abs(value) > 24) {
                    value /= 24;
                    unit = 'day';
                    if (Math.abs(value) > 7) {
                        value /= 7;
                        unit = 'week';
                        if (Math.abs(value) > 4) {
                            value /= 4;
                            unit = 'month';
                            if (Math.abs(value) > 12) {
                                value /= 12;
                                unit = 'year';
                            }
                        }
                    }
                }
            }
        }
        const formatter = new Intl.RelativeTimeFormat(navigator.language);
        this._output.textContent = formatter.format(Math.floor(value), unit);
    }
}
