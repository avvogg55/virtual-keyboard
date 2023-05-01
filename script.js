const body = document.querySelector('body');

const heading = document.createElement('h1');
heading.innerHTML = "Gleb's Keyboard";
heading.classList.add('heading');

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');

const textArea = document.createElement('textarea');
textArea.setAttribute('autofocus', '');

const keyboardBlock = document.createElement('div');
keyboardBlock.classList.add('keyboard__block');

body.appendChild(heading);
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

  const firstText = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPC'];
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
  ' ': 'space',
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
  '`': 'tilda',
  '-': 'minus',
  '[': 'left-square-bracket',
  ']': 'right-square-bracket',
  '\\': 'left-slash',
  ';': 'semicolon',
  "'": 'single-quote',
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
  Q: 'q-button',
  W: 'w-button',
  E: 'e-button',
  R: 'r-button',
  T: 't-button',
  Y: 'y-button',
  U: 'u-button',
  I: 'i-button',
  O: 'o-button',
  P: 'p-button',
  A: 'a-button',
  S: 's-button',
  D: 'd-button',
  F: 'f-button',
  G: 'g-button',
  H: 'h-button',
  J: 'j-button',
  K: 'k-button',
  L: 'l-button',
  Z: 'z-button',
  X: 'x-button',
  C: 'c-button',
  V: 'v-button',
  B: 'b-button',
  N: 'n-button',
  M: 'm-button',
};

keyboardBlock.addEventListener('click', (event) => {
  const caps = document.querySelector('#caps-lock');
  if (event.target.classList.contains('input-btn')) {
    if (caps.classList.contains('caps-active')) {
      const text = event.target.innerHTML;
      textArea.value += text.toUpperCase();
    } else {
      textArea.value += event.target.innerHTML;
    }
  }
});

keyboardBlock.addEventListener('click', (event) => {
  if (event.target.id === 'caps-lock') {
    event.target.classList.toggle('caps-active');
  }
});

keyboardBlock.addEventListener('click', (event) => {
  if (event.target.id === 'space') {
    textArea.value += ' ';
    event.preventDefault();
  }
});

keyboardBlock.addEventListener('click', (event) => {
  if (event.target.id === 'enter') {
    textArea.value += '\n';
    event.preventDefault();
  }
});

keyboardBlock.addEventListener('click', (event) => {
  if (event.target.id === 'tab') {
    textArea.value += '\t';
    event.preventDefault();
  }
});

keyboard.addEventListener('click', (event) => {
  if (event.target.id === 'left') {
    textArea.selectionStart = Math.max(0, textArea.selectionStart - 1);
    textArea.selectionEnd = textArea.selectionStart;
    event.preventDefault();
  } else if (event.target.id === 'right') {
    textArea.selectionStart = Math.min(textArea.value.length, textArea.selectionStart + 1);
    textArea.selectionEnd = textArea.selectionStart;
    event.preventDefault();
  } else if (event.target.id === 'backspace') {
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
    if (selectionStart === selectionEnd) {
      textArea.value = textArea.value.slice(0, selectionStart - 1)
      + textArea.value.slice(selectionEnd);
      textArea.selectionStart = Math.max(0, selectionStart - 1);
      textArea.selectionEnd = textArea.selectionStart;
    } else {
      textArea.value = textArea.value.slice(0, selectionStart) + textArea.value.slice(selectionEnd);
      textArea.selectionStart = selectionStart;
      textArea.selectionEnd = selectionStart;
    }
    event.preventDefault();
  } else if (event.target.id === 'delete') {
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
    if (selectionStart === selectionEnd) {
      textArea.value = textArea.value.slice(0, selectionStart)
      + textArea.value.slice(selectionEnd + 1);
      textArea.selectionStart = selectionStart;
      textArea.selectionEnd = selectionStart;
    } else {
      textArea.value = textArea.value.slice(0, selectionStart) + textArea.value.slice(selectionEnd);
      textArea.selectionStart = selectionStart;
      textArea.selectionEnd = selectionStart;
    }
    event.preventDefault();
  }
});

const winKey = document.querySelector('#win');

document.addEventListener('keydown', (event) => {
  if (event.key === 'Meta' || event.key === 'Win') {
    winKey.classList.add('active-button');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Meta' || event.key === 'Win') {
    winKey.classList.remove('active-button');
  }
});

const leftAltButton = document.querySelector('#left-alt');
const rightAltButton = document.querySelector('#right-alt');

document.addEventListener('keydown', (event) => {
  if (event.key === 'Alt') {
    if (event.location === 1) {
      leftAltButton.classList.add('active-button');
    } else if (event.location === 2) {
      rightAltButton.classList.add('active-button');
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Alt') {
    if (event.location === 1) {
      leftAltButton.classList.remove('active-button');
    } else if (event.location === 2) {
      rightAltButton.classList.remove('active-button');
    }
  }
});

const ctrlLeftKey = document.querySelector('#left-ctrl');
const ctrlRightKey = document.querySelector('#right-ctrl');

document.addEventListener('keydown', (event) => {
  if (event.key === 'Control' && event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
    ctrlLeftKey.classList.add('active-button');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Control' && event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
    ctrlLeftKey.classList.remove('active-button');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Control' && event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
    ctrlRightKey.classList.add('active-button');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Control' && event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
    ctrlRightKey.classList.remove('active-button');
  }
});

const capsLockButton = document.querySelector('#caps-lock');

document.addEventListener('keydown', (event) => {
  if (event.getModifierState('CapsLock')) {
    capsLockButton.classList.add('caps-active');
  }
});

document.addEventListener('keyup', (event) => {
  if (!event.getModifierState('CapsLock')) {
    capsLockButton.classList.remove('caps-active');
  }
});

const shiftLeftBtn = document.querySelector('#left-shift');
const shiftRightBtn = document.querySelector('#right-shift');

document.addEventListener('keydown', (event) => {
  if (event.key === 'Shift') {
    if (event.location === 1) {
      shiftLeftBtn.classList.add('shift-active');
    } else if (event.location === 2) {
      shiftRightBtn.classList.add('shift-active');
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    if (event.location === 1) {
      shiftLeftBtn.classList.remove('shift-active');
    } else if (event.location === 2) {
      shiftRightBtn.classList.remove('shift-active');
    }
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const buttonId = buttonIds[event.key];
  if (buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.add('active-button');
    if (button.classList.contains('input-btn')) {
      button.click();
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    textArea.selectionStart = Math.max(0, textArea.selectionStart - 1);
    textArea.selectionEnd = textArea.selectionStart;
    event.preventDefault();
  } else if (event.key === 'ArrowRight') {
    textArea.selectionStart = Math.min(textArea.value.length, textArea.selectionStart + 1);
    textArea.selectionEnd = textArea.selectionStart;
    event.preventDefault();
  } else if (event.key === 'Backspace') {
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
    if (selectionStart === selectionEnd) {
      textArea.value = textArea.value.slice(0, selectionStart - 1)
      + textArea.value.slice(selectionEnd);
      textArea.selectionStart = Math.max(0, selectionStart - 1);
      textArea.selectionEnd = textArea.selectionStart;
    } else {
      textArea.value = textArea.value.slice(0, selectionStart) + textArea.value.slice(selectionEnd);
      textArea.selectionStart = selectionStart;
      textArea.selectionEnd = selectionStart;
    }
    event.preventDefault();
  } else if (event.key === 'Delete') {
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
    if (selectionStart === selectionEnd) {
      textArea.value = textArea.value.slice(0, selectionStart)
      + textArea.value.slice(selectionEnd + 1);
      textArea.selectionStart = selectionStart;
      textArea.selectionEnd = selectionStart;
    } else {
      textArea.value = textArea.value.slice(0, selectionStart) + textArea.value.slice(selectionEnd);
      textArea.selectionStart = selectionStart;
      textArea.selectionEnd = selectionStart;
    }
    event.preventDefault();
  }
});

function getCurrentLine(lines, cursorPos) {
  let lineCount = 0;
  let charCount = 0;
  for (let i = 0; i < lines.length; i += 1) {
    lineCount += 1;
    charCount += lines[i].length + 1;
    if (cursorPos < charCount) {
      return lineCount - 1;
    }
  }
  return -1;
}

function getNewLinePos(lines, newLine, cursorPos) {
  let charCount = 0;
  for (let i = 0; i < newLine; i += 1) {
    charCount += lines[i].length + 1;
  }
  if (cursorPos < charCount) {
    return charCount + cursorPos - (charCount - textArea.value.substring(0, charCount).lastIndexOf('\n') - 1);
  }
  return charCount + lines[newLine].length;
}

document.addEventListener('keydown', (event) => {
  const key = event.key;
  const cursorPos = textArea.selectionStart;
  const lines = textArea.value.split('\n');

  if (key === 'ArrowUp') {
    event.preventDefault();
    const currentLine = getCurrentLine(lines, cursorPos);
    if (currentLine > 0) {
      const newLinePos = getNewLinePos(lines, currentLine - 1, cursorPos);
      textArea.setSelectionRange(newLinePos, newLinePos);
    }
  } else if (key === 'ArrowDown') {
    event.preventDefault();
    const currentLine = getCurrentLine(lines, cursorPos);
    if (currentLine < lines.length - 1) {
      const newLinePos = getNewLinePos(lines, currentLine + 1, cursorPos);
      textArea.setSelectionRange(newLinePos, newLinePos);
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    textArea.value += '\n';
    event.preventDefault();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    textArea.value = textArea.value.substring(0, start) + '\t' + textArea.value.substring(end);
    textArea.selectionEnd = start + 1;
    textArea.selectionStart = textArea.selectionEnd;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    textArea.value += ' ';
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