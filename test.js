var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const el2 = nums[j];
            const sum = el + el2;
            console.log(el, el2, sum, [i, j]);
            if(sum === target) {
                return [i, j];
            }
        }
    }
};

twoSum([3,2,4], 6);