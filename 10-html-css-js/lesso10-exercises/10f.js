function isToggled(selector) {
  const btn = document.querySelector(selector);

  if (btn.classList.contains('is-toggled')) {
    btn.classList.remove('is-toggled');
  } else {
    btn.classList.add('is-toggled');
  }
}