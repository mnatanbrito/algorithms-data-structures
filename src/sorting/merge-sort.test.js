// TODO: do the merging IN PLACE to avoid space complexity.
function merge_sort(arr, start = 0, end) {
  /**
   * Main idea is to keep halving the input arr into two until the subarrays have length 1
   * then merge the subarrays into one in the appropriate order and keep merging until is complete.
   */
  if (!arr || arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(start, mid);
  const right = arr.slice(mid, end ?? arr.length);

  const merged = merge(
    merge_sort(left, 0, left.length),
    merge_sort(right, 0, right.length)
  );

  return merged;
}

function merge(left, right) {
  const final = [];

  let leftCount = 0;
  let rightCount = 0;
  while (
    leftCount >= 0 &&
    leftCount < left.length &&
    rightCount >= 0 &&
    rightCount < right.length
  ) {
    const currentLeft = left[leftCount];
    const currentRight = right[rightCount];
    if (currentLeft < currentRight) {
      final.push(currentLeft);
      leftCount++;
    } else if (currentLeft > currentRight) {
      final.push(currentRight);
      rightCount++;
    } else {
      final.push(currentLeft);
      leftCount++;
    }
  }

  // whatever is left of the left side can be assumed to come first whatever is left on the right side
  for (const elem of left.slice(leftCount)) {
    final.push(elem);
  }

  for (const elem of right.slice(rightCount)) {
    final.push(elem);
  }

  return final;
}

describe("Merge Sort", () => {
  test("Should return the array ordered", () => {
    expect(merge_sort([])).toEqual([]);
    expect(merge_sort([1])).toEqual([1]);
    expect(merge_sort([4, -17, 37, 9, 1])).toEqual([-17, 1, 4, 9, 37]);
    expect(merge_sort([4, 0, 37, 9, 1])).toEqual([0, 1, 4, 9, 37]);
    expect(merge_sort([85, 47, 37, 7, 90, 75, 90, 9, 52, 72])).toEqual([
      7, 9, 37, 47, 52, 72, 75, 85, 90, 90,
    ]);
  });
});
