let input = process.argv.slice(2);
let numArr = [];
input.forEach(element => {
  if (typeof parseInt(element) === 'number' && parseInt(element) >= 0) {
    numArr.push(parseInt(element));
  }
});
if (numArr.length === 0) {
  console.log('.');
} else {
  numArr.sort();
  for (let i = 0; i < numArr.length; i++) {
    setTimeout(() => {
      console.log('.');
    }, numArr[i] * 1000);
  }
}
