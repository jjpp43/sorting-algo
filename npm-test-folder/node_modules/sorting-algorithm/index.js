function swap(o, t, e) {
    let r = o[t];
    (o[t] = o[e]), (o[e] = r);
}

function heapify(array, length) {
    for(let i = 1; i < length; i++) {
        if(array[i] > array[(i - 1) / 2]) {
            let j = i
            while(array[j] > array[(j - 1) / 2]) {
                swap(array, j, (j-1)/2)
                j = (j - 1) / 2
            }
        }
    }
}

function selectionSort(o) {
    let t,
        e = performance.now();
    for (let e = 0; e < o.length - 1; e++) {
        t = e;
        for (let r = e + 1; r < o.length; r++) o[r] < o[t] && (t = r);
        swap(o, t, e);
    }
    let r = performance.now();
    return console.log(`Selection sort took ${(r - e).toFixed(4)} milliseconds to sort`), o;
}
function bubbleSort(o) {
    let t = performance.now();
    for (let t = 0; t < o.length; t++) for (let e = 0; e < o.length - t - 1; e++) o[e] > o[e + 1] && swap(o, e, e + 1);
    let e = performance.now();
    return console.log(`Bubble sort took ${(e - t).toFixed(4)} milliseconds to sort`), o;
}
function insertionSort(o) {
    let t = performance.now();
    for (let t = 1; t < o.length; t++) {
        let e = o[t],
            r = t - 1;
        for (; r >= 0 && o[r] > e; ) (o[r + 1] = o[r]), (r -= 1);
        o[r + 1] = e;
    }
    let e = performance.now();
    return console.log(`Insertion sort took ${(e - t).toFixed(4)} milliseconds to sort`), o;
}
function bucketSort(o) {
    let t = performance.now();
    if (0 === o.length) return o;
    const e = o.length;
    let r = new Array(e);
    for (let o = 0; o < e; o++) r[o] = [];
    for (let t = 0; t < e; t++) {
        let n = o[t] * e;
        (r[Math.floor(n)] = []), r[Math.floor(n)].push(o[t]);
    }
    for (let o = 0; o < e; o++) r[o].sort((o, t) => o - t);
    let n = 0;
    for (let t = 0; t < e; t++) for (let e = 0; e < r[t].length; e++) o[n++] = r[t][e];
    let l = performance.now();
    return console.log(`Bucket sort took ${(l - t).toFixed(4)} milliseconds to sort`), o;
}
function cocktailSort(o) {
    let t = performance.now(),
        e = !0,
        r = 0,
        n = o.length;
    for (; e; ) {
        e = !1;
        for (let t = r; t < n - 1; ++t) o[t] > o[t + 1] && (swap(o, t, t + 1), (e = !0));
        if (!e) break;
        e = !1;
        for (let t = (n -= 1) - 1; t >= r; t--) o[t] > o[t + 1] && (swap(o, t, t + 1), (e = !0));
        r += 1;
    }
    let l = performance.now();
    return console.log(`Cocktail sort took ${(l - t).toFixed(4)} milliseconds to sort`), o;
}
function heapSort(o) {
    let t = performance.now(),
        e = o.length,
        r = Math.floor(e / 2 - 1),
        n = e - 1;
    for (; r >= 0; ) heapify(o, e, r), (r -= 1);
    for (; n >= 0; ) ([o[0], o[n]] = [o[n], o[0]]), heapify(o, n, 0), (n -= 1);
    let l = performance.now();
    return console.log(`Heap sort took ${(l - t).toFixed(4)} milliseconds to sort`), o;
}
function heapSort(array) {
    let t0 = performance.now()                       //-----Start of performance
    let n = array.length
    heapify(array, n)

    for(let i = n-1; i > 0; i--) {
        swap(array, 0, i)
        let j = 0
        let index
        do {
            index = (2 * j + 1)
            if(index < (i-1) && array[index] < array[index + 1])
                index++
            if(index < i && array[j] < array[index])
                swap(array, j, index)
            j=index
                
        } while(index < i)
    }
    let t1 = performance.now()                       //-----End of performance
    console.log(`Heap sort took ${(t1 - t0).toFixed(4)} milliseconds to sort`)
    return array
}

module.exports = { selectionSort: selectionSort, bubbleSort: bubbleSort, insertionSort: insertionSort, bucketSort: bucketSort, cocktailSort: cocktailSort, heapSort: heapSort };
