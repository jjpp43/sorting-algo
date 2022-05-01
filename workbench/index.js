/*
Selection Sort - o
Bubble Sort    - o
Insertion Sort - o
Merge Sort
Iterative Merge Sort
Quick Sort 
Iterative Quick Sort
Heap Sort
Counting Sort
Radix Sort
Bucket Sort    - o
ShellSort
TimSort
Comb Sort
Pigeonhole Sort
Cycle Sort
Cocktail Sort
Strand Sort
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

    console.log(`Selection sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
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

    console.log(`Bubble sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
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

    console.log(`Insertion sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`) 
    return array
    
}

//------------Bucket Sort------------O//
function bucketSort(array) {
    let t0 = performance.now()                       //-----Start of performance
    if (array.length === 0) return array
    // 1) Create n empty buckets   
    const n = array.length;

    let buckets = new Array(n);
  
    for (let i = 0; i < n; i++)
    {
        buckets[i] = [];
    }

    // 2) Put array elements in different buckets
    for (let i = 0; i < n; i++) {
        let idx = array[i] * n
        buckets[Math.floor(idx)] = []
        buckets[Math.floor(idx)].push(array[i])
    }

    // 3) Sort individual buckets
    for (let i = 0; i < n; i++) {
        buckets[i].sort((a,b) => (a - b))
    }

    // 4) Concatenate all buckets into arr[]
    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            array[index++] = buckets[i][j]
        }
    }
    let t1 = performance.now()                       //-----End of performance
    console.log(`Bucket sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
    return array
}

//------------Merge Sort------------//

module.exports = {
    selectionSort,
    bubbleSort,
    insertionSort,
    bucketSort
}