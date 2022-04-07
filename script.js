'use strict';

const faqs = document.querySelector('.FAQs');
const boxes = document.querySelectorAll('.box');

faqs.addEventListener('click', e => {
  const targetBox = e.target.closest('.box').classList;
  if (targetBox.contains('active')) {
    targetBox.remove('active');
  } else {
    boxes.forEach(box => box.classList.remove('active'));
    targetBox.add('active');
  }
});
