const hiddenElement = document.querySelector('.form');
const btn = document.querySelector('.header__button');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "start", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);