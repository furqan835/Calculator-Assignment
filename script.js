
const output = document.querySelector(".output");

const a = eval(1+34/5);
console.log(a);
console.log(Math.sqrt(49))

let exp = "";

function makeExp(i) {
    exp = exp + i;
console.log("exp", exp)

}

function calculate(){
    const result = eval(exp);
    output.textContent = result;
}