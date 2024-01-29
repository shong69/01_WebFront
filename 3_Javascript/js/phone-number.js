//누른 번호대로 output에 노출되기(하나씩 리스트 변수에 +=하기 )
const output = document.getElementById("output")
const numlist = document.querySelectorAll("#num"); //배열로 받음



for(let i =0;i<numlist.length;i++){

    numlist[i].addEventListener("click",(e)=>{
        output.innerText += e.target.innerText;
    });
};


//추가 버튼을 누르면 전화번호 변수를 전화번호 목록에다가 추가하기

const phoneNumList = document.querySelector("#phonNumList")
const add = document.querySelector("#add");

add.addEventListener("click", ()=>{
    if(output.length ==0){
        alert("전화번호를 입력하세요");
        return;
    };

    const phone1 = document.createElement("div");
    phone1.classList.add("phone1");
    phoneNumList.append(phone1);

    const phone = document.createElement("div");
    phone.classList.add("phonNum");
    phone.innerText=output.innerText;
    phone1.append(phone);

    phone1.innerHTML+="<button class='star fa-regular fa-star'></button><div class='del'>&times</div>"
    //button의 아이콘 클래스에 띄어쓰기가 있어서 classList.add()가 안됨
    output.innerText="";  //output에서 안보이기
    //createElement



})

//초기화 누르면 output 번호 사라짐
const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
    output.innerText="";
});


//전화번호 목록에서 즐겨찾기를 누르면 상단에 계속 떠 있어야 함
//누르면 채워지도록 악 다시하기
/*
const destar = document.querySelector(".empty");//즐찾 해제
const star = document.querySelector(".filled")//즐찾 등록

destar.addEventListener("click",()=>{
    destar.classList.remove("hide")
    star.classList.add("hide");
});
star.addEventListener("click",()=>{
    star.classList.remove("hide");
    destar.classList.add("hide");
    star.style.color = "yellow";
    star.style.border="1px solid black";
});
*/


//전화번호 목록에서 삭제 버튼을 누르면 해당 블록 삭제됨->부모 삭제

const dellist = document.querySelectorAll(".del");

for(let i = 0; i<dellist.length;i++){
    dellist[i].addEventListener("click", (e)=>{
        e.target.parentElement.remove();
    });
}
