'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
console.log(btnShowModal);
// tạo hàm tắt modal là: closeModal

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// tạo hàm mở modal là: openModal
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (esc) {
  if (esc.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
