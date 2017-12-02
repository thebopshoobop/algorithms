const merge_sort = sample => {
  if (sample.length < 2) {
    return sample;
  }

  const pivot = Math.floor(sample.length / 2);
  const left = merge_sort(sample.slice(0, pivot));
  const right = merge_sort(sample.slice(pivot));
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

module.exports = merge_sort;
