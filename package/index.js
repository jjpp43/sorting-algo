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
    let e = performance.now(),
        t = o.length;
    heapify(o, t);
    for (let e = t - 1; e > 0; e--) {
        swap(o, 0, e);
        let t,
            l = 0;
        do {
            (t = 2 * l + 1) < e - 1 && o[t] < o[t + 1] && t++, t < e && o[l] < o[t] && swap(o, l, t), (l = t);
        } while (t < e);
    }
    let l = performance.now();
    return console.log(`Heap sort took ${(l - e).toFixed(4)} milliseconds to sort`), o;
}
function cycleSort(o) {
    let e = performance.now(),
        t = o.length;
    for (let e = 0; e <= t - 2; e++) {
        let l = o[e],
            r = e;
        for (let f = e + 1; f < t; f++) o[f] < l && r++;
        if (r != e) {
            for (; l == o[r]; ) r += 1;
            if (r != e) {
                let e = l;
                (l = o[r]), (o[r] = e), 0;
            }
            for (; r != e; ) {
                r = e;
                for (let f = e + 1; f < t; f++) o[f] < l && (r += 1);
                for (; l == o[r]; ) r += 1;
                if (l != o[r]) {
                    let e = l;
                    (l = o[r]), (o[r] = e), 0;
                }
            }
        }
    }
    let l = performance.now();
    return console.log(`Cycle sort took ${(l - e).toFixed(4)} milliseconds to sort`), o;
}

module.exports = { selectionSort: selectionSort, bubbleSort: bubbleSort, insertionSort: insertionSort, bucketSort: bucketSort, cocktailSort: cocktailSort, heapSort: heapSort, cycleSort: cycleSort, };