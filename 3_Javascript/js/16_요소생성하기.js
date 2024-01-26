const createBox = document.querySelector("#createBox"); //박스생성 버튼 태그
const container = document.querySelector(".container"); //div

//createBox 버튼 클릭 시 div.box를 생성해서 container 안에 마지막 자식으로 추가할 것임

createBox.addEventListener("click",()=>{
    //1.div 요소를 생성함
    const box = document.createElement("div"); //<div></div>태그만 생김
    console.log(box); //태그가 생겼지만 어디에 넣을지 안정해서 화면에서는 보이지 x
    
    //2.만들어진 div 요소에 "box"클래스 추가하기
    //classList == 박스 요소에 클래스 리스트로 접근해서 box 클래스 명을 추가함
    box.classList.add("box");    //<div class = "box"></div> 상태

    //3.container의 마지막 자식으로 div 요소 추가히기
    container.append(box);

    //4.input 요소 생성하기
    const input= document.createElement("input");
    input.type = "text"; //input 태그에 type 지정 <input type = "text"></input> 상태
    
    //5.생성된 input을 box의 마지막 자식으로 추가
    box.append(input);
})


/*
    요소.classList : 요소의 클래스 목록을 반환해줌
    ->클래스 존재 여부, 추가, 제거 등을 할 수 있음

    *요소.classList : 요소 목록이 배열 형식으로 반환됨
    *요소.classList.contains("클래스명") : 클래스 리스트에서 전달한 클래스가 존재하면 true, 없으면 false 반환함
    *요소.classList.add("클래스명") : 전달한 클래스 추가
    *요소.classList.remove("클래스명") : 전달한 클래스 제거
*/



/* innerHTML로 요소 추가하기 */
const innerHTMLBox = document.querySelector("#innerHTMLBox");

innerHTMLBox.addEventListener("click", ()=>{
    container.innerHTML += "<div class = 'box'><input type = 'text'></div>";
});




