const LENGTH = 8;

function delay(delaySpeed) {
  for (let i = 0; i < delaySpeed; i++) { };
}

function animate(times, delaySpeed) {
  if (times === 0) {
    return;
  }

  if (times === 2) {
    return animate(1, 800000000);
  }

  console.clear();
  createDiceTwo();
  delay(delaySpeed);
  console.clear();
  createDiceOne();
  delay(delaySpeed);
  console.clear();
  createDiceFour();
  delay(delaySpeed);
  console.clear();
  createDiceThree();
  delay(delaySpeed);
  console.clear();
  createDiceSix();
  delay(delaySpeed);
  console.clear();
  createDiceFive();
  delay(delaySpeed);
  console.clear();

  return animate(times - 1, 400000000);
}

function createTopForAll(string) {
  for (let index = 0; index < LENGTH; index++) {
    string += '━';
  }

  return string + '┓';
}

function createBottomForAll(string) {
  for (let index = 0; index < LENGTH; index++) {
    string += '━';
  }

  return string + '┛';
}

function createDiceOne() {
  const diceOneTop = createTopForAll('┏');
  const diceOneMiddle = '┃        ┃\n┃   ⚪   ┃\n┃        ┃';
  const diceOneBottom = createBottomForAll('┗');

  console.log(diceOneTop);
  console.log(diceOneMiddle);
  console.log(diceOneBottom);
}

function createDiceTwo() {
  const diceTwoTop = createTopForAll('┏');
  const diceTwoMiddle = '┃        ┃\n┃ ⚪  ⚪ ┃\n┃        ┃';
  const diceTwoBottom = createBottomForAll('┗');

  console.log(diceTwoTop);
  console.log(diceTwoMiddle);
  console.log(diceTwoBottom);
}

function createDiceThree() {
  const diceThreeTop = createTopForAll('┏');
  const diceThreeMiddle = '┃⚪      ┃\n┃   ⚪   ┃\n┃      ⚪┃';
  const diceThreeBottom = createBottomForAll('┗');

  console.log(diceThreeTop);
  console.log(diceThreeMiddle);
  console.log(diceThreeBottom);
}

function createDiceFour() {
  const diceFourTop = createTopForAll('┏');
  const diceFourMiddle = '┃⚪    ⚪┃\n┃        ┃\n┃⚪    ⚪┃';
  const diceFourBottom = createBottomForAll('┗');

  console.log(diceFourTop);
  console.log(diceFourMiddle);
  console.log(diceFourBottom);
}

function createDiceFive() {
  const diceFiveTop = createTopForAll('┏');
  const diceFiveMiddle = '┃⚪    ⚪┃\n┃   ⚪   ┃\n┃⚪    ⚪┃';
  const diceFiveBottom = createBottomForAll('┗');

  console.log(diceFiveTop);
  console.log(diceFiveMiddle);
  console.log(diceFiveBottom);
}

function createDiceSix() {
  const diceSixTop = createTopForAll('┏');
  const diceSixMiddle = '┃⚪    ⚪┃\n┃⚪    ⚪┃\n┃⚪    ⚪┃';
  const diceSixBottom = createBottomForAll('┗');

  console.log(diceSixTop);
  console.log(diceSixMiddle);
  console.log(diceSixBottom);
}

function rollDice() {
  animate(5, 400000000);
  const diceValue = Math.ceil(Math.random() * 6);
  switch (diceValue) {
    case 1:
      createDiceOne();
      break;

    case 2:
      createDiceTwo();
      break;

    case 3:
      createDiceThree();
      break;

    case 4:
      createDiceFour();
      break;
    
    case 5:
      createDiceFive();
      break;

    case 6:
      createDiceSix();
      break;
  }
}

rollDice();