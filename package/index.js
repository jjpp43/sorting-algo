function swap(array, xindex, yindex) {
    let temp = array[xindex]
    array[xindex] = array[yindex]
    array[yindex] = temp
}

function heapify(array, length, i) {
    let largest = i
    let left = i * 2 + 1
    let right = left + 1

    if(left < length && array[left] > array[largest]) {
        largest = left
    }

    if(right < length && array[right] > array[largest]) {
        largest = right
    }

    if(largest != i) {
        [array[i], array[largest]] = [array[largest], array[i]]
        heapify(array, length, largest)
    }
    return array
}

function selectionSort(array) {
    let t0 = performance.now()

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

    let t1 = performance.now()

    console.log(`Selection sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
    return array
}

function bubbleSort(array) {
    let t0 = performance.now()                    

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - i - 1; j++) {
            if(array[j] > array[j+1]) {
                swap(array, j, j+1)
            }
        }
    }

    let t1 = performance.now()

    console.log(`Bubble sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
    return array
}

function insertionSort(array) {
    let t0 = performance.now()                   

    for(let i = 1; i < array.length; i++) {
        let current = array[i]
        let j = i - 1

        while(j >= 0 && array[j] > current) {
            array[j+1] = array[j]
            j = j-1
        }
        array[j+1] = current
    }
 
    let t1 = performance.now()                      

    console.log(`Insertion sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`) 
    return array
    
}

function bucketSort(array) {
    let t0 = performance.now()                       
    if (array.length === 0) return array  
    const n = array.length;

    let buckets = new Array(n);
  
    for (let i = 0; i < n; i++)
    {
        buckets[i] = [];
    }

    for (let i = 0; i < n; i++) {
        let idx = array[i] * n
        buckets[Math.floor(idx)] = []
        buckets[Math.floor(idx)].push(array[i])
    }

    for (let i = 0; i < n; i++) {
        buckets[i].sort((a,b) => (a - b))
    }

    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            array[index++] = buckets[i][j]
        }
    }
    let t1 = performance.now()                   
    console.log(`Bucket sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
    return array
}

function cocktailSort(array) {
    let t0 = performance.now()                       //-----Start of performance
    let swapped = true
        let start = 0
        let end = array.length
        while (swapped) {
  
            swapped = false
  
            for (let i = start; i < end - 1; ++i) {
                if (array[i] > array[i + 1]) {
                    swap(array,i,i+1 )
                    swapped = true
                }
            }

            if (!swapped) break
            swapped = false
            end = end - 1

            for (let i = end - 1; i >= start; i--) {
                if (array[i] > array[i + 1]) {
                    swap(array,i,i+1 )
                    swapped = true
                }
            }
            start = start + 1
        }
    let t1 = performance.now()                       //-----End of performance
    console.log(`Cocktail sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
    return array
}

//------------Heap Sort------------O//
function heapSort(array) {
    let t0 = performance.now()                       //-----Start of performance
    let n = array.length
    let i = Math.floor(n / 2 - 1)
    let k = n - 1

    while(i >= 0) {
        heapify(array, n, i)
        i = i - 1
    }

    while(k >= 0) {
        [array[0], array[k]] = [array[k], array[0]]
        heapify(array, k, 0)
        k = k - 1
    }
    let t1 = performance.now()                       //-----End of performance
    console.log(`Heap sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
    return array
}

module.exports = {
    selectionSort,
    bubbleSort,
    insertionSort,
    bucketSort,
    cocktailSort,
}