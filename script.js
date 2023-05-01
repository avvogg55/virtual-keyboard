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

  const inputBtn = 'input-btn';
  const refBtn = 'ref-btn';
  const functBtn = 'funct-btn';

  const firstText = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPC'];
  const secondText = ['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&bsol;', 'DEL'];
  const thirdText = ['CAPSLCK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&apos;', 'ENTER'];
  const fourthText = ['SHIFT', '&bsol;', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'UP', 'SHFT'];
  const fifthText = ['CTRL', 'WIN', 'ALT', 'SPACE', 'ALT', 'CTRL', 'LFT', 'DWN', 'RGT'];

  const firstId = ['tilda', '1-button', '2-button', '3-button', '4-button', '5-button', '6-button', '7-button', '8-button', '9-button', '0-button', 'minus', 'equality-sign', 'backspace'];
  const secondId = ['tab', 'q-button', 'w-button', 'e-button', 'r-button', 't-button', 'y-button', 'u-button', 'i-button', 'o-button', 'p-button', 'left-square-bracket', 'right-square-bracket', 'left-slash', 'delete'];
  const thirdId = ['caps-lock', 'a-button', 's-button', 'd-button', 'f-button', 'g-button', 'h-button', 'j-button', 'k-button', 'l-button', 'semicolon', 'single-quote', 'enter'];
  const fourthId = ['left-shift', 'left-slash-single', 'z-button', 'x-button', 'c-button', 'v-button', 'b-button', 'n-button', 'm-button', 'comma', 'dot', 'right-slash', 'up', 'right-shift'];
  const fifthId = ['left-ctrl', 'win', 'left-alt', 'space', 'right-alt', 'right-ctrl', 'left', 'down', 'right'];

  const firstClass = [lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBL];
  const secondClass = [lBT, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS];
  const thirdClass = [lBL, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBL];
  const fourthClass = [lBL, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS, lBS];
  const fifthClass = [lBM, lBS, lBM, lBSpace, lBS, lBM, lBS, lBS, lBS];

  const firstInput = [inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn,
    inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, refBtn];
  const secondInput = [refBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn,
    inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, refBtn];
  const thirdInput = [functBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn,
    inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, refBtn];
  const fourthInput = [functBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn,
    inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, inputBtn, functBtn, functBtn];
  const fifthInput = [functBtn, functBtn, functBtn, refBtn, functBtn,
    functBtn, functBtn, functBtn, functBtn];

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

const buttonIds = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  Alt: 'left-alt',
  AltGraph: 'right-alt',
  ' ': 'space',
  Win: 'win',
  OS: 'win',
  ControlRight: 'right-ctrl',
  ControlLeft: 'left-ctrl',
  Backspace: 'backspace',
  Tab: 'tab',
  Delete: 'delete',
  CapsLock: 'caps-lock',
  Enter: 'enter',
  1: '1-button',
  2: '2-button',
  3: '3-button',
  4: '4-button',
  5: '5-button',
  6: '6-button',
  7: '7-button',
  8: '8-button',
  9: '9-button',
  0: '0-button',
  '=': 'equality-sign',
  '~': 'tilda',
  '-': 'minus',
  '[': 'left-square-bracket',
  ']': 'right-square-bracket',
  '\\': 'left-slash',
  ';': 'semicolon',
  SingleQuote: 'single-quote',
  ',': 'comma',
  '.': 'dot',
  '/': 'right-slash',
  q: 'q-button',
  w: 'w-button',
  e: 'e-button',
  r: 'r-button',
  t: 't-button',
  y: 'y-button',
  u: 'u-button',
  i: 'i-button',
  o: 'o-button',
  p: 'p-button',
  a: 'a-button',
  s: 's-button',
  d: 'd-button',
  f: 'f-button',
  g: 'g-button',
  h: 'h-button',
  j: 'j-button',
  k: 'k-button',
  l: 'l-button',
  z: 'z-button',
  x: 'x-button',
  c: 'c-button',
  v: 'v-button',
  b: 'b-button',
  n: 'n-button',
  m: 'm-button',
};

//----------------Click listeners---------------------

keyboardBlock.addEventListener('click', (event) => {
  if (event.target.classList.contains('input-btn')) {
    textArea.value += event.target.innerHTML;
  }
});

keyboardBlock.addEventListener('click', (event) => {
  if (event.target.id === 'backspace') {
    console.log('backsp click');
    const currentValue = textArea.value;
    textArea.value = currentValue.substring(0, currentValue.length - 1);
  }
});

//-----------------Key Listeners----------------------

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const buttonId = buttonIds[event.key];
  if (buttonId) {
    const button = document.getElementById(buttonId);
    if (button.classList.contains('input-btn')) {
      button.classList.add('active-button');
      button.click();
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    textArea.setSelectionRange(textArea.selectionStart - 1, textArea.selectionStart - 1);
    const buttonId = buttonIds[event.key];
    const button = document.getElementById(buttonId);
    button.classList.add('active-button');
  }

  if (event.key === 'ArrowRight') {
    textArea.setSelectionRange(textArea.selectionStart + 1, textArea.selectionStart + 1);
    const buttonId = buttonIds[event.key];
    const button = document.getElementById(buttonId);
    button.classList.add('active-button');
  }

  if (event.key === 'ArrowUp') {
    textArea.setSelectionRange(textArea.selectionStart - textArea.cols,
      textArea.selectionStart - textArea.cols);
    const buttonId = buttonIds[event.key];
    const button = document.getElementById(buttonId);
    button.classList.add('active-button');
  }
  if (event.key === 'ArrowDown') {
    textArea.setSelectionRange(textArea.selectionStart + textArea.cols,
      textArea.selectionStart + textArea.cols);
    const buttonId = buttonIds[event.key];
    const button = document.getElementById(buttonId);
    button.classList.add('active-button');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    const buttonId = buttonIds[event.key];
    const button = document.getElementById(buttonId);
    button.classList.add('active-button');
    const currentValue = textArea.value;
    textArea.value = currentValue.substring(0, currentValue.length - 1);
    event.preventDefault();
  }
});

document.addEventListener('keyup', (event) => {
  const buttonId = buttonIds[event.key];
  if (buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.classList.remove('active-button');
    }
  }
});
