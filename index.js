import { Dice } from './Dice/index.js';
const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log('funguju!');

document
  .querySelector('#dice-row')
  .append(Dice({ side: true }), Dice({ side: true }), Dice({ side: true }));
