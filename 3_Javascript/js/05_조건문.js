//if문 -양수인지 검사하기
const input1 = document.getElementById("input1");

function check1(){
    const value1 = Number(input1.value);
    if (value1 > 0){
        const message = `${value1}은 양수입니다.`
        alert(message);
    }
    if (value1 <= 0) {
        const notmessage = `${value1}은 양수가 아닙니다.`
        alert(notmessage);
    }
}

//if-else문- 난수 발생시켜 홀짝 판별하기

function check2(){
    //난수 발생 함수 : Math.random
    //Math.random의 범위 : 0~1

    //0~100 사이 난수 만들기 
    const randNum = Math.floor(Math.random() * 101);  //Math.floor : 소수점 이하를 버림 // Math.random()*101 : 0 이상 101 미만의 랜덤한 난수를 반환합니다.
    
    if (randNum % 2 == 1) { //홀수인 경우
        alert(`${randNum}은 홀수입니다.`);
    } else {
        alert(`${randNum}은 짝수입니다.`);
    }
}


//if-else if- else   -3~3 사이 난수 발생시켜 양수, 음수, 0 판별

function check3(){
    const randNum = Math.floor(Math.random()*7) - 3;   //random에서 범위 지정하기 : Math.random() * (최댓값-최소값+1) + 최소값
    
    let message = randNum + "은/는 ";

    if (randNum==0) {
        message += "0입니다.";
    }
    else if (randNum>0){
        message += "양수입니다.";
    }
    else {
        message += "음수입니다.";
    }

    alert(message);
}

//어린이, 청소년, 성인 구분하기

const inputAge= document.getElementById("inputAge");

function check4(){
    const Age = Number(inputAge.value);

    console.log("Age: ", Age);
    console.log(inputAge.value.length); //아무것도 입력 안하면 길이 0으로 뜸->미입력상태 구분하기!



    if (inputAge.value.length == 0) {
        alert("미입력");
    } else{

        if (Age<0 || Age >150){
            alert("잘못 입력하셨습니다.");
        }
        else if (Age>=0 && Age<=13){
            alert("어린이 입니다.")
        }
        else if (Age<=19){
            alert("청소년 입니다.")
        }
        else {
            alert("성인 입니다.")
        }
    }
    
}



/**************switch문******************/
//switch(식)에서 '식'은 다양한 값이 나타날 수 있는 변수 또는 계산식을 말함
//break : switch문을 멈춤. break를 작성하지 않으면 멈추지 않고 다음 case로 넘어간다.

const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");

const calcResult = document.getElementById("calcResult");

function calc(x) {
    console.log(x); //+,-,%...선택한 연산자가 출력됨

    const val1 = Number(num1.value);
    const val2 = Number(num2.value);

    let result;
    
    
    switch(x){
        case '+': result = val1 + val2;break;
        case '-': result = val1 - val2;break;
        case '*': result = val1 * val2;break;
        case '/': result = val1 / val2;break;
        case '%': result = val1 % val2;break;

        //default : 맞는 case가 없을 경우 적용할 기본값
        default: result = "잘못된 연산자"; break;
    }

    calcResult.innerText=result;


    //if문 버전
/*    if (x == '+'){
        calcResult.innerText=val1+val2;
    } else if (x == '-'){
        calcResult.innerText=val1-val2;
    }else if(x == '*'){
        calcResult.innerText=val1*val2;
    }else if(x == '/'){
        calcResult.innerText=val1/val2;
    }else if(x == '%'){
        calcResult.innerText=val1%val2;
    }else {
        calcResult.innerText="잘못된 연산자";
    }    */

}




