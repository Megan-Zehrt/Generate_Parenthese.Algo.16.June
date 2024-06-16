// 22. Generate Parentheses


// Given "n" pairs of parentheses, write a function to generate all combinations of well-formed parentheses.






/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let result = []

    function add(string, open, close){

        if(string.length == 2*n){
            result.push(string)
        }

        if(open < n){
            add(string + "(", open + 1, close)
        }

        if(close < open){
            add(string + ")", open, close + 1)
        }
    }

    add("", 0, 0)

    return result
};