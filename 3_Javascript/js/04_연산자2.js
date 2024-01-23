/*******비교연산자*******/
//두 수가 같은지 비교
const cv1 = document.getElementById("compareValue1"); //input
const cv2 = document.getElementById("compareValue2"); //input

const result1 = document.getElementById("result1"); //span


function compareFn1() {
    const v1 = cv1.value;
    const v2 = cv2.value;

    result1.innerText= (v1 == v2);
}

//초과 비교
const cv3 = document.getElementById("compareValue3");
const cv4 = document.getElementById("compareValue4");

const result2 = document.getElementById("result2");

function compareFn2() {
    const v3 = Number(cv3.value);
    const v4 = Number(cv4.value);

    result2.innerText= (v3 > v4);
} 


//배수 확인
const input3_1 = document.getElementById("input3_1");
const input3_2 = document.getElementById("input3_2");

const result3 = document.getElementById("result3");

function checkFn3() {
    const v1 = Number(input3_1.value);
    const v2 = Number(input3_2.value);

    //result3.innerText = (v1 % v2) == 0;
    //백틱(`)을 이용한 문자열 작성하기
    //result3.innerText = v1 + "은/는" + v2+"의 배수" : (v1%v2 == 0);으로 표현해야함(너무 귀찮)
    //->귀찮음 덜기 위한 방법
    //문자열 전체를 백틱으로 감싼 후 변수, 연산결과 등이 출력되는 자리에 ${변수명} 이나 ${연산식}을 작성한다
    result3.innerText = `${v1}은/는 ${v2}의 배수 : ${v1 % v2 ==0}`;
}





/*******복합대입연산자*******/
//입력된 값 만큼 누적/차감

let count4 = 0;

const input4 = document.getElementById("input4");
const result4 = document.getElementById("result4");

//차감
function minus4() {
    const value = Number(input4.value);

    count4 -= value;

    result4.innerText = count4;
}
function plus4() {
    const value = Number(input4.value);

    count4 += value;

    result4.innerText = count4;
}






//논리연산자 확인하기

function checkFn5(){
    //AND &&
    const bool1 = (104 >=100) && (104%2==0);
    console.log(`104는 100 이상의 수면서 짝수인가? ${bool1}`);

    const bool2 = (50 <= 70) && (50%4==0);
    console.log(`50은 70 이상의 수면서 4의 배수인가? ${bool2}`);
    
    const bool3 = (1<= 13)&&(13<=10);
    console.log(`13은 1부터 10 사이의 수가 맞는가? ${bool3}`);

    //OR (||)
    const bool4 = (4>10)||(4%2==0);
    console.log(`4는 10을 초과하거나 짝수인가? ${bool4}`);

    const bool5 = (50<=0)||(50>=40);
    console.log(`50은 0 이하 또는 40 이상가? ${bool5}`);

    //NOT(!)

    console.log(`!true ${!true}`);
    console.log(`!false ${!false}`);

    const bool6 =false;
    console.log(!(bool6 !=true)); //false가 찍힌다.
}

//삼항연산자 -login 기능

const inputId=document.getElementById("inputId");
const inputPw=document.getElementById("inputPw");

function login(){
    const id =inputId.value;
    const pw =inputPw.value;

    const success = "로그인 성공!"; 
    const fail = "id 또는 pw가 일치하지 않습니다."
    
    const message= (id == 'member01') && (pw == 'pass01!')? success : fail;
    alert(message); //message라는 변수 안에 success나 fail이 들어오게 될 것이다.alert에 출력될 메세지임
}