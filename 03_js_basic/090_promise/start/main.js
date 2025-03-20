let a = 0;
console.log(a);

new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        // resolve(a);
        reject(a);
    }, 1000);
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(`エラーが発生しました。${error}`);
})