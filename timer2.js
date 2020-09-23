const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log('press b to hear beep immediately OR type any number from 1 to 9 to set a timer to beep');
stdin.on('data', (input) => {
  if (input === 'b') {
    console.log(input);
    process.stdout.write('\x07');
  } else if (input === '\u0003') {
    console.log('Thanks for using me, ciao');
    process.exit();
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, input * 1000);
});