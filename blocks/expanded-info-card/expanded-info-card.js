export default function decorate(block) {
  const infoCards = document.querySelector('.section.expanded-info-card-container');
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');

  [...infoCards.children].forEach((childDiv) => {
    const [card] = [...childDiv.children];
    const infoDiv = document.createElement('div');
    infoDiv.innerHTML = card.innerHTML;

    infoDiv.classList.add('info-card');

    infoContainer.appendChild(infoDiv);
  });

  block.textContent = '';
  block.append(infoCards);
}
