const outOfPlace = sample => {
  if (sample.length < 2) {
    return sample;
  }

  const pivot = sample[Math.floor(Math.random() * sample.length)];
  const { less, more, equal } = sample.reduce(
    ({ less, more, equal }, single) => {
      if (single < pivot) {
        less.push(single);
      } else if (single > pivot) {
        more.push(single);
      } else {
        equal.push(single);
      }
      return { less, more, equal };
    },
    { less: [], more: [], equal: [] }
  );

  return [...outOfPlace(less), ...equal, ...outOfPlace(more)];
};

const flip = (sample, l, r) => {
  [sample[l], sample[r]] = [sample[r], sample[l]];
};

const inPlace = (sample, left, right) => {
  let l = left === undefined ? 0 : left;
  let r = right === undefined ? sample.length - 1 : right;
  let e = r + 1;
  if (r - l < 1) return sample;

  const pivot = sample[Math.floor(Math.random() * (r - l)) + l];

  while (l <= r) {
    if ([sample[l], sample[r]].includes(pivot)) {
      if (sample[l] === pivot) {
        flip(sample, l, r);
      }
      flip(sample, r, e - 1);
      e--;
      r--;
    } else if (sample[l] > pivot && sample[r] < pivot) {
      flip(sample, l, r);
      l++;
      r--;
    } else if (sample[l] > pivot) {
      r--;
    } else {
      l++;
    }
  }

  const endPosition = right + 1 || sample.length;

  for (let f = e; f < endPosition; f++) {
    flip(sample, f - (e - l), f);
  }

  inPlace(sample, left, l - 1);
  inPlace(sample, l + endPosition - e, endPosition - 1);

  return sample;
};

module.exports = { outOfPlace, inPlace };
