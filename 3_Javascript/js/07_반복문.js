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

    for(let num = 1;num<=9;num++){
        result3.innerHTML += `<li>${multi}x${num}=${multi*num}</li>`
    }
}












