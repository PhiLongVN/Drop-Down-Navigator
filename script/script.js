const toggle = document.querySelector('.head-toggle');
const head = document.querySelector('.head');
const drop1 = document.querySelector('.drop1');
const drop2 = document.querySelector('.drop2');

toggle.addEventListener('click', () => {
  head.classList.toggle('active');
});

drop1.addEventListener('click', () => {
  drop1.classList.toggle('active');
});
drop2.addEventListener('click', () => {
  drop2.classList.toggle('active');
});

window.onscroll = () => {
  head.classList.remove('active');
};
