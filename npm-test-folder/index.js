const sort = require('sorting-algorithm')

let arr = [1,3,5,7,9,-2,-11,-20,11,2,4,6,8,123,12,312,313,4564,43123,123,23,125,14325,3145,51,34,123,34624,463456,453456,435.456,456.3456,345,567567,89099,68,789,789,789,-46746,787685,-784536,6576,8797,345,66547,56345,656,567987,587987,69687,657,845674,57567,68,467,78,679,875,84678,67,64784,6784,678,95,784,678,473,343434,545,25324,1341,523451,54144,567679,89078,7567,84678,78,6463,56,45,23135,13221,15143,34134,44123,43324,14123,41234,12433,42456,25134,13413,531345,13423,13153,451354,1345,134341,2353,34514,53541,451354,1234,135,13451,241235,134,1324,234,1234,1234,1235,435,346,45,76547,9,467,3568,25467,657,2456,41345,9989,111,12,-341,23,4234,-34,2134,-234,213,4,34,-1,3423,4,-1,-3,4-1234,]
let strarr = ["asdf","fdfs","asdfdf","fdfsfa","qwrf","dvaada","asdfav","fag","asdf","fsdf","dfhg","fdgh","bgfd","bdd",]

/*
console.log(sort.selectionSort(arr))
console.log(sort.bubbleSort(arr))
console.log(sort.insertionSort(arr))
console.log(sort.bucketSort(arr))
console.log(sort.cocktailSort(arr))
console.log(sort.heapSort(arr))
*/


console.log(sort.selectionSort(arr) === sort.bubbleSort(arr) &&
            sort.insertionSort(arr) === sort.bucketSort(arr) &&
            sort.cocktailSort(arr) === sort.heapSort(arr) ? "Exact match" : "Somethings wrong")

console.log(sort.selectionSort(strarr) === sort.bubbleSort(strarr) &&
            sort.bubbleSort(strarr) === sort.insertionSort(strarr) &&
            sort.cocktailSort(strarr) === sort.heapSort(strarr) ? "Exact match" : "Something is wrong")

/*            console.log(sort.bubbleSort(strarr))
console.log(sort.insertionSort(strarr))
console.log(sort.bucketSort(strarr))
console.log(sort.cocktailSort(strarr))
console.log(sort.heapSort(strarr))
*/