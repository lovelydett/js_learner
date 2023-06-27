/*
* This file covers the basic of async programming in JS
* */

// 1. callback
// @description: A callback is a function passed as an argument to another function.
function try_callback() {
    // Problem 1 of sequence functions
    function add2(a, b) {
        return a + b;
    }

    function display(res) {
        console.log(res);
    }

    // To first add 2 numbers and then display the result
    // we have to call the two functions like below
    let res = add2(1, 2);
    display(res);

    // Problem 2 of sequence functions
    function add2_and_display(a, b) {
        let res = add2(a, b);
        display(res);
    }

    // In such cases, we cant prevent the display function from being called
    add2_and_display(1, 2);

    // To solve this problem, we can use callback
    // A callback is a function passed as an argument to another function.
    function add2_and_do_callback(a, b, callback) {
        let res = add2(a, b);
        callback(res);
    }

    add2_and_do_callback(1, 2, display);
}

function try_callback2() {
    let nums = [1, -1, 2, 3, 2, 1, -5, 10];
    let res = pick(nums, (x) => x > 0);

    function pick(nums, picker_callback) {
        const res = []
        for (const num of nums) {
            if (picker_callback(num)) {
                res.push(num);
            }
        }
        return res;
    }

    console.log(res);
}


function main() {
    // try_callback();
    try_callback2();
}

main();