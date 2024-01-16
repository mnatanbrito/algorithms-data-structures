function insertion_sort(list) {
  if (!list.length) {
    return [];
  }

  if (list.length === 1) {
    return list;
  }

  /**
   * Main idea is to have two nested loops iterating through the array
   * the outer loop (i) will essentially iterate in the unsorted portion of the array
   * the inner loop (j) will find the place in the sorted portion to insert the current element of the iteration
   */

  let i = 1;

  while (i < list.length) {
    let j = i;

    while (j >= 0 && list[j - 1] > list[j]) {
      let tmp = list[j];
      list[j] = list[j - 1];
      list[j - 1] = tmp;

      j--;
    }

    i++;
  }

  return list;
}

describe("Insertion Sort", () => {
  test("Should return the array ordered", () => {
    expect(insertion_sort([])).toEqual([]);
    expect(insertion_sort([1])).toEqual([1]);
    expect(insertion_sort([4, -17, 37, 9, 1])).toEqual([-17, 1, 4, 9, 37]);
    expect(insertion_sort([4, 0, 37, 9, 1])).toEqual([0, 1, 4, 9, 37]);
    expect(insertion_sort([85, 47, 37, 7, 90, 75, 90, 9, 52, 72])).toEqual([
      7, 9, 37, 47, 52, 72, 75, 85, 90, 90,
    ]);
  });
});
