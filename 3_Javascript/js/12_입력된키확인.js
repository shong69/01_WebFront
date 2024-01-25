//문자열.toLowerCase() : 영어를 모두 소문자로 변경(A->a)  : 키보드에 입력한 알파벳 인식을 어떻게 하는건데../?
//문자열.toUpperCase() : 영어를 모두 대문자로 변경(a->A)

//q를 누르면 화면의 Q 영역의 색이 변한다. 


//화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key"); //배열 형태로 얻어옴

console.log(keys);

//문서(화면 전체)에서 키가 눌러지는 걸 감지했을때 기능을 수행하도록 함
document.addEventListener("keydown", function(e){
    let idx;  //index 값을 저장할 변수

    //입력된 키를 소문자로 바꿔서 일치하는 case 실행 ->대문자로 입력되는 건가?
    switch(e.key.toLocaleLowerCase()){
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default: return; //함수 종료
    }

    //idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경할 것임
    keys[idx].style.backgroundColor = "deepblue";


})

//키를 떼면 배경색 흰색으로 되돌리기
document.addEventListener("keyup", function(e){
    let idx;  //index 값을 저장할 변수

    //입력된 키를 소문자로 바꿔서 일치하는 case 실행 
    switch(e.key.toLocaleLowerCase()){
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default: return; //함수 종료
    }

    keys[idx].style.backgroundColor = "white";
})




