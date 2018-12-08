'use scrict';

const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

function toggleClass() {
	return this.classList.toggle('active');
}

function addClass() {
	return this.classList.add('finished');
}

button.addEventListener('click', toggleClass);
button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass);