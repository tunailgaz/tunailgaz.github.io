if (document.querySelector('time-format')) {
    customElements.define('time-format', TimeFormat);
}

export class TimeFormat extends HTMLElement {
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
        // let value = new Date(this.textContent.toString().trim());
        // this._updateRelativeValue(value);
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

        if (supportsDateTimeFormat) {
            this._useAbsoluteValue(value);
        }

        await this._fade(this._output, { from: 0, to: 1 });
    }

    _useAbsoluteValue (value) {
        const formatter = new Intl.DateTimeFormat(navigator.language);
        this._output.textContent = formatter.format(value);
    }
}
