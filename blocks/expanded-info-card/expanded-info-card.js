export default function decorate(block) {
  const container = document.querySelector('.expanded-info-card.block');
  const newContainer = document.createElement('div');

  const sections = document.querySelectorAll('.expanded-info-card.block > div');

  sections[0].classList.add('section1');
  sections[1].classList.add('section2');
  sections[2].classList.add('section3');

  newContainer.innerHTML = container.outerHTML;

  block.textContent = '';
  block.append(newContainer);
}
