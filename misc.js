// Playground-like scripts

function zipTwoListsOfObjects() {
    let list1 = [{a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}];
    const list2 = [{c: 3, d: 4}, {c: 3, d: 4}, {c: 3, d: 4}];

    // list1.forEach((item, index) => {
    //     Object.assign(item, list2[index]);
    // });

    // use map instead
    list1.map((item, index) => {
        Object.assign(item, list2[index]);
    });

    console.log(list1);
}

function main() {
    zipTwoListsOfObjects();
}

main();