const { outOfPlace, inPlace } = require("../src/rotation");

const rotators = [outOfPlace, inPlace];

const verify = (output, result) => {
  if (result.length !== output.length) {
    return false;
  }
  for (let x = 0; x < result.length; x++) {
    for (let y = 0; y < result.length; y++) {
      if (result[x][y] !== output[x][y]) {
        return false;
      }
    }
  }
  return true;
};

const checkRotation = (input, output) => sort_func => {
  const result = sort_func(input.slice());

  expect(verify(output, result)).toBe(true);
};

const randInt = () => Math.floor(Math.random() * 200) - 100;

describe("Rotators", () => {
  it("handles a small test case", () => {
    const input = [[1, 2], [3, 4]];
    const output = [[3, 1], [4, 2]];

    rotators.forEach(checkRotation(input, output));
  });

  it("handles a medium test case", () => {
    const input = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ];
    const output = [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5]
    ];
    rotators.forEach(checkRotation(input, output));
  });

  it("handles a large test case", () => {
    const sample = [...Array(100)].map(() => [...Array(100)].map(randInt));
    rotators.forEach(func => {
      let input = sample.map(row => row.slice());
      for (let i = 0; i < 4; i++) {
        input = func(input);
      }
      verify(sample, input);
    });
  });
});
