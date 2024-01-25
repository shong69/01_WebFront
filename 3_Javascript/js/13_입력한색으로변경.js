const boxList = document.querySelectorAll(".box"); //배열 길이 5
const inputList = document.querySelectorAll(".color-input"); //배열 길이 5

document.querySelector("#changeButton").addEventListener("click", function(){

    for(let i = 0; i < boxList.length; i++){
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});

