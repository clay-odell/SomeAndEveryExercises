function mySome(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) 
            return true;
        }
        return false;
    }
    
function myEvery(array, callback) {
    for(var i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) return false;
        }
        return true;
    }
    
//some exercises
function hasOddNumber (arr) {
    return arr.some(function(num) {
        return num % 2!== 0;
    });
    return arr;
}
const answer1 = hasOddNumber([1,2,2,2,2,2,4]) // true
const answer2 = hasOddNumber([2,2,2,2,2,4]) // false

function hasAZero(arr) {
    return arr.some(function(num) {
        return num === 0;
    });
    return arr;
}
const answer3 = hasAZero(33321232131012) // true
const answer4 =hasAZero(1212121) // false