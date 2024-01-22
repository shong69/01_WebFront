//변수 선언

//document : html문서 내에서
//get : 얻다
//element: html요소
//byid : 아이디가 일치하는
const number1 =document.getElementById("input1");
const number2 =document.getElementById("input2");
const result = document.getElementById("calcResult");


//더하기 함수
function plusFn(){
    //input요소.value : input 요소에 작성된 값 얻어오기
    const value1 = number1.value;
    const value2 = number2.value;

    console.log("두 수의 합: ",  value1+value2) //두 수를 더한 값이 아닌 이어쓴 값이 나온다
    //input 요소에 작성된 값은 무조건 문자열(string) 형태임
    //->문자열 변수를 숫자로 변환시켜야 함
    //number(value1)로 감싼다.

    /*
    두 수의 합을 아이디가 calcResult(result변수)인 요소의 내부 글자(innerText, html 요소 내용)으로 대입하기
    */
    result.innerText = Number(value1) + Number(value2);
}

//빼기 함수
function minusFn(){
    const value1 = number1.value;
    const value2 = number2.value;
    
    result.innerText = Number(value1) - Number(value2);
}

//곱하기 함수
function multiFn(){
    const value1 =number1.value;
    const value2=number2.vlaue;

    result.innerText = Number(value1)*Number(value2);
}

//나누기 함수
function divFn(){
    const value1 =number1.value;
    const value2=number2.vlaue;

    result.innerText = Number(value1)/Number(value2);
}

//나눈 나머지 함수
function modFn(){
    const value1 =number1.value;
    const value2=number2.vlaue;

    result.innerText = Number(value1)%Number(value2);
}



//----------------응용문제-------------------


const num1=document.getElementById("num1")
const num2=document.getElementById("num2")
const num3=document.getElementById("num3")
const totalof3=document.getElementById('total')


function totalFn(){
    const firstNum = Number(num1.value);
    const secNum = Number(num2.value);
    const thirdNum = Number(num3.value);

    totalof3.innerText = firstNum + secNum + thirdNum;
}




//-----------------------------------------
//증감연산자(++,--)

//증가, 감소할 수를 저장할 변수 선언 ->변수 선언에 const를 사용하면 안된다(const는 상수여서)
let count = 0;
//문서 내에서 id가 result2인 요소를 얻어와 result2 변수에 대입하기
const result2 = document.getElementById("result2");
//증가함수
function increase(){
    count++; //전위연산도 ㄱㅊ(++count)
    
    //증가한 count 값을 result2의 내용으로 대입하기
    result2.innerText= count;
}
//감소함수
function decrease(){
    count--; //전위연산도 ㄱㅊ(++count)
    result2.innerText= count;
}



//전위, 후위 연산 확인하기

function check(){
    //함수 밖, 안은 구분되는 공간으로 생각하면 된다.
    //밖에 작성한 변수 count, 안에 작성한 count는 서로 다른 변수이다.
    let count=100;

    //컴퓨터에게 연산이란 +,-,*,/ 뿐만 아니라 코드를 하나하나 실행하는 것들도 연산이다.
    
    //전위연산(++count, --count) 확인
    //->다른 연산보다 먼저 수행된다.
    //->count 값이 먼저 증가, 감소된 후에 console에 출력된다.

    console.log("++count: ", ++count);
    console.log("++count: ", ++count);
    console.log("++count: ", ++count);
    console.log("--count: ", --count);




    //후위연산(count++, count--) 확인
    //->다른 연산이 다 끝나고 마지막에 수행
    count=50;
    console.log("count++: ", count++); //50출력 후 51로 증가함
    console.log("후위연산 후 count: ", count);
    console.log("count--: ", count--); //콘솔 출력 후 감소되기 때문에 콘솔에는 51이 출력됨
    console.log("후위연산 후 count:: ", count); //50출력됨
    console.log("count--: ", count--);
    
    

    console.log("---------------------------")

    let a=10;
    let b=5;
    let c=++a * b--;
    //최종적으로 a,b,c에 저장된 값은 얼마?
    //a ==11
    //b == 4
    //c == 55
    console.log(c)//55출력됨
}


/* 연습문제 풀기 */

const name1 = document.getElementById("userName");
const age = document.getElementById("userAge");
const gender = document.getElementById("userGender");

function printJSObject(){
    const val1 = name1.value;
    const val2 = Number(age.value);
    const val3 = gender.value;
    const infoOBJ={'이름':val1, '나이':val2, '성별' : val3 };
    console.log(infoOBJ);
}