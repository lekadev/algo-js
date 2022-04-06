/*
* Reverse the input string and remove neighboring duplicate symbols from it
*
* Example           Input: string = 'Hellomylittlefriend'
*                   Output: 'dneirfeltilymoleH'
*/

const reverseAndRemoveDuplicates = str => {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        if (result[result.length - 1] !== str[i]) {
            result += str[i]
        }
    }
    return result
}
