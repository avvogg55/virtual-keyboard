const body = document.querySelector('body');

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');

const textArea = document.createElement('textarea');

const keyboardBlock = document.createElement('div');
keyboardBlock.classList.add('keyboard__block');

body.appendChild(keyboard);

keyboard.appendChild(textArea);
keyboard.appendChild(keyboardBlock);

function appendButtons(i, line) {
  const lBS = 'square';
  const lBL = 'long';
  const lBT = 'tab-style';
  const lBM = 'medium';
  const lBSpace = 'space-style';
  const notInputBtn = 'not-input-btn';
  const inputBtn = 'input-btn';

  const firstText = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPC'];
  const secondText = ['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '&bsol;', 'DEL'];
  const thirdText = ['CAPSLOCK', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '&apos;', 'ENTER'];
  const fourthText = ['SHIFT', '&bsol;', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'UP', 'SHFT'];
  const fifthText = ['CTRL', 'WIN', 'ALT', 'SPACE', 'ALT', 'CTRL', 'LFT', 'DWN', 'RGT'];

  const firstId = ['tilda', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'minus', 'equality-sign', 'backspace'];
  const secondId = ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'left-square-bracket', 'right-square-bracket', 'left-slash', 'delete'];
  const thirdId = ['caps-lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'semicolon', 'single-quote', 'enter'];
  const fourthId = ['left-shift', 'left-slash-single', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'comma', 'dot', 'right-slash', 'up', 'right-shift'];
  const fifthId = ['left-ctrl', 'win', 'left-alt', 'space', 'right-alt', 'right-ctrl', 'left', 'down', 'right'];

  const firstClass = [lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBL];
  const secondClass = [lBT, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS];
  const thirdClass = [lBL, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBL];
  const fourthClass = [lBL, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS];
  const fifthClass = [lBM, lBS, lBM, lBSpace, lBS, lBM, lBS, lBS, lBS];

  const firstInput = [inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn,
    inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn];
  const secondInput = [inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn,
    inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn];
  const thirdInput = [notInputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn,
    inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn];
  const fourthInput = [notInputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn,
    inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, notInputBtn, notInputBtn];
  const fifthInput = [notInputBtn, notInputBtn, notInputBtn, inputBtn, notInputBtn,
    notInputBtn, notInputBtn, notInputBtn, notInputBtn];

  if (i === 0) {
    for (let y = 0; y < 14; y += 1) {
      const button = document.createElement('button');

      button.id = firstId[y];
      button.classList.add('line__button');
      button.classList.add(firstClass[y]);
      if (firstInput[y].trim() !== '') button.classList.add(firstInput[y]);
      button.innerHTML = firstText[y];

      line.appendChild(button);
    }
  }

  if (i === 1) {
    for (let y = 0; y < 15; y += 1) {
      const button = document.createElement('button');

      button.id = secondId[y];
      button.classList.add('line__button');
      button.classList.add(secondClass[y]);
      if (secondInput[y].trim() !== '') button.classList.add(secondInput[y]);
      button.innerHTML = secondText[y];

      line.appendChild(button);
    }
  }

  if (i === 2) {
    for (let y = 0; y < 13; y += 1) {
      const button = document.createElement('button');

      button.id = thirdId[y];
      button.classList.add('line__button');
      button.classList.add(thirdClass[y]);
      if (thirdInput[y].trim() !== '') button.classList.add(thirdInput[y]);
      button.innerHTML = thirdText[y];

      line.appendChild(button);
    }
  }

  if (i === 3) {
    for (let y = 0; y < 14; y += 1) {
      const button = document.createElement('button');

      button.id = fourthId[y];
      button.classList.add('line__button');
      button.classList.add(fourthClass[y]);
      if (fourthInput[y].trim() !== '') button.classList.add(fourthInput[y]);
      button.innerHTML = fourthText[y];

      line.appendChild(button);
    }
  }

  if (i === 4) {
    for (let y = 0; y < 9; y += 1) {
      const button = document.createElement('button');

      button.id = fifthId[y];
      button.classList.add('line__button');
      button.classList.add(fifthClass[y]);
      if (fifthInput[y].trim() !== '') button.classList.add(fifthInput[y]);
      button.innerHTML = fifthText[y];

      line.appendChild(button);
    }
  }
}

function appendLines(parent) {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');

    line.classList.add('line');
    appendButtons(i, line);

    parent.appendChild(line);
  }
}

appendLines(keyboardBlock);

keyboardBlock.addEventListener('click', (event) => {
  if (event.target.classList.contains('input-btn')) {
    textArea.value += event.target.innerHTML;
  }
});
