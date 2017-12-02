const mergeSort = require("../src/mergeSort");
const quickSort = require("../src/quickSort");

const sorts = [mergeSort, quickSort.outOfPlace, quickSort.inPlace];

const verify = (output, result) => {
  if (result.length !== output.length) {
    return false;
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== output[i]) {
      return false;
    }
  }
  return true;
};

const checkSort = input => sort_func => {
  const output = input.slice().sort((a, b) => a - b);
  const result = sort_func(input.slice());

  expect(verify(output, result)).toBe(true);
};

const randomSample = () => {
  return [...Array(100)].map(() => Math.floor(Math.random() * 200) - 100);
};

describe("Sorts", () => {
  it("handles a small test case", () => {
    sorts.forEach(checkSort([1, 5, 2, 5, 7, 3]));
  });

  it("handles a large random sample", () => {
    sorts.forEach(checkSort(randomSample()));
  });

  it("handles a large sorted sample", () => {
    sorts.forEach(checkSort(randomSample().sort()));
  });

  it("handles a large reversed sample", () => {
    sorts.forEach(checkSort(randomSample().reverse()));
  });

  it("handles a large identical sample", () => {
    const sample = Math.floor(Math.random() * 200) - 100;
    sorts.forEach(checkSort(new Array(100).fill(sample)));
  });
});
