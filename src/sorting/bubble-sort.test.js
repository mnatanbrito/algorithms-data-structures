function bubble_sort(list) {
  let right = list.length;

  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < right; j++) {
      if (list[j - 1] > list[j]) {
        // should swap
        let tmp = list[j - 1];
        list[j - 1] = list[j];
        list[j] = tmp;
      }
    }

    right -= 1;
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
