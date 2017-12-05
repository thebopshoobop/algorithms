const outOfPlace = arr =>
  arr.map((row, x) => row.map((cell, y) => arr[arr.length - 1 - y][x]));

const inPlace = arr => {
  const l = arr.length;
  const o = l - 1;

  for (let x = 0; x < l; x++) {
    for (let y = 0; y < l - x; y++) {
      [arr[x][y], arr[o - y][o - x]] = [arr[o - y][o - x], arr[x][y]];
    }
  }

  for (let i = 0; i < Math.floor(l / 2); i++) {
    [arr[i], arr[o - i]] = [arr[o - i], arr[i]];
  }

  return arr;
};
module.exports = { outOfPlace, inPlace };
