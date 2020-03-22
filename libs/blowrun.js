$(document).ready(function () {


    if (document.querySelector('.blowup-image')) {
        for (let img of document.querySelectorAll('.blowup-image')) {
            if (img.parentNode) {
                img.parentNode.classList.remove('is-loading');
                img.parentNode.classList.remove('element');
                $(img).blowup({
                    background: '#0a304e',
                    width: 250,
                    height: 250,
                    round: false,
                    border: '3px solid #0a304e',
                    scale: 1
                });
            }
        }
    }
});
