// console.log("큐브찹스테이크")
// //HTML -> JS
// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")
// let minusButton = document.querySelector("#minus")
// //숫자 증가 
// let count = 0
// button.addEventListener("click", function() {
//     count++
//     h1.textContent = count
// })
// //숫자 감소
// minusButton.addEventListener("click", function() {
//     count--
//     h1.textContent = count
// })

// const resultH1 = document.querySelectorAll("h1");
// const resultH1 = document.getElementsByTagName("h1")[0];
// const plusButton = document.getElementsByName("button")[0];
const resultH1 = document.getElementById("result"); //훨씬 빠르다.(왜인지 궁금하네.)
const plusButton = document.getElementsByClassName("plusBtn")[0];
let count = 0;


// plusButton.addEventListener("click",function () { //()=>{}화살표 함수 사용가능.
//     count++; //count+=1;  //coudnt = count + 1
//     resultH1.innerHTML = count;
// });


// plusButton.onclick=() => {
// } //하나만 실행됨. 

function plus(){
    count++;
    resultH1.innerHTML = count;
}

function plus2(){
    count+=2;
    resultH1.innerHTML = count;
}

function minus(){
    count--;
    resultH1.innerHTML = count;
}