// 非同期処理（Promise）
let a = 0;
console.log(a);

init();

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         a = 1;
//         resolve(a)
//     }, 2000);
// }).then((b) => {
//     console.log(b);
//     return b;
// }).then((b) => {
//     console.log(b);
// }).catch((c) => {
//     console.log('catchが実行', c)
// })


async function init() {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                reject(a);
            }, 2000);
        })
        console.log(result);
    } catch(err) {
        console.log('catchが実行', err);
    }
}

