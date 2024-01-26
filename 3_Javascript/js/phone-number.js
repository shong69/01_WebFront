//누른 번호대로 output에 노출되기(하나씩 리스트 변수에 +=하기 )
let output = document.getElementById("output")
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num_hash = document.getElementById("hash");
const num0 = document.getElementById("num0");
const num_star = document.getElementById("star");

let phone_number=[];

num1.addEventListener("click",()=>{
    phone_number += 1;
    output.innerText = phone_number;

});

num2.addEventListener("click",()=>{
    phone_number += 2;
    output.innerText = phone_number;

});

num3.addEventListener("click",()=>{
    phone_number += 3;
    output.innerText = phone_number;

});
num4.addEventListener("click",()=>{
    phone_number += 4;
    output.innerText = phone_number;

});
num5.addEventListener("click",()=>{
    phone_number += 5;
    output.innerText = phone_number;

});
num6.addEventListener("click",()=>{
    phone_number += 6;
    output.innerText = phone_number;

});
num7.addEventListener("click",()=>{
    phone_number += 7;
    output.innerText = phone_number;

});
num8.addEventListener("click",()=>{
    phone_number += 8;
    output.innerText = phone_number;

});
num9.addEventListener("click",()=>{
    phone_number += 9;
    output.innerText = phone_number;

});
num_hash.addEventListener("click",()=>{
    phone_number += "#";
    output.innerText = phone_number;

});
num0.addEventListener("click",()=>{
    phone_number += 0;
    output.innerText = phone_number;

});
num_star.addEventListener("click",()=>{
    phone_number += "*";
    output.innerText = phone_number;

});

console.log(output);

//추가 버튼을 누르면 전화번호 변수를 전화번호 목록에다가 추가하기
//output에서 사라짐
/*

<div>
    <div id = "list-phonNum">01000000000</div>
    <div class="adj">
        <span id="favorite"></span>
        <span id="del">&times</span>
    </div>

</div> 여기다가 요소 추가할거임
*/
const add = document.querySelector("#add");
add.addEventListener("click", ()=>{
    
    
    phone_number=[];
    output.innerHTML="";
})


//초기화 버튼을 누르면 output의 내용 사라짐
const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
    phone_number=[];
    output.innerHTML="";
});


//전화번호 목록에서 즐겨찾기를 누르면 상단에 계속 떠 있어야 함
//전화번호 목록에서 삭제 버튼을 누르면 해당 블록 삭제됨
