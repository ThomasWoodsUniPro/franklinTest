const toggleButtons = document.querySelectorAll('.toggle-button');
console.log('toggle buttons', toggleButtons[0], toggleButtons[1]);
const symptomsButton = toggleButtons[0];
const treatmentButton = toggleButtons[1];
const toggleFunction = (button) => {
  console.log('symptomsButton === button', symptomsButton === button);
  if (symptomsButton === button) {
    document.querySelector('.symptoms-wrapper').classList.remove('hide-element');
    document.querySelector('.treatment-wrapper').classList.add('hide-element');
  } else {
    document.querySelector('.treatment-wrapper').classList.remove('hide-element');
    document.querySelector('.symptoms-wrapper').classList.add('hide-element');
  }
};

symptomsButton.addEventListener('click', toggleFunction(symptomsButton));
treatmentButton.addEventListener('click', toggleFunction(treatmentButton));