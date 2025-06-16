function CheckTwoArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        false;
        arr1.sort();
        arr2.sort();
    } for (let i = 0; i < arr1.length; i++) {
        if (arr1.length !== arr2.length) {
            return false;
        }
    }

    return true

}
console.log(CheckTwoArrayEqual([1, 2, 3, 4], [5, 6, 7, 8]))