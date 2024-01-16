function selection_sort(list) {
  if (!list.length) {
    return [];
  }

  if (list.length === 1) {
    return list;
  }

  /**
   * Main idea is to have two nested loops iterating through the array
   * the outer loop (i) will essentially keep track of how many min elements have been found
   * the inner loop (j) will find the minimum elements to be added to the beginning of the array
   */

  for (let i = 0; i < list.length - 1; i++) {
    let tmpMin = list[i];
    let curMinIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < tmpMin) {
        tmpMin = list[j];
        curMinIndex = j;
      }
    }

    // a minimum element was found
    const tmp = list[i];
    list[i] = list[curMinIndex];
    list[curMinIndex] = tmp;
  }

  return list;
}

describe("Selection Sort", () => {
  test("Should return the array ordered", () => {
    expect(selection_sort([])).toEqual([]);
    expect(selection_sort([1])).toEqual([1]);
    expect(selection_sort([4, -17, 37, 9, 1])).toEqual([-17, 1, 4, 9, 37]);
    expect(selection_sort([4, 0, 37, 9, 1])).toEqual([0, 1, 4, 9, 37]);
    expect(selection_sort([85, 47, 37, 7, 90, 75, 90, 9, 52, 72])).toEqual([
      7, 9, 37, 47, 52, 72, 75, 85, 90, 90,
    ]);
  });
});
