function variable() {
    let mike = {};
    mike.name = "Mike";
    mike.age = 20;

    const tom = {};
    tom.name = "Tomm";
    tom.age = 30;

    // tom = mike; // Error: Assignment to constant variable.
    tom.name = "Tom";
    console.log(tom);
    console.log(mike);
}

function main() {
    variable();
    console.log(`${typeof undefined}`);
}

main();