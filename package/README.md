## sorting-algorithm
This package provides various sorting algorithms for users to use it for their best purposes.
## Choose a sorting algorithm 
Supported sorting algorithms :  
- Selection sort
- Bubble sort
- Insertion sort
## Installation
``` 
npm install sorting-algorithm
```
## Example usage
```
const sort = require('sorting-algorithm')

const arr = [1,9,2,8,3,7,4,7,5,6]
console.log(sort.insertionSort(arr))

output: Took approximately .0011 milliseconds to sort
        [1,2,3,4,5,6,7,8,9]
```