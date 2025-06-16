function rotatingString(str1, str2) {
    if (str1 !== str2) {
        return false;
    }
    let concate = str1 + str2
    return concate.includes(str2)

}
console.log(rotatingString(str1, str2))