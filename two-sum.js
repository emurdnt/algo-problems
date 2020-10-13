/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    //loops through nums.

    //checks if the object key is already there which means that a past number needs it. returns the value of the object there and then returns the counter.
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    //sets the target - num at index as the key of the obj. assigns the count as the value
    //{ '4': 0 }
    //{ '4': 0, '6': 1 }
    //{ '3': 2, '4': 0, '6': 1 }
    comp[target - nums[i]] = i;
    console.log(comp);
  }
};
console.log(twoSum([2, 0, 3, 4, 10, 5, 9, 10], 20));
