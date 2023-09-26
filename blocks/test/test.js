export default function decorate(block) {
  const list = document.querySelector('.test.block');
  const dl = document.createElement('dl');

  [...list.children].forEach((childDiv) => {
    const [definition, description] = [...childDiv.children];
    const dt = document.createElement('dt');
    dt.innerText = definition.innerText;

    const dd = document.createElement('dd');
    dd.innerText = description.innerText;

    dl.appendChild(dt);
    dl.appendChild(dd);
  });

  block.textContent = '';
  block.append(dl);
}
