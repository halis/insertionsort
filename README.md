# insertionsort
A no dependency implementation of insertion sort in JavaScript.

```javascript
var arr, sorter;
arr = [8, 1, 5, 2, 6, 3, 7, 4];

sorter = new InsertionSort(arr); // insertionSort: 0.156ms

console.log(sorter); // InsertionSort {original: Array[8], sorted: Array[8]}
console.log(sorter.original); // [8, 1, 5, 2, 6, 3, 7, 4]
console.log(sorter.sorted); // [1, 2, 3, 4, 5, 6, 7, 8]
```
