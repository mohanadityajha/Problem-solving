function findReverseString(str) {
    let output = ""
    let len = str.length;
    for (let i = len - 1; i >= 0; i--) {
        output += str[i]

    }
    return output;
}
console.log(findReverseString("ADItya1234"))