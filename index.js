import { Dice } from './Dice/index.js';
export const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log('funguju!');

document
  .querySelector('#dice-row')
  .append(
    Dice({ side: roll() }),
    Dice({ side: roll() }),
    Dice({ side: roll() }),
    Dice({ side: roll() }),
  );
