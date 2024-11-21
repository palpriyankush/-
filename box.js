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

  header += "┓";

  return header;
}

function drawFooter(footer, size) {
  for (let index = 1; index < size; index++) {
    if (index % 5 === 0) {
      footer += "┻";
      continue;
    }
    footer += "━";
  }

  footer += "┛";

  return footer;
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
  // if (playerPosition === 22) {
  //   createMessage(playerPosition, 0);
  //   playerPosition = 88;
  //   return playerPosition;
  // }
}

function rollDice() {
  return (Math.round(Math.random() * 100) % 6) + 1;
}

function drawTheBox(position) {
  for (let iterator = 1; iterator <= 10; iterator++) {
    console.log(drawHeader("┏", size));
    console.log(createField(position, 0, size, iterator));
  }
  console.log(drawFooter("┗", 50));

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
      const diceOutcome = rollDice();
      const message = createMessage(playerPosition, diceOutcome);
      console.log(message);
      playerPosition += diceOutcome + playerPosition <= 100 ? diceOutcome : 0;
      playerPosition = gotSnake(playerPosition, diceOutcome);
      playerPosition = gotLadder(playerPosition, diceOutcome);

      position = 1;


      if (playerPosition === 100) {
        console.log('🎉Congrats! You won!');
        //drawTheBox(playerPosition);
        wantReplay = confirm("do you want to play again?");
        console.clear();
        total = 0;
        playerPosition = 0;
      }
    }
  }

  return 'Scared? OK Bye then.';
}

console.log(mainGame());