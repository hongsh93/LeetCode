/**
 * @param {string} digits
 * @return {string[]}
 */

let digit_word = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

var letterCombinations = function(digits) {
    let res = []
    for (let i=0; i<digits.length; i++) {
        res = letter_comb(digits[i], res)
    }
    return res
};

var letter_comb = function(digit, words) {
    let word = digit_word[digit]
    let temp = []
    if (words.length > 0) {
        for (let i=0; i<words.length; i++) {
            for (let j=0; j<word.length; j++) {
                temp.push(words[i]+word[j])
            }
        }
    }
    else {
        temp = word
    }
    return temp
}