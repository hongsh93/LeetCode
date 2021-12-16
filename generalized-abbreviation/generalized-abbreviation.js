/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
    let res = [""]
    for (let i=0; i<word.length; i++) {
        let temp = []
        for (let j=0; j<res.length; j++) {
            let lastChar = res[j][res[j].length-1]
            if (isNaN(lastChar)) {
                temp.push(res[j]+word[i])
                temp.push(res[j]+"1")
            }
            else {
                temp.push(res[j]+word[i])
                temp.push(res[j].slice(0,-1) + (parseInt(lastChar)+1))
            }
        }
        res = temp
    }
    return res
}












































// var generateAbbreviations = function(word) {
//     let res = ["1", word[0]]
//     for (let i=1; i<word.length; i++) {
//         let temp = []
//         for (let j=0; j<res.length; j++) {
//             let a = res[j].slice(-1)
//             if (isNaN(parseInt(a))) {
//                 temp.push(res[j]+word[i])
//                 temp.push(res[j]+"1")
//             }
//             else {
//                 temp.push(res[j]+word[i])
//                 temp.push(res[j].slice(0,-1) + (parseInt(a)+1))
//             }
//         }
//         res = temp
//     }
//     return res
// };