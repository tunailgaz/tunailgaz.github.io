const displayMessages = document.getElementById('display-messages');
let errorDiv = document.createElement('div');
errorDiv.classList.add('notification');
errorDiv.classList.add('is-danger');
errorDiv.innerHTML = `<button class="delete"></button>${error}`;
displayMessages.appendChild(errorDiv);


// or

const animation =  errorDiv.animate([
    { opacity: 0 }, { opacity: 1 }
], { duration: 300, easing: 'cubic-bezier(0, 0, 0.3, 1)' });

animation.onfinish = () => {
    console.log('animation finished!')
}
