function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;

  for (let i = num - 1; i < arr.length; i++) {
    let tmpNum = num - 1;
    let tmpSum = 0;
    while (tmpNum >= 0) {
      tmpSum += arr[i - tmpNum];
      tmpNum--;
    }

    if (tmpSum > max) {
      max = tmpSum;
    }
  }

  return max;
}

describe("Max subarray sum", () => {
  test("Should return the correct sum", () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 15)).toBeNull();
    expect(maxSubarraySum([5, 2, 6, 9], 3)).toEqual(17);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3)).toEqual(15);
  });
});
