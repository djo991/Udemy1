var nums = new Array();
var btn = document.getElementById("go-button");
var text = document.getElementById("myinput");
btn.addEventListener("click",findMissingNo);
function convertNums(nums) {

    var nums = text.value;
    nums = nums.trim().split(',');
    nums.forEach(element => parseInt(element));
    return nums;

}

function findMissingNo () {
    var nums = text.value;
    nums = nums.trim().split(',');
    nums.forEach(element => parseInt(element));
    nums = nums.sort((a, b) => (a - b));
    console.log(nums);
    for (var i = 0; i < nums.length; i++) {
        if (i != nums.length - 1) {
            if (nums[i + 1] - nums[i] != 1) {
                for (var m = 1; m < (nums[i + 1] - nums[i]); m++) {
                    var x = parseInt(nums[i]) + parseInt(m);
                    console.log("The missing number is: " + x)
                }
            }
        }
    }
}

