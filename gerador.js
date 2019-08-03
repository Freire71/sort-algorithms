const array = [];
for (let i = 0; i < 10; i++) {
  array[i] = parseInt((Math.random() * 100).toFixed(0));
}
console.log(JSON.stringify(array));
