const numlist = document.querySelectorAll(".number");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");

/*선생님 코드
for (let number of numlist){
    
    number.addEventListener("click",(e)=>{
        if(result.innerText.length<10){
            result.innerText += e.target.innerText;
        }else{
            alert("10자까지만 입력할 수 있습니다.");
        }
    });
};

reset.addEventListener("click",()=>{
    result.innerText="";
});
*/

for(let i = 0;i<numlist.length;i++){
    numlist[i].addEventListener("click",()=>{
        if(result.innerText.length < 10){
            result.innerText += numlist[i].innerText;
        }else{
            alert("10자까지만 입력할 수 있습니다.");
        };
    });
}
reset.addEventListener("click",()=>{
    result.innerText="";
});
