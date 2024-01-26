//요소.remove() : 요소 제거
//요소.classList.add("클래스명") : 클래스 추가
//요소.classList.remove("클래스명") : 클래스 제거

//만드려는 기능 중 공통적으로 사용되는 요소를 전역 변수 선언

const add=document.querySelector("#add");
const calc = document.querySelector("#calc");
const container = document.querySelector(".container"); //최종적으로 동적으로 만들어진 요소가 붙여야 하는 요소



add.addEventListener("click",()=>{
    //div 추가하기
    const div = document.createElement("div");
    div.classList.add("row");
    container.append(div);

    //input 추가하기
    const input = document.createElement("input");
    input.classList.add("input-number");
    input.type = "number";
    /*type 추가 또다른 방법(속성 추가 메소드 사용하기) : input.setAttribute("type", "number");
    class의 경우 여러개가 들어갈 수 있지만, 
    setAttribute 속성을 사용해 추가하면 원래 속성들이 사라지고 새로 쓴 요소가 덮어씌워진다.*/
    
    div.append(input);

    //x 추가하기
    
    const deleteInp = document.createElement("span");
    deleteInp.classList.add("remove-row");
    deleteInp.innerHTML = "&times;"; 
    //&times; 도 html에서 해석해야 하는 요소이기 때문에 innerText로 추가하면 안된다.

    div.append(deleteInp);



    //x 누르면 삭제하기
    //x 누르면 클릭한 요소의 부모(div)가 사라지도록 한다  (함수 안에 있어도 상관없이 click 시 수행할 수 있음)

    //1. 만들어지는 x버튼(span)에 이벤트 리스너 추가
    deleteInp.addEventListener("click", e =>{
        //2. 현재 이벤트가 발생한 요소(클릭된 x버튼)의 부모 요소를 선택(탐색)한다
        const parent = e.target.parentElement; //==div.row

        //3.부모 요소를 제거하기
        parent.remove();
    });

});



calc.addEventListener("click",()=>{
   
    const list = document.querySelectorAll(".input-number"); //모든 input-number 얻어오기
    console.log(list[0].value); //잘나옴

    //for문으로 모든 요소에 접근해 value를 얻어와 숫자로 변경 후 합계 누적해서 저장
    let sum = 0;

    for(let i=0; i<list.length; i++){   
        let num = Number(list[i].value);
        sum += num;
    }
    alert(`모든 합은 ${sum}입니다!`); //alert로 결과 출력하기
});