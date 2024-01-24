//클래스 접근 테스트
function classTest(){
    //.clas-test의 요소 모두 얻어오기
    const divs = document.getElementsByClassName("cls-test");
    
    console.log(divs); //HTMLCollection(3) [div.cls-test, div.cls-test, div.cls-test]이 출력됨
                       //HTMLCollectio == 유사배열(=배열처럼 index, length를 가지지만 배열의 메소드는 사용 불가)


    //divs 0,1,2번째 요소에 접근하여 배경색 변경하기
    divs[0].style.backgroundColor = "rgb(14,203,80)";
    divs[1].style.backgroundColor = "blue";
    divs[2].style.backgroundColor = "deepPink";
}


/*****태그명으로 요소 접근하기****/

function tagNameTest(){
    //html 문서에 존재하는 모든 li 태그의 요소를 가져와 배열로 반환해줌
    const tagList = document.getElementsByTagName("li");

    console.log(tagList); //HTMLCollection(5) [li, li, li, li, li]가 출력됨. li 요소들이 유사배열에 들어왔다

    for(let i = 0; i<tagList.length; i++){ //순차접근
        //tagList[i].innerText = "abc" : 내용으로 abc를 대입한다는 뜻
        //tagList[i].innerText         : 작성된 내용을 얻어오기
        console.log(tagList[i].innerText);

        tagList[i].style.backgroundColor = tagList[i].innerText;
    }
}



function nameTest(){
    //name 속성 값이 "hobby"인 요소를 모두 얻어와 변수에 저장
    const hobbyList = document.getElementsByName("hobby");
    console.log(hobbyList);

    let str=""; //체크된 값 누적
    let count = 0; //체크된 수 카운트

    for(let i = 0;i < hobbyList.length; i++){ //순차 접근

        //checkbox, radio 전용 속성 (.checked)
        //input요소.checked ->요소가 체크되어 있으면 true반환, 안돼있으면 false 반환
        //input요소.checke= true -> 해당 요소를 체크 하겠다는 의미
        //input요소.checke= false -> 해당 요소를 체크 해제 하겠다는 의미


        if(hobbyList[i].checked){
            str += hobbyList[i].value + " "; //str에 누적시킴
            count++;   //count 증가
        }
    }

    //#name-div 요소에 내용으로 결과 출력하기
    document.getElementById("name-div").innerHTML= `${str} <br><br>선택된 취미 개수 : ${count}`;
    //<br>태그를 쓰려고 innerHTML사용
    

}


/***********css선택자로 요소 접근하기*************/
function cssTest(){

    /**
     * [요소 1개]
     * 1)document.querySelector("CSS 선택자");  -> 선택자가 선택한 요소 중 첫번째 요소를 반환
     * 
     * [요소 N개->배열]
     * 2)document.querySelectorAll("CSS선택자"); -> 선택한 요소 모두를 배열(유사배열) 형태로 반환해줌
     */

    //target-div 속성 값이 "css-div" 요소에 접근
    const container = document.querySelector("[target-div = 'css-div']");


    //요소의 테두리를 변경
    container.style.border = "10px solid red";



    // 첫번째 자식 div에 접근해서 내용을 "css 선택자로 선택해서 값 변경됨"으로 바꾸기
    const div1 = document.querySelector('[target-div = "css-div"]>div');
    //'[target-div = "css-div"]>div:first-child"로 first-child를 적지 않아도 어차피 queryselector에서 첫번째 요소만 반환함
    div1.innerText="css 선택자로 선택해서 값 변경됨"
    //두번째 자식 div
    const div2 = document.querySelector('[target-div = "css-div"]>div:last-child');
    div2.innerText="첫번째 요소가 아니면 querySelector()의 특징 활용 못함"

    //모든 자식 div 한번에 선택(배열)
    const divList = document.querySelectorAll('[target-div = "css-div"]>div'); //자식 div 두개
    console.log(divList); //NodeList(2) [div, div]출력됨. div 요소 잘 들어옴
    //index를 이용해서 요소 하나씩 접근
    divList[0].style.fontFamily = "궁서"; //첫번째 자식 궁서체로 바꾸기
    divList[1].style.fontSize = "20px"; //두번째 자식 폰트 사이즈 바꾸기


    //for문으로 요소에 순차 접근하여 이벤트 부여하기
    for(let i = 0; i<divList.length; i++){

        divList[i].onclick= function(){  //요소를 클릭했을 때 alert를 주는 함수 작성
            alert(`${i}번째 요소입니다!`);
        }
    }
}


/**************카카오톡 모양의 채팅 화면 만들기***************/
function readvalue(){
    //채팅이 출력되는 배경 필요
    const bg = document.querySelector("#chatting-bg");


    //채팅 내용 입력 input 필요
    const input = document.querySelector("#user-input");
    
    //입력된 값이 없을 경우
    //1)진짜 안 적은 경우
    //2)공백만 적은 경우
    //3)

    //문자열.trim() :문자열 좌우 공백 제거해줌
    if(input.value.trim().length==0){
        alert("채팅 내용을 입력해주세요");

        input.value =""; //이전에 있던 input에 작성된 값 삭제

        input.focuse(); //input에서 커서 활성화 상태
        return; //현재 수행중인 함수 종료 + 호출한 곳으로 돌아감
    }

    //채팅 출력(bg에 채팅 내용들을 누적해줄거임)
    bg.innerHTML += `<p><span>${input.value}</span></p>`;


    //bt.scrollHeight : bg의 스크롤 전체 높이
    //bg.scrollTop : 스크롤 윗부분 위치
    //bg.scrollTop = 값 대입 : 스크롤 윗부분을 값 위치로 이동(값이 너무 크면 제일 밑으로 이동함)

    bg.scrollTop = bg.scrollHeight;//입력하며 스크롤탑의 위치가 변경될 것임

    input.value=""; //입력->엔터 후 입력했던 값이 안보이게
    input.focus(); 
}

/*
아이디가 user-input인 요소에서 키가 올라오는 동작이 발생했을 때(감지되었을 때)
올라온 키가 만약 "enter"키라면 readvalue() 함수를 호출하도록 할 거임
    ==텍스트 입력하고 엔터 눌렀을 때도 채팅 기능을 하도록 한다
*/

//keydown : 키보드 이벤트 중 하나로, 키가 눌렸을 때 이벤트가 발생함(+꾹 누르고 있으면 계속 인식된다)
//keyup : 눌러지던 키가 떼어졌을 때(1회만 인식)


document.querySelector("#user-input")
.addEventListener("keyup", function(e){     
    //addEventListener(이벤트종류, 함수이름) : 이벤트를 등록하는 가장 권장되는 방식
    //매개변수e : 발생한 이벤트 정보를 담고있는 객체
    console.log(e); //

    if(e.key == "Enter"){  //엔터가 눌러졌을 때
        readvalue();  //함수가 작동하도록
    }
})





