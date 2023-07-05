// Yet another good example of callback, promise and async/await.
// @Author: yuting.xie (xytxytxyt@hotmail.com)
// @Date: 2023-07-05

function callback_style() {
    function append_str(s1, s2, callback) {
        setTimeout(() => {
                callback(s1 + ' ' + s2);
            },
            Math.random() * 1000);
    }

    let str = '';
    let res;
    append_str(str, 'A', (str) => {
        append_str(str, 'B', (str) => {
            append_str(str, 'C', (str) => {
                res = str;
            });
        });
    });

    // cant do this because the result may not yet be ready
    // console.log("Result from callbacks: ", res);

    // this would also prevent the callbacks from being called
    // while (res === undefined) {
    //     // wait
    // }
}

function promise_style() {
    // to change the behavior of sync function append_str to async
    // the first step is to let it return a promise
    function append_str(s1, s2) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    if (1) {
                        // entering here means a time-consuming task is successful,
                        // and we can resolve the promise (return value as result to then())
                        resolve(s1 + ' ' + s2);
                    } else {
                        // in other cases it may fail then we reject the promise
                        // (return value as error msg to catch())
                        reject('Error');
                    }
                },
                Math.random() * 1000);
        });
    }

    const promise = append_str('', 'A'); // return a promise to do '' + 'A'
    promise.then((ret_str) => {
        return append_str(ret_str, 'B'); // return another promise to do 'A' + 'B'
    }).then((ret_str) => {
        return append_str(ret_str, 'C'); // return another promise to do 'AB' + 'C'
    }).then((ret_str) => {
        console.log("Result from promises:", ret_str); // finally we get 'ABC'
    });
}

async function async_await_style() {
    // the async/await style is just a syntactic sugar of promise
    // @async marked function can use @await keyword
    // @await keyword apply on a promise and awaits its resolving

    function append_str(s1, s2) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    if (1) {
                        resolve(s1 + ' ' + s2);
                    } else {
                        reject('Error');
                    }
                },
                Math.random() * 1000);
        });
    }

    let res = await append_str('', 'A');
    res = await append_str(res, 'B');
    res = await append_str(res, 'C');
    console.log("Result from async/await:", res);
}

(function main() {
    // promise_style();
    async_await_style().then(_ => console.log('async_await_style finished'));
})();