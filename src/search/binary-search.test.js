function binary_search_boolean(list, value) {
  if (!list) {
    return false;
  }

  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = list[mid];
    if (midValue === value) {
      return true;
    } else if (value > midValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function binary_search_index(list, value) {
  if (!list) {
    return -1;
  }

  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = list[mid];
    if (midValue === value) {
      return mid;
    } else if (value > midValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function binary_search_boolean_recursion(list, value) {
  if (!list) {
    return false;
  }

  const left = 0;
  const right = list.length - 1;
  const mid = Math.floor((left + right) / 2);
  const midValue = list[mid];

  if (midValue === value) {
    return true;
  } else if (value > midValue) {
    return list.length <= 1
      ? false
      : binary_search_boolean_recursion(list.slice(mid + 1), value);
  } else {
    return list.length <= 1
      ? false
      : binary_search_boolean_recursion(list.slice(0, mid), value);
  }
}

function binary_search_index_recursion(list, value) {
  if (!list) {
    return -1;
  }

  const left = 0;
  const right = list.length - 1;
  const mid = Math.floor((left + right) / 2);
  const midValue = list[mid];

  if (midValue === value) {
    return mid;
  } else if (value > midValue) {
    if (list.length <= 1) {
      return -1;
    } else {
      const sub_array_index = binary_search_index_recursion(
        list.slice(mid + 1),
        value
      );

      return sub_array_index !== -1
        ? mid + 1 + sub_array_index
        : sub_array_index;
    }
  } else {
    return list.length <= 1
      ? mid
      : binary_search_index_recursion(list.slice(0, mid), value);
  }
}

describe("Binary Search", () => {
  const list = [1, 2, 3, 4, 5];

  test("Should return correct boolean for binary search", () => {
    expect(binary_search_boolean(list, 1)).toBe(true);
    expect(binary_search_boolean(list, 2)).toBe(true);
    expect(binary_search_boolean(list, 3)).toBe(true);
    expect(binary_search_boolean(list, 4)).toBe(true);
    expect(binary_search_boolean(list, 5)).toBe(true);

    expect(binary_search_boolean(null, 6)).toBe(false);
    expect(binary_search_boolean(list, -1)).toBe(false);
    expect(binary_search_boolean(list, 0)).toBe(false);
    expect(binary_search_boolean(list, 6)).toBe(false);
    expect(binary_search_boolean(list, 7)).toBe(false);
    expect(binary_search_boolean(list, 8)).toBe(false);
    expect(binary_search_boolean(list, 9)).toBe(false);
    expect(binary_search_boolean(list, 10)).toBe(false);
  });

  test("Should return correct index for binary search", () => {
    expect(binary_search_index(list, 1)).toBe(0);
    expect(binary_search_index(list, 2)).toBe(1);
    expect(binary_search_index(list, 3)).toBe(2);
    expect(binary_search_index(list, 4)).toBe(3);
    expect(binary_search_index(list, 5)).toBe(4);

    expect(binary_search_index(null, 6)).toBe(-1);
    expect(binary_search_index(list, -1)).toBe(-1);
    expect(binary_search_index(list, 0)).toBe(-1);
    expect(binary_search_index(list, 6)).toBe(-1);
    expect(binary_search_index(list, 7)).toBe(-1);
    expect(binary_search_index(list, 8)).toBe(-1);
    expect(binary_search_index(list, 9)).toBe(-1);
    expect(binary_search_index(list, 10)).toBe(-1);
  });

  describe("Recursion", () => {
    test("Should return correct boolean for binary search ", () => {
      expect(binary_search_boolean_recursion(list, 1)).toBe(true);
      expect(binary_search_boolean_recursion(list, 2)).toBe(true);
      expect(binary_search_boolean_recursion(list, 3)).toBe(true);
      expect(binary_search_boolean_recursion(list, 4)).toBe(true);
      expect(binary_search_boolean_recursion(list, 5)).toBe(true);

      expect(binary_search_boolean_recursion(null, 6)).toBe(false);
      expect(binary_search_boolean_recursion(list, -1)).toBe(false);
      expect(binary_search_boolean_recursion(list, 0)).toBe(false);
      expect(binary_search_boolean_recursion(list, 6)).toBe(false);
      expect(binary_search_boolean_recursion(list, 7)).toBe(false);
      expect(binary_search_boolean_recursion(list, 8)).toBe(false);
      expect(binary_search_boolean_recursion(list, 9)).toBe(false);
      expect(binary_search_boolean_recursion(list, 10)).toBe(false);
    });

    test("Should return correct index for binary search", () => {
      expect(binary_search_index_recursion(list, 1)).toBe(0);
      expect(binary_search_index_recursion(list, 2)).toBe(1);
      expect(binary_search_index_recursion(list, 3)).toBe(2);
      expect(binary_search_index_recursion(list, 4)).toBe(3);
      expect(binary_search_index_recursion(list, 5)).toBe(4);

      expect(binary_search_index_recursion(null, 6)).toBe(-1);
      expect(binary_search_index_recursion(list, -1)).toBe(-1);
      expect(binary_search_index_recursion(list, 0)).toBe(-1);
      expect(binary_search_index_recursion(list, 6)).toBe(-1);
      expect(binary_search_index_recursion(list, 7)).toBe(-1);
      expect(binary_search_index_recursion(list, 8)).toBe(-1);
      expect(binary_search_index_recursion(list, 9)).toBe(-1);
      expect(binary_search_index_recursion(list, 10)).toBe(-1);
    });
  });
});
