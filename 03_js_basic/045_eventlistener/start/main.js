const h1Element = document.querySelector("h1");
const button = document.querySelector("button");

const helloFn = (e) => {
    console.dir(e.target);
    console.log("hello");
};

button.addEventListener("click", helloFn)