const checkbox = document.querySelector('#checkbox');
const body = document.querySelector('body');

function colorSwitch () {
    if (!this.checked) {
        body.classList.add('dark');
    } else if (this.checked) {
        body.classList.remove('dark');
    }
}

checkbox.addEventListener('click', colorSwitch);