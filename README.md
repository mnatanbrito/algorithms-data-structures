# algorithms-data-structures
Cheat sheet of algorithms and data structures

## Algorithms

### Search

#### Linear search
Time complexity: O(n).
Space complexity: O(1).

Iterate through the whole collection one by one. When the current element is the one you're looking for, return it and stop executing.
```js
export default function linear_search(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true
        }
    }

    return false
}

```

#### Binary search
Time complexity: O(log n).
Space complexity: O(1).

If the collection is sorted, binary search can be used.

Binary search creates a "window" inside the original collection and searches in this window. The window is determined by a low and high indexes. Low index is initially set to 0 and high index is set to `length - 1`.

Then, inside this window we determine the middle element and use it for comparisons. Next, depending whether the element we're looking for is greather than or less than the middle element, we update the "window" to either the elements in the left or the right of the middle element.
```js
export default function bs_list(haystack, needle) {
    let lo = 0;
    let hi = haystack.length;

    do {
        let m = Math.floor(lo + (hi - lo) / 2)
        let v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);

    return false;
}

```

## Famous problems

### Two sum
> Given a list of numbers and a number k, return whether any two numbers from the list add up to k. For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. Bonus: Can you do this in one pass?

Naive approach would be to just have two nested loops interating through the array. If the elements pointed by the outter and inner indexes add up to `k`, return true. But this would be O(n^2) time complexity. Usually a good approach in converting O(n^2) algorithms to O(n) algorithms is by using a hashmap and applying multiple passes.

```js
var twoSum = function(nums, target) {
    const map = {};

    // first pass only adds each element as key and its index as value
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }

    // second pass checks the complements
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (Object.keys(map).includes(String(complement)) && map[complement] !== i) {
            return [i, map[complement]]
        }
    }


    return [];
};
```

