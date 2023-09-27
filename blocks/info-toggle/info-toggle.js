export default function decorate(block) {
  const options = document.querySelector('.info-toggle.block');
  const innerDiv = options.querySelector('div');

  const toggle = document.createElement('div');
  [...innerDiv.children].forEach((child) => {
    child.classList.add('info-toggle-button');

    toggle.appendChild(child);
  });

  innerDiv.remove();

  const symptoms = toggle.querySelector('div:nth-child(1)');
  const treatment = toggle.querySelector('div:nth-child(2)');
  symptoms.classList.add('active', 'info-toggle-button');

  const toggleActiveAndSetSession = (activeElement, inactiveElement) => {
    inactiveElement.classList.remove('active');
    activeElement.classList.add('active');
  };

  symptoms.addEventListener('click', () => toggleActiveAndSetSession(symptoms, treatment));
  treatment.addEventListener('click', () => toggleActiveAndSetSession(treatment, symptoms));

  block.textContent = '';
  block.append(toggle);
}
