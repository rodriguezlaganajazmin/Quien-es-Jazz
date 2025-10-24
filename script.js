const accordionBtn = document.querySelector('.accordion_btn');
const accordionContent = document.querySelector('.accordion_content');

accordionBtn.addEventListener('click', () => {
  accordionContent.classList.toggle('show');
});
