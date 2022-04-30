/*
Selection Sort
Bubble Sort
Insertion Sort
Merge Sort
Iterative Merge Sort
Quick Sort - https://www.youtube.com/watch?v=Hoixgm4-P4M
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

/*
How to measure performance time
    const t0 = performance.now();
    bubbleSort(nums);
    const t1 = performance.now()
    console.log(`It took ${t1 -t0} milliseconds`)
*/

function swap(array, xindex, yindex) {
    let temp = array[xindex]
    array[xindex] = array[yindex]
    array[yindex] = temp
}

//------------Selection Sort------------O//
function selectionSort(array) {
    let t0 = performance.now()                       //-----Start of performance

    let min_index;
    for(let i = 0; i < array.length - 1; i++) {
        min_index = i
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[min_index]) {
                min_index = j
            }
        }
        swap(array, min_index, i)
    }

    let t1 = performance.now()                       //-----End of performance

    console.log(`Took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
    return array
}

//------------Bubble Sort------------O//
function bubbleSort(array) {
    let t0 = performance.now()                       //-----Start of performance

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - i - 1; j++) {
            if(array[j] > array[j+1]) {
                swap(array, j, j+1)
            }
        }
    }

    let t1 = performance.now()                       //-----End of performance

    console.log(`Took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
    return array
}

//------------Insertion Sort------------O//
function insertionSort(array) {
    let t0 = performance.now()                       //-----Start of performance

    for(let i = 1; i < array.length; i++) {
        let current = array[i]
        let j = i - 1

        while(j >= 0 && array[j] > current) {
            array[j+1] = array[j]
            j = j-1
        }
        array[j+1] = current
    }
 
    let t1 = performance.now()                       //-----End of performance

    console.log(`Took ${(t1 - t0).toFixed(4)} milliseconds to sort`) 
    return array
    
}

//------------Bucket Sort------------//
//https://www.youtube.com/watch?v=VuXbEb5ywrU
function bucketSort(array) {
    
}

//------------Merge Sort------------//

module.exports = {
    selectionSort,
    bubbleSort,
    insertionSort,
}