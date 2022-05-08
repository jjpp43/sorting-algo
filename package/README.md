## sorting-algorithm
This package provides various sorting algorithms for users to use it for their best purposes.

## Choose a sorting algorithm 
Supported sorting algorithms :  
- Selection sort
- Bubble sort
- Insertion sort
- Bucket sort
- Cocktail sort
- Heap sort
- Cycle sort
- More to be added...

## Installation
``` 
npm install sorting-algorithm
```

## Usage example
```
const sort = require('sorting-algorithm')

const arr = [1,9,2,8,3,7,4,7,5,6]

console.log(sort.insertionSort(arr))
console.log(sort.selectionSort(arr))

output: Insertion sort took .0254 milliseconds to sort
        [1,2,3,4,5,6,7,8,9]
        Selection sort took .0296 milliseconds to sort
        [1,2,3,4,5,6,7,8,9]
```
Make sure to use camel-case when calling a sorting algorithm

## Features
+ Outputs the sorting time to the console. 