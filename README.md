# algorithms-data-structures

Cheat sheet of algorithms and data structures

## References
- [TheAlgorithms](https://github.com/TheAlgorithms/JavaScript)

## Algorithms

### Search

#### Linear search

Time complexity: O(n).
Space complexity: O(1).

Iterate through the whole collection one by one. When the current element is the one you're looking for, return it and stop executing.

```js
// returns true if the value was found and false otherwise.
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

// returns the index at which the value was found or -1 if the value was not found.
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
```

#### Binary search

Time complexity: O(log n).
Space complexity: O(1).

If the collection is sorted, binary search can be used.

Binary search creates a "window" inside the original collection and searches in this window. The window is determined by a low and high indexes. Low index is initially set to 0 and high index is set to `length - 1`.

Then, inside this window we determine the middle element and use it for comparisons. Next, depending whether the element we're looking for is greather than or less than the middle element, we update the "window" to either the elements in the left or the right of the middle element.

```js
// returns true if the value was found and false otherwise.
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

// returns the index at which the value was found or -1 if the value was not found.
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
```

<details>
<summary>Recursive version</summary>

```js
// returns true if the value was found and false otherwise.
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

// returns the index at which the value was found or -1 if the value was not found.
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
```

</details>

### Sorting

#### Bubble sort

Time complexity: O(n^2). Space complexity: O(1).

The idea behind is that the values will "bubble up" to their respective places inside the collection. This can be achieved by iterating through the collection with a nested loop that will check if the previous element is bigger than the current element. If yes, then a swap is applied.

At the end of each iteration of the inner loop, we know the biggest element that's not currently at its appropriate place will be moved to its appropriate index.

```js
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
```

## Famous problems

### Two sum

> Given a list of numbers and a number k, return whether any two numbers from the list add up to k. For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. Bonus: Can you do this in one pass?

Naive approach would be to just have two nested loops interating through the array. If the elements pointed by the outter and inner indexes add up to `k`, return true. But this would be O(n^2) time complexity. Usually a good approach in converting O(n^2) algorithms to O(n) algorithms is by using a hashmap and applying multiple passes.

```js
function twoSum(nums, target) {
  const map = {};

  // first pass only adds each element as key and its index as value
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  // second pass checks the complements
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (
      Object.keys(map).includes(String(complement)) &&
      map[complement] !== i
    ) {
      return [i, map[complement]];
    }
  }

  return [];
}
```

## Data structures

### Queue

A queue is a **First in First Out (FIFO)** linked list. That means when adding an element to the queue, it will be added to the end (or tail) of the queue. Conversely, when removing an item from the queue, the first item (the head) is removed. Formally, queues support the following operations:

- **enqueue**: adds an item to the tail of the list
- **deque**: removes the head of the list
- **peek**: returns the head of the list without removing it

#### Enqueue

##### Before

![Queue before addition](/imgs/queue_before_addition.png)

##### After

![Queue before addition](/imgs/queue_after_addition.png)

#### Deque

##### Before

![Queue before addition](/imgs/queue_before_removal.png)

##### After

![Queue before addition](/imgs/queue_after_removal.png)

#### Runtime

| Operation | Complexity |
| --------- | ---------- |
| Read      | O(n)       |
| Insert    | O(1)       |
| Delete    | O(1)       |
