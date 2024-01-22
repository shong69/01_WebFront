/*console.log(값)*/
//브라우저 콘솔에 괄호() 내부의 값을 출력(기록)

console.log(1234); 
console.log("찹다 차");
console.log('너무 추워~~~');

/*****************************************************/

//변수 선언
//메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
//작성법: 변수종류 변수명;
var number1;

//변수에 값 대입
//값 대입 : 선언된 변수에 값을 대입하는 것
//작성법: 변수명 = 값;
number1 = 4;

//콘솔에 number1값 출력하기
console.log(number1);

//변수의 선언 + 대입
var number2=4;

console.log(number2);

//number1와 number2의 합 출력하기
console.log(number1 +number2);

//변수에 대입한 값 변경하기
number1=300; //기존 변수의 값을 새로 재대입함(기존 값에 덮어쓰기됨)\
number2=400;

//변경된 두 변수의 값 출력
//1)문자열 + 문자열/숫자/변수 == 이어쓰기됨

console.log("number1의 값 :" +number1);
console.log("100" +100); //100100이 출력됨

//2)괄호 내부에 , 를 작성해 각각의 값을 독립적으로 출력할 수 있음
console.log("number1 : " , number1, "/number2 :", number2);

/****************************************/
//var, let, const의 차이점
//1. var (변수, 변수 선언 시 중복되는 변수명으로 선언 가능함)
//  ->먼저 선언된 변수가 나중에 선언된 변수에 덮어 씌워짐

var menu ="삼겹살";
console.log("menu : "+menu);


var menu = "초밥";
console.log("menu : "+menu);
//초밥으로 변경되어 출력한다.
//이전에 선언했던 변수를 쓸 수 없게 되는 문제가 발생한다.

//-----------

//2. let(변수, var의 변수명 중복 문제를 해결함)
let number3=25;
//let number3=500;

//-> 에러가 뜨고 잇음(기존에 있던 변수에 새로운 값만 대입 가능함)

console.log("number3: ", number3);



//------------
//3. const(상수, constant, 항(상) 같은 수)
//한번 값이 개입되면 새로운 값을 대입할 수 없다

const PI = 3.141593;

//PI = 1.34; 
//console.log(PI);
//Uncaught TypeError: Assignment to constant variable.
//->상수에 새로운 값을 대입할 수 없는데 새로운 값이 대입되었다. 

//-----------------
//함수 레벨 스코프(scope)
// : 함수 내에서 선언된 변수는 함수 내에서만 유효하며, 함수 외부에서는 참조할 수 없다.
//즉 함수 내부에서 선언한 변수는 지역변수(외부 선언 변수는 전역변수)

//블록{} 레벨 스코프(scope)
// : 모든 코드 블록 내에서 선언된 변수는 코드블록 내에서만 유효하며, 블록 외부에서는 참조할 수 없다
//즉 코드 블록 내부에서 선언한 변수는 지역변수이다.

//블록 레벨( let, const)
let foo = 123; //전역변수
{
    let foo=456; //지역변수
    let bar=456; 

    console.log(foo); //456이 호출됨
}

console.log(foo); //123이 호출됨
//console.log(bar); //에러 뜸

//함수레벨(var)
var test = 123; //전역변수

console.log(test); //123호출됨
{
    var test=456; //함수 내부가 아님-> test 전역변수
}

console.log(test); //456이 호출됨


/*************************************************/
/* JS자료형 확인하기 */

//typeof 연산자 : 변수나 값의 자료형을 출력하는 연산자

//undefined : 정의되지 않은 변수/ 값이 아직 대입되지 않았다
let undef; //변수 선언
console.log("undef: ", undef, typeof undef);  //undef:  undefined undefined 출력됨.(값과 타입이 호출되었다)

//string(문자열) : "" 또는 '' 내부에 작성된 값

const name1 = "홍길동";
console.log("name: ", name1, typeof name1); //name:  홍길동 string 출력됨

const phone ='010123412434'
console.log("phone: ",phone, typeof phone); //phone:  010123412434 string 출력됨


const gender ='M' // 한글자만 작성해도 문자열(string)임
console.log("gender: ", gender, typeof gender); //gender:  M string 출력됨


//number (정수, 실수, 양수, 음수, 0 등 모든 숫자 의미함)
const age=43;
const height=178.9;
console.log("age: ", age, typeof age); //age:  43 number
console.log("height: ", height, typeof height); //height:  178.9 number


//boolean(논리값, true, false)
const isTrue =true;
const isFalse =false;
console.log("isTrue: ", isTrue, typeof isTrue)  //isTrue:  true boolean
console.log("isFalse: ", isFalse, typeof isFalse) //isFalse:  false boolean


//object(객체)
//값을 여러개 저장할 수 있는 형태

// 1)배열(Array) : 여러 값이 나열되어 있는 것의 묶음
const numbers =[1,2,3,4,5,6];
console.log("numbers: ", numbers, typeof numbers); //numbers:  (6) [1, 2, 3, 4, 5, 6] object 출력됨

console.log("numbers배열 값 중 0번째: ", numbers[0]); //numbers배열 값 중 0번째:  1 출력됨


//2)js 객체
//값을  k:v(map) 형식으로 여러개 저장하는 형태
// -> {k:v, k:v, ...}

//key : 값을 구분하는 이름(변수명 비슷)
//value : k에 대응되는 값(변수에 대입되는 값 비슷)

const user={id:"user01", pw:"pass01", username:"홍길동"};
console.log("user: ", user);  //user:  {id: 'user01', pw: 'pass01', username: '홍길동'} 출력됨


//객체에 존재하는 값 하나씩 얻어오기

//방법1: 변수명['key'] ->해당 key에 대응하는 value가 출력된다.
console.log("user['id']: ", user['id']); //user['id']:  user01
console.log(user['pw']); //pass01
console.log(user['username'], typeof user['username']); //홍길동 string

//방법2: 변수명.key
console.log(user.id);



//함수(function)

//작성법
//const 변수명=funstion(){};
//(변수명==함수명)

const sumFn =function(a,b){return a +b }; //익명함수(함수의 이름이 대입 전까지 없었으니까//sumFn은 변수명이자 대입되는 함수의 함수명임
console.log(typeof sumFn); //function
console.log(sumFn(10,11)); //21

/*
function sumFn(a,b){
    return a+b;          
}
->위의 익명함수와 같다.
*/


