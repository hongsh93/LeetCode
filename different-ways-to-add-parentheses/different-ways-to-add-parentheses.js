/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    let numArr = expression.match(/\d+/g).map(Number)
    let opArr = expression.match(/[^\d]/g)
    
    const compute = function(_numArr, _opArr) {
        let result = []
        if (_numArr.length === 1) {
            return _numArr
        }
        
        for (let i=0; i<_opArr.length; i++) {
            let left = compute(_numArr.slice(0,i+1), _opArr.slice(0,i))
            let right = compute(_numArr.slice(i+1), _opArr.slice(i+1))
            
            for (let p0 of left) {
                for (let p1 of right) {
                    switch(_opArr[i]) {
                        case '+':
                            result.push(p0+p1)
                            break;
                        case '-':
                            result.push(p0-p1)
                            break;
                        case '*':
                            result.push(p0*p1)
                            break;
                    }
                }
            }
        }
        return result
    }
    return compute(numArr, opArr)
    
};