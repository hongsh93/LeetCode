/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let res = false
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[0].length; j++) {
            let seen = Array.from(Array(board.length), () => Array(board[0].length).fill(false))
            res = wordFind(board, word, i, j, 0, seen)
            if (res) {
                return res
            }
        }
    }
    return res
};

var wordFind = function(board, word, i, j, l, seen) {
    // console.info(word[l], board[i][j], i, j, l)
    if (board[i][j] == word[l]) {
        seen[i][j] = true
        if (l == word.length-1) {
            return true
        }
        if (i >= 1 && !seen[i-1][j]) {
            let copy_seen = seen.map(v => v.slice())
            if (wordFind(board, word, i-1, j, l+1, copy_seen)) {
                return true
            }
        }
        if (i < board.length-1  && !seen[i+1][j]) {
            let copy_seen = seen.map(v => v.slice())
            if (wordFind(board, word, i+1, j, l+1, copy_seen)) {
                return true
            }
        }
        if (j >= 1  && !seen[i][j-1]) {
            let copy_seen = seen.map(v => v.slice())
            if (wordFind(board, word, i, j-1, l+1, copy_seen)) {
                return true
            }
        }
        if (j < board[0].length-1  && !seen[i][j+1]) {
            let copy_seen = seen.map(v => v.slice())
            if (wordFind(board, word, i, j+1, l+1, copy_seen)) {
                return true
            }
        }
    }
    
    return false
}