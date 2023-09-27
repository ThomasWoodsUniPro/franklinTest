export default function decorate(block) {
  const symptoms = document.querySelector('.symptoms.block');
  const ul = document.createElement('ul');
  ul.classList.add('no-bullet', 'symptoms-container');

  [...symptoms.children].forEach((childDiv) => {
    const [symptom] = [...childDiv.children];
    const li = document.createElement('li');
    li.innerHTML = symptom.innerHTML;

    let symptomsName = '';
    const symptomsClassList = [...li.querySelector('span').classList];

    symptomsClassList.forEach((className) => {
      if (className.startsWith('icon-')) {
        [, symptomsName] = className.split('icon-');
      }
    });

    li.classList.add('symptoms-box', 'three-rounded', `border-${symptomsName}`);

    ul.appendChild(li);
  });

  block.textContent = '';
  block.append(ul);
}
