function insertion_sort(arr) {}

describe("Insertion Sort", () => {
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
