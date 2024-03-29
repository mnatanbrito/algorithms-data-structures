function bubble_sort(list) {
  /**
   * Main idea is to have two nested loops iterating through the array
   * the outer loop (i) will essentially keep track of how many elements have bubbled up
   * the inner loop (j) will iterate through the elements from 0 to i and compare j with j+1 swapping when needed
   */

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        // should swap
        let tmp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = tmp;
      }
    }
  }

  return list;
}

describe("Bubble Sort", () => {
  test("Should return the array ordered", () => {
    expect(bubble_sort([])).toEqual([]);
    expect(bubble_sort([1])).toEqual([1]);
    expect(bubble_sort([4, -17, 37, 9, 1])).toEqual([-17, 1, 4, 9, 37]);
    expect(bubble_sort([4, 0, 37, 9, 1])).toEqual([0, 1, 4, 9, 37]);
    expect(bubble_sort([85, 47, 37, 7, 90, 75, 90, 9, 52, 72])).toEqual([
      7, 9, 37, 47, 52, 72, 75, 85, 90, 90,
    ]);
  });
});
