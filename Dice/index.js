export const Dice = (props) => {
  const { side } = props;
  const element = document.createElement('div');

  element.innerHTML = `<div class="dice__side dice__side--3"></div>
  <button class="btn btn--small roll-btn">hodit</button>`;

  return element;
};
