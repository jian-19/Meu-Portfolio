function menuOnClick() {
  document.querySelector("#menu-bar").classList.toggle("change");
  document.querySelector("#nav").classList.toggle("change");
  document.querySelector("#menu-bg").classList.toggle("change-bg");
}

document.querySelector("#menu-bar").addEventListener('click', () => menuOnClick());



function eraseInput() {
  document.querySelector('.name').value;
  document.querySelector('.email').value;
  document.querySelector('.text-box').value;
}

document.querySelector(".send").addEventListener('click', () => eraseInput());
