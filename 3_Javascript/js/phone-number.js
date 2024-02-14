//누른 번호대로 output에 노출되기(하나씩 리스트 변수에 +=하기 )
const display = document.querySelector("#display")
const keylist = document.querySelectorAll(".key"); //배열로 받음


keylist.forEach((key)=>{
    key.addEventListener("click", ()=>{
        display.innerText += key.innerText;
    })
});


const resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener("click", ()=>{
    display.innerText = "";
})


//초기화 누르면 output 번호 사라짐
const addBtn = document.querySelector("#addBtn");
const numberList = document.querySelector(".number-list");

addBtn.addEventListener("click", ()=>{
    const li = document.createElement("li");

    const span1=document.createElement("span");
    span1.innerText = display.innerText;

    const span2 = document.createElement("span");
    span2.innerText = "☆";

    span2.addEventListener("click", e=>{
        const parent = e.target.parentElement;
        
        if(parent.classList.contains("favorites")){
            parent.classList.remove("favorites");
            e.target.innerText = "☆"
        }else{
            parent.classList.add("favorites");
            e.target.innerText="★";
        }
    })


    const span3 = document.createElement("span");
    span3.innerHTML ="&times;";

    span3.addEventListener("click", e=>{
        e.target.parentElement.remove();
    });


    li.append(span1, span2, span3);
    numberList.append(li);

    display.innerText = "";
});