
//prompt 사용연습
function test(){
    const password = prompt("비밀번호를 입력하세요");
    //확인 버튼 : 입력한 문자열 서버로 넘어감
    //취소 버튼 : null 값이 넘어감

    if(password == null){
        alert("취소");
    } else{
        if(password=='1234'){
            alert("비밀번호 일치함");
        } else{
            alert("비밀번호 불일치");
        }
    }
}

/*****입출금하기 연습문제******/

const output = document.getElementById("output"); //잔액 출력 span
const amount = document.getElementById("amount"); //금액 작성input

let balance = 10000; //잔액 기록 변수(초기값10000원)
const password='1234'; //비밀번호 저장 변수(초기 비밀번호 1234)

output.innerText=balance;

function deposit(){
    const inMoney = Number(amount.value);
    if (inMoney > 0){
        balance += inMoney;
    }else if(inMoney ==0){
        alert("0원은 입력이 불가합니다.");
    }else{
        alert("입력 불가");
    }

    output.innerText=balance;

    /*선생님 코드
    if(amount.value.length==0){  //금액을 입력하지 않은 경우
        alert("금액을 입력해주세요");
    } else{
        balance += Number(amount.value);
        output.innerText=balance;
        amount.value = ''; //input 값 삭제
    }
    */
}

function withdrawal(){
    const outMoney= Number(amount.value);

    const confPW=prompt("비밀번호를 입력하세요");

    if (confPW == null){
        alert('취소 버튼 누름');
    }else{
        if(confPW==password){
            alert("비밀번호 일치함");
            if(outMoney>balance){
                alert('출금 금액이 잔액보다 클 수 없습니다');
            }else if(outMoney<=0){
                alert('옳지 않은 출금 금액입니다.');
            }
            else{
                balance -= outMoney;
                alert(`${outMoney}원이 출금되었습니다. 남은 잔액 : ${balance}원`);
            }


        }else{
            alert("비밀번호가 일치하지 않습니다");
        }
    }
    output.innerText=balance;

    /*선생님 코드
    if(amount.value.length==0){ 
        alert("금액을 입력해주세요");

    }else{
        const password = prompt("비밀번호를 입력하세요")

        if(password ==null) {
            alert("취소");

        }else{ 
            //비밀번호가 일치하지 않을 경우
            if(password != '1234'){
                alert("비밀번호가 일치하지 않습니다")

            }else{//비밀번호가 일치하는 경우
                const money = Number(amount.value);
                //출금할 금액이 잔액보다 큰 경우
                if(money > balance){
                    alert("출금 금액이 잔액보다 클 수 없습니다.")

                }else{ //출금할 금액이 잔액보다 작거나 같은 경우
                    balance -=money;
                    output.innerText = balance;
                    amount.value = '';

                    alert(`${outMoney}원이 출금되었습니다. 남은 잔액 : ${balance}원`);
                }
            }
        }

    }
    */
}