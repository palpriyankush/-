let position = 1;
let size = 50;

function modifySpace(space) {
  let modifiedSpace = "";
  for (let index = 0; index <= space.length - 1; index++) {
    modifiedSpace += space[index];
  }

  return modifiedSpace;
}

function drawHeader(header, size) {
  for (let index = 1; index < size; index++) {
    if (index % 5 === 0) {
      header += "┳";
      continue;
    }
    header += "━";
  }

  return header + "┓";
}

function drawFooter(footer, size, symbolOne, symbolTwo) {
  for (let index = 1; index < size; index++) {
    if (index % 5 === 0) {
      footer += symbolOne;
      continue;

    }
    footer += "━";
  }

  return footer + symbolTwo;
}

function createField(total, index, size, row) {
  let space = "";

  for (index = 1; index <= size; index++) {

    if (index === (((total % 10) * 5)) && row === Math.floor(total / 10) + 1) {
      space = modifySpace(space);
      space += "👦  ┃";
      position++;
      continue;
    }

    if (index % 5 === 0) {
      if (position === 100) {
        space += "🥇  ┃";
        break;
      }

      if (position % 13 === 0 || position === 5) {
        space += "🐍  ┃";
        position++;
        continue;
      }

      if (position % 22 === 0) {
        space += "🪜  ┃";
        position++;
        continue;
      }

      if (position < 10) {
        space += ("0" + position++) + "  ┃";
        continue;
      }
      space += position++ + "  ┃";
    }
  }

  return "┃" + space;
}

function createMessage(playerPosition, dice) {
  const position = playerPosition + dice;
  const initialMsgPartOne = '👨🏾 Your position:' + playerPosition + '\n';
  const initialMsgPartTwo = '🥇 Victory position :' + 100 + '\n';

  console.log(initialMsgPartOne + initialMsgPartTwo);

  if (position > 100) {
    return 'You got ' + dice + ' and you exceeded game boundary! TRY AGAIN!\n';
  }

  return 'You got ' + dice + ' ,now your current pos is ' + position + '\n';
}

function createLadderMessage(playerPosition) {
  return "Hurray! you got🪜 and you are on position" + playerPosition;

}

function createSnakeMessage(playerPosition) {
  return 'Oops! You got bitten by a snake Now you are on position ' + playerPosition;
}

function gotSnake(playerPosition, dice) {
  switch (playerPosition) {
    case 5:
      playerPosition = 0;
      break;
    case 13:
      playerPosition = 5;
      break;
    case 26:
      playerPosition = 22;
      break;
    case 39:
      playerPosition = 52;
      break;
    case 52:
      playerPosition = 10;
      break;
    case 65:
      playerPosition = 7;
      break;
    case 78:
      playerPosition = 70;
      break;
    case 91:
      playerPosition = 75;
      break;
    default:
      return playerPosition;
  }

  console.log(createSnakeMessage(playerPosition, dice));
  return playerPosition;
}

function gotLadder(playerPosition, dice) {
  switch (playerPosition) {
    case 22:
      playerPosition = 88;
      break;
    case 44:
      playerPosition = 60;
      break;
    case 66:
      playerPosition = 22;
      break;
    case 88:
      playerPosition = 100;
      break;
    default:
      return playerPosition;
  }

  console.log(createLadderMessage(playerPosition, dice));
  return playerPosition;
}

function animation() {
  const LENGTH = 8;

  return rollDice();

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
    animate(4, 400000000);
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
    return diceValue;
  }
}

function drawTheBox(position) {
  console.log(drawHeader("┏", size));
  for (let iterator = 1; iterator < 10; iterator++) {
    console.log(createField(position, 0, size, iterator));
    console.log(drawFooter("┣", 50, '╋', '┫'));
  }

  console.log(createField(position, 0, size, 10));
  console.log(drawFooter("┗", 50, '┻', '┛'));
}

function mainGame() {
  let playerPosition = 0;
  let total = playerPosition;
  let wantReplay = 1;
  let wantToRoll = 1;

  while (playerPosition !== 100 && wantReplay && wantToRoll) {
    drawTheBox(playerPosition);

    wantToRoll = confirm('Roll the dice 🎲?');

    if (wantToRoll) {
      console.clear();
      const diceOutcome = animation();
      const message = createMessage(playerPosition, diceOutcome);
      console.log(message);
      playerPosition += diceOutcome + playerPosition <= 100 ? diceOutcome : 0;
      playerPosition = gotSnake(playerPosition, diceOutcome);
      playerPosition = gotLadder(playerPosition, diceOutcome);

      if (playerPosition === 100) {
        console.log('🎉Congrats! You won!');

        wantReplay = confirm("do you want to play again?");
        console.clear();

        total = 0;
        playerPosition = 0;
      }
    }
  }

  return 'OK! Thanks For Playing, Bye ';
}

console.log(mainGame());