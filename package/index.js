/*
Selection Sort
Bubble Sort
Insertion Sort
Merge Sort
Iterative Merge Sort
Quick Sort
Iterative Quick Sort
Heap Sort
Counting Sort
Radix Sort
Bucket Sort
ShellSort
TimSort
Comb Sort
Pigeonhole Sort
Cycle Sort
Cocktail Sort
Strand Sort
*/

function swap(array, xindex, yindex) {
    let temp = array[xindex];
    array[xindex] = array[yindex];
    array[yindex] = temp;
}

//-------------------------------------//
function selectionSort(array) {
    let min_index;
    for(let i = 0; i < array.length - 1; i++) {
        min_index = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[min_index]) {
                min_index = j;
            }
        }
        swap(array, min_index, i);
    }
    return array;
}

function bubbleSort() {
    
}

function insertionSort() {

}

function mergeSort() {

}

function quickSort() {

}

function heapSort() {

}

function bucketSort() {

}

export function hi() {
    console.log('hi')
}
var str = 'hi'

module.exports = sort