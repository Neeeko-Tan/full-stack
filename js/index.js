var array = [1, 3, 4, 6, 7, 8, 10, 14, 15];
var target = 14;

function twoSum(array, target){
    for (var i = 0; i < array.length; i++){
        for (var j=0; j < array.length; j++){
            if (array[i] + array[j] === target && i !== j){
                return [i,j];
            }
        }
    }
    return [-1,-1]
}
console.log(twoSum(array, target));


function twoSum2(array, target){
    var left = 0;
    var right = array.length - 1;
    while (left < right) {
        var sum = array[left] + array[right];
        if (sum === target){
            return[left, right];
        }
        if (sum > target){
            right--;
        }else{
            left++;
        }
    }
    return[-1,-1];
}
console.log(twoSum2(array, target));


function twoSum3(array, target){
    var diffs = {};
    for (var i = 0; i < array.length; i++){
        var currentNumber = array[i];
        if (diffs[currentNumber]){
            return [diffs[currentNumber], i];
        }
        var diff = target - currentNumber;
        diffs[diff] = i;
    }
    return [-1,-1];
}
console.log(twoSum3(array, target));