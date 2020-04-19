'use strict';

const stack = document.querySelector(".stack");

[...stack.children].reverse().forEach(i => stack.append(i));

stack.addEventListener("click", swap);

function swap(e) {
  const card = document.querySelector(".card:last-child");
  if (e.target !== card) return;
  card.style.animation = "swap 700ms forwards";

  setTimeout(() => {
    card.style.animation = ""; // stop the animation
    stack.prepend(card);
  }, 700);
}