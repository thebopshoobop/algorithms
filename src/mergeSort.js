const outOfPlace = sample => {
  if (sample.length < 2) {
    return sample;
  }

  const pivot = Math.floor(sample.length / 2);
  const left = outOfPlace(sample.slice(0, pivot));
  const right = outOfPlace(sample.slice(pivot));
  let [lCurrent, rCurrent] = [0, 0];
  const [lMax, rMax] = [left.length, right.length];

  let merged = [];
  while (lCurrent < lMax && rCurrent < rMax) {
    if (left[lCurrent] < right[rCurrent]) {
      merged.push(left[lCurrent]);
      lCurrent++;
    } else {
      merged.push(right[rCurrent]);
      rCurrent++;
    }
  }

  if (lCurrent - lMax) {
    merged = merged.concat(left.slice(lCurrent - lMax));
  } else if (rCurrent - rMax) {
    merged = merged.concat(right.slice(rCurrent - rMax));
  }

  return merged;
};

const inPlace = arr => inPlaceMerge(arr.slice(), arr, 0, arr.length);

const inPlaceMerge = (sample, alt, left, right) => {
  if (right - left < 2) {
    return sample;
  }

  const pivot = Math.floor((right - left) / 2) + left;
  inPlaceMerge(alt, sample, left, pivot);
  inPlaceMerge(alt, sample, pivot, right);

  let [l, r] = [left, pivot];
  for (let c = left; c < right; c++) {
    if (l < pivot && (r >= right || sample[l] <= sample[r])) {
      alt[c] = sample[l++];
    } else {
      alt[c] = sample[r++];
    }
  }

  return alt;
};

module.exports = { outOfPlace, inPlace };
