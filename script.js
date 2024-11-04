document.addEventListener('click', e => {
  if (e.target.matches('.item')) {
    document
      .querySelectorAll('.active')
      .forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
  }
});
