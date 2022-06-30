module.exports = function reverse (n) {
    num = Math.abs(n);
    numString = num.toString();
    numReversed = numString.split("").reverse().join("");
    return +numReversed;
}
