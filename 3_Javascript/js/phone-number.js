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

    const star=document.createElement("div");
    star.classList.add("star");
    phone1.append(star);
    
    const icon = document.createElement("div");
    icon.classList.add("fa-regular");
    icon.classList.add("fa-star");
    icon.classList.add("empty");
    star.append(icon);
    icon.onclick = function(){emstar(icon)};

    const icon2=document.createElement("div");
    icon2.classList.add("fa-solid");
    icon2.classList.add("fa-star");
    star.append(icon2);
    icon2.onclick = function(){fullstar(icon2)};

    
    

    const delbtn = document.createElement("div");
    delbtn.classList.add("del");
    delbtn.innerHTML="&times;";
    phone1.append(delbtn);

    delbtn.onclick = function(){delBtn(delbtn)};

    output.innerText="";  //output에서 안보이기
    //createElement



})

//초기화 누르면 output 번호 사라짐
const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
    output.innerText="";
});


//즐겨찾기 누르면 채워짐

function emstar(btn){
    if (btn.classList.contains("empty")){
        btn.classList.remove("empty");
        btn.nextElementSibling.classList.add("empty");
    }else{return;};
};
function fullstar(btn){
    if(btn.classList.contains("empty")){
        btn.classList.remove("empty");
        btn.previousElementSibling.classList.add("empty");
    };
};

//empty 클래스는 옮겨지는데 정작 display none이 적용되지 않음



//전화번호 목록에서 삭제 버튼을 누르면 해당 블록 삭제됨->부모 삭제

function delBtn(btn){
    btn.parentElement.remove();
};
