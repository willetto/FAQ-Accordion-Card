'use strict';

const faqs = document.querySelector('.FAQs');
const boxes = document.querySelectorAll('.box');

faqs.addEventListener('click', e => {
  boxes.forEach(box => box.classList.remove('active'));
  e.target.closest('.box').classList.add('active');
});
