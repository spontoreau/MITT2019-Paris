//@ts-check

/**
 * 
 * @param {number[]} numbers 
 */
function sum(numbers) {
  return numbers
    .reduce(function(previous, next) {
        return previous + next;
    });
}

var result = sum([true, 2, "3"]);
console.log(result); // 33 ...