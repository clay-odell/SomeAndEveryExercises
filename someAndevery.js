// function mySome(array, callback) {
//     for (var i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) 
//             return true;
//         }
//         return false;
//     }
    
// function myEvery(array, callback) {
//     for(var i = 0; i < array.length; i++) {
//         if (!callback(array[i], i, array)) return false;
//         }
//         return true;
//     }
    
//some exercises
function hasOddNumber (arr) {
    return arr.some(function(num) {
        return num % 2!== 0;
    });
    return arr;
}
const answer1 = hasOddNumber([1,2,2,2,2,2,4]) // true
const answer2 = hasOddNumber([2,2,2,2,2,4]) // false

function hasAZero(num) {
    return num.toString().split('').some(function(val){
        return val === '0';
      })
}
const answer3 = hasAZero(33321232131012) // true
const answer4 =hasAZero(1212121) // false

//every exercise
function hasOnlyOddNumbers (arr) {
    return arr.every(function(num) {
        return num % 2 !== 0;
    })
    return arr;
}

const answer5 = hasOnlyOddNumbers([1,3,5,7]);
const answer6 = hasOnlyOddNumbers([1,2,3,5,7]);

function hasNoDuplicates(arr) {
    return arr.every(function(num) {
        return arr.indexOf(num) === arr.lastIndexOf(num);
    });
    return arr;
}
const answer7 = hasNoDuplicates([1,2,3,1]) // false
const answer8 = hasNoDuplicates([1,2,3]) // true

function hasCertainKey (arr, key) {
    return arr.every(function(val) {
     return key in val;
    })
}
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  const answer9 = hasCertainKey(arr,'first') // true
  const answer10 = hasCertainKey(arr,'isCatOwner') // false 

function hasCertainValue(arr, key, searchVal) {
    return arr.every(function(val) {
     return val[key] === searchVal;
    })
}
let arr2 = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

const answer11 = hasCertainValue(arr,'title','Instructor') // true
const answer12 = hasCertainValue(arr,'first','Elie') // false