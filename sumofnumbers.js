/**
 *E26 Five problems every software engineers should be abale to solve (Part 1).
 *Created by wyoro on 9/17/17.
 */

const numList = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(numList));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++
  }
  return total;
}

console.log(sumWhile(numList));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(numList));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(memo, num){ return memo + num; }, 0);
}

console.log(sumTheSimpleWay(numList));