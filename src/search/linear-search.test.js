function linear_search_boolean(list, value) {
  if (!list) {
    return false;
  }

  for (const item of list) {
    if (item === value) {
      return true;
    }
  }

  return false;
}

function linear_search_index(list, value) {
  if (!list) {
    return -1;
  }

  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      return i;
    }
  }

  return -1;
}

describe("Linear Search", () => {
  const list = [1, 2, 3, 4, 5];

  test("Should return correct boolean for linear search", () => {
    expect(linear_search_boolean(list, 1)).toBe(true);
    expect(linear_search_boolean(list, 2)).toBe(true);
    expect(linear_search_boolean(list, 3)).toBe(true);
    expect(linear_search_boolean(list, 4)).toBe(true);
    expect(linear_search_boolean(list, 5)).toBe(true);

    expect(linear_search_boolean(null, 6)).toBe(false);
    expect(linear_search_boolean(list, 6)).toBe(false);
    expect(linear_search_boolean(list, 7)).toBe(false);
    expect(linear_search_boolean(list, 8)).toBe(false);
    expect(linear_search_boolean(list, 9)).toBe(false);
    expect(linear_search_boolean(list, 10)).toBe(false);
  });

  test("Should return correct index for linear search", () => {
    expect(linear_search_index(list, 1)).toBe(0);
    expect(linear_search_index(list, 2)).toBe(1);
    expect(linear_search_index(list, 3)).toBe(2);
    expect(linear_search_index(list, 4)).toBe(3);
    expect(linear_search_index(list, 5)).toBe(4);

    expect(linear_search_index(null, 6)).toBe(-1);
    expect(linear_search_index(list, 6)).toBe(-1);
    expect(linear_search_index(list, 7)).toBe(-1);
    expect(linear_search_index(list, 8)).toBe(-1);
    expect(linear_search_index(list, 9)).toBe(-1);
    expect(linear_search_index(list, 10)).toBe(-1);
  });
});
