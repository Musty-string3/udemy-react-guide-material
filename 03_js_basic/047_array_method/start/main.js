const arry = [10, 20, 30, 40];
const newArry = [];

for (let i = 0; i < arry.length; i++) {
    const val = arry[i] * 2;
    if (val > 50) {
        newArry.push(arry[i] * 2);
    }
}

console.log(newArry);

const newArry2 = arry.map((val, i, array) => {
    // console.log(val);
    // console.log(i);
    // console.log(array);
    return val * 2
}).filter((val) => {
    return val > 50;
});


console.log(newArry2);
