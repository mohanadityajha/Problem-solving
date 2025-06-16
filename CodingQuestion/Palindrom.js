function findPalindrom(str) {
    let len = str.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {

        if (str[i] !== str[len - 1 - i]) {
            return `${str} is not Palindrom`
        } else {

            return `${str} is the Palindrom`
        }
    }

}
console.log(findPalindrom("madam"))