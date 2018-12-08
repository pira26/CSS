'use strict';

const button   = document.querySelector('.submit-button'),
      stateMsg = document.querySelector('.pre-state-msg');

const updateButtonMsg = () => {
  button.classList.add('state-1', 'animated');
  return setTimeout(finalButtonMsg, 2000);
};

const finalButtonMsg = () => {
  button.classList.add('state-2');
  return setTimeout(setInitialButtonState, 2000);
};

const setInitialButtonState = () => button.classList.remove('state-1', 'state-2', 'animated');

button.addEventListener('click', updateButtonMsg);