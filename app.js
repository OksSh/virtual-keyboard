//Variables
const keyCodes = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,
  84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76,
  186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 91, 18,
  32, 18, 17, 37, 38, 40, 39,
];
const keys = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  '&lArr;',
  'Tab',
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  '[',
  ']',
  '\\',
  'CapsLock',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  ';',
  "'",
  'Enter',
  'Shift',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  ',',
  '.',
  '/',
  'Shift',
  'Ctrl',
  'Meta',
  'Alt',
  ' ',
  'Alt',
  'Ctrl',
  '&larr;',
  '&uarr;',
  '&darr;',
  '&rarr;',
];

let keyboard = document.createElement('div');
let textArea = document.createElement('textarea');

//Add elements
textArea.className = 'text-area';
document.body.append(textArea);

keyboard.className = 'keyboard';
document.body.append(keyboard);

for (let i = 0; i < keys.length; i++) {
  let button = document.createElement('div');
  button.className = 'button';
  if (keys[i] == ' ') {
    button.classList.add('button-space');
  }
  if (keys[i] == 'CapsLock' || keys[i] == 'Shift') {
    button.classList.add('button-middle');
  }
  button.innerHTML = keys[i];
  keyboard.append(button);
}

//Listeners
