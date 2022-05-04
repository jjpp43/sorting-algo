const sort = require('sorting-algorithm')

let arr = [1,3,5,7,9,-2,-1,-11,-20,11,2,4,6,8,123,12,312,313,4564,43123,123,23,125,14325,3145,51,34,12345,23135,13221,15143,34134,44123,43324,14123,41234,12433,42456,25134,13413,531345,13423,13153,451354,1345,134341,2353,34514,53541,451354,1234,135,13451,241235,134,1324,234,1234,1234,1235,435,346,45,76547,9,467,3568,25467,657,2456,41345,9989,111,12,-341,23,4234,-34,2134,-234,213,4,34,-1,3423,4,-1,-3,4-1234,]

console.log(sort.selectionSort(arr))
console.log(sort.bubbleSort(arr))
console.log(sort.insertionSort(arr))
console.log(sort.bucketSort(arr))
console.log(sort.cocktailSort(arr))
console.log(sort.heapSort(arr))

