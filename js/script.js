const menuBtn = document.querySelector('.togglerBtn');
const menuLinksBkg = document.querySelector('.nav ul');
const menuLinksBtns = document.querySelector('.nav li');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
if(!menuOpen) {
  menuBtn.classList.add('open');
  menuLinksBkg.classList.add('open');
  menuLinksBtns.classList.add('open');
  menuOpen = true;

} else {
  menuBtn.classList.remove('open');
  menuLinksBkg.classList.remove('open');
  menuLinksBtns.classList.remove('open');
  menuOpen = false;
}
});    