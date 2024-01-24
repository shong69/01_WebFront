for(let num=1; num <= 5;num++){
    //조건식이 True인 경우에만 반복 수행할 코드를 작성;

    console.log("통과!");
}



//12345 출력
function check1(){
    let result = ""; //빈문자열

    for(let num=1;num <=5; num++){
        result += num;
    }
    console.log(result);
}

//1~10까지 1씩 증가하며 출력하기
function check2(){
    for(let num = 1; num <=10; num++){
        console.log(num);
    }
}

//1부터 20까지 1씩 증가하며 출력 
function check3(){
    for(let num=1;num<=20;num++){
        console.log(num);
    }
}

//5부터 15까지 1씩 증가하며 출력 
function check4(){
    for(let num = 5;num<=15;num++){
        console.log(num);
    }
}

//1부터 30까지 2씩 증가하며 출력
function check5(){
    for(let num = 1; num <= 30; num++){
        if (num % 2 == 1){
            console.log(num);
        }
    }
    //for(let num=1; num <=30; num +=2)도 가능
}


//1부터 10까지 모든 정수의 합
function check6(){
    let sum = 0;
    for(let num = 1; num <=10; num++){
        sum += num;
    }
    console.log(sum);
}


/*************입력 받은 범위 내 모든 정수의 합 구하기**************/

function sumFn(){
    const st = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);

    const result1 = document.getElementById("result1");

    let sum= 0;
    for(let num = st; num<=end; num++){
        sum += num;
    }
    result1.innerText = sum;
}



/*************입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기**************/


function executeFn2(){
    const st =Number(document.getElementById("inputNumber2-1").value);
    const end =Number(document.getElementById("inputNumber2-2").value);
    const val =Number(document.getElementById("inputNumber2-3").value);

    //결과 출력할 ul 요소 가져오기
    const ul = document.getElementById("result2"); //ul 태그를 가져온 것

    ul.innerHTML=""; //전에 썼던 내용 삭제해주기


    for(let num = st; num <= end; num += val){
        //ul태그에서 반복수행되는 만큼 li 요소를 추가할 것임
        ul.innerHTML += `<li>${num}</li>`  //innerHTML : html 태그를 해석해서 화면에 태그대로 출력해줌
    }
}

//요소.innerText=`<li>${num}</li>`; -> 요소의 내용으로 문자열을 대입 (html태그를 해석하지 않고 문자열 그대로 태그 내용까지 다 보여준다.)


/**************숙제: 입력 받은 단(2~9) 출력하기***************/

function executeFn3(){
    const multi=Number(document.getElementById("input3").value);
    const result3= document.getElementById("result3");

    
    result3.innerHTML="";
    if(multi<2 || multi > 9){
        alert("2~9 사이만 입력해 주세요");
        return;  //함수 종료 후 함수를 호출한 곳으로 돌아감
    } 

    for(let num = 1;num<=9;num++){
        result3.innerHTML += `<li>${multi}x${num}=${multi*num}</li>`;
    }
}




/*****중첩반복문******/

//다음 모양 출력하기
/*
12345
12345
12345
12345
*/
function check8(){

    
    for(let y = 1; y < 5; y++){

        let str ="";
        for(let x = 1; x <= 5; x++){
            str += x;
        }
        console.log(str);
    }

    
}

//다음 모양 출력하기
/*
1
12
123
1234
12345
*/


function check9(){

    for(let x = 1; x <=5; x++){
        let str = "";
        for(let y = 1; y <=x; y++){
            str += y;
        }
        console.log(str);
    }
}




/*************while문**************/

//while문 확인
 function check16(){
    
    let val;  //변수 선언만 했을 때는 undefined 상태임
    //취소 누르기 전까지 계속 반복==취소 누르면 종료
    while(val !== null) { // !== : 동일 비교 연산자, 값과 자료형이 모두 다른 경우에 해당한다(!=는 값이 다른 경우만 따짐)
                          // === : 값, 자료형까지 모두 같은 경우 true
        
        val=prompt("입력 후 확인");  //변수에 prompt 값 대입
        //확인 -> 입력한 값 들어옴
        //취소 -> null 상태

        console.log(val);
    }
 }


/*****메뉴 주문하기******/
function check17(){
    //메뉴 가격(가격을 누적해서 보여줄 거임)
    const gimbap = 3000;
    const ramen = 3500;
    const donkkastu = 5000;

    //주문개수 카운트 할거임
    let gCount = 0; //김밥 개수
    let rCount = 0; //라면 개수
    let dCount = 0; //돈까스 개수

    //promt로 입력한 값을 저장할 변수 선언
    let input; //undefiend 상태


    //확인 -> 입력한 값
    //취소 -> null
    while(input !== null){ //취소 누르기 전까지 반복
        input = prompt("메뉴 번호를 입력하세요");
        switch(input){
            case "1" : gCount++; break;
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문 완료"); break;
            default : alert("메뉴에 작성된 번호만 입력해주세요"); break;
        }
    }
    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    let sum = (gCount*gimbap + rCount*ramen + dCount*donkkastu);

    alert(`총 가격 : ${sum}원`);
}

/*****while문 for문처럼 사용하는 법******/

function check18(){

    //1부터 10까지 출력하기
    let num=1;
    while(num<11){
        console.log(num);
        num++;
    }

    console.log('-------------');
//10부터 1까지 1씩 감소(while)


    let x = 10;
    while (x>0){
        console.log(x);
        x--;
    }
}