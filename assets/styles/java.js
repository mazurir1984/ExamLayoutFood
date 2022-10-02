const btn = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');

function toggleNavList() {
  navList.classList.toggle('nav-list-opened');
}

btn.addEventListener('click', toggleNavList);