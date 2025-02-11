function isToggled(selector) {
  const btn = document.querySelector(selector);

  // Before turning this button ON, check if there's
  // already a button that's turned ON and turn it OFF.
  turnOffPreviousButton();

  if (btn.classList.contains('is-toggled')) {
    btn.classList.remove('is-toggled');
  } else {
    btn.classList.add('is-toggled');
  }

  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
  }
}
