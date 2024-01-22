/*.js 파일 내부를 script 태그 내부라고 생각하면 된다*/

function externalFn(){
    alert("외부 파일에 작성된 externalFn() 함수가 호출됨");
}


/***************************JS맛보기****************************/
//버튼 클릭 시 body 태그의 글자색, 배경색을 변경
const body=document.querySelector("body"); //body 태그 요소를 선택하는 방법(body 변수에 html 문서의 body 태그값을 줌)

/* 실행되면 다크모드로 바꾸는 함수(기능) */
function darkMode(){
    body.style.color="white"; //글자색 흰색 변경
    //.style : js에서 css 속성을 줄 수 있는 방법
    body.style.backgroundColor="black"; //배경색 검정으로 변경

}

/* 실행되면 라이트모드로 바꾸는 함수(기능) */

function ligthMode(){
    body.style.color="black";
    body.style.backgroundColor="white";
}

