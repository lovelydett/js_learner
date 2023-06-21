l = [1, 3, 2, 4, 5]

// for loop
let i, ma = l[0];
for (i = 0; i < l.length; i++) {
    if (l[i] > ma) {
        ma = l[i];
    }
}
console.log("The maximum value is", ma);