function reverse(arr) {
    for (let left =0; left<arr.length/2; left++) {
        let right = arr.length-left-1
        let t = arr[left];
        arr[left] = arr[right];
        arr[right] = t;
    };
}