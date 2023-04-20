import { roll } from '../index.js';
export const Dice = (props) => {
  const { side } = props;
  const element = document.createElement('div');
  element.classList.add('dice');

  element.innerHTML = `<div class="dice__side dice__side--${side}"></div>
  <button class="btn btn--small roll-btn">hodit</button>`;
  const buttonElm = element.querySelector('.btn');

  buttonElm.addEventListener('click', () => {
    let newSide = roll();
    while (newSide === side) {
      newSide = roll();
    }
    element.replaceWith(Dice({ side: newSide }));
  });

  return element;
};
