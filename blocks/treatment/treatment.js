export default function decorate(block) {
  const wrapper = document.querySelector('.treatment-wrapper');
  const treatments = document.querySelector('.treatment.block');
  const ul = document.createElement('ul');
  ul.classList.add('no-bullet', 'treatment-container');

  [...treatments.children].forEach((childDiv) => {
    const [treatment] = [...childDiv.children];
    const li = document.createElement('li');
    li.innerHTML = treatment.innerHTML;

    let treatmentsName = '';
    const treatmentsClassList = [...li.querySelector('span').classList];

    treatmentsClassList.forEach((className) => {
      if (className.startsWith('icon-')) {
        [, treatmentsName] = className.split('icon-');
      }
    });

    li.classList.add('treatment-box', 'three-rounded', `border-${treatmentsName}`);

    ul.appendChild(li);
  });

  block.textContent = '';
  block.append(ul);
  wrapper.classList.add('hide-element');
}
