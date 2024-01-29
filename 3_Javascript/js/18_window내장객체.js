//window.setTimeout()
//setTimeout 버튼 누르고 3초 뒤 alert창 뜨도록

const btn = document.querySelector("#btn1");
btn.addEventListener("click",()=>{
    //window는 창 자체라서 생략해도 상관없다.
    setTimeout(function(){   //익명함수로 함수전달인자를 씀
        alert("3초 후 출력!");
    },3000)  //ms단위이기때문에 3000==3초임
});




//window.setInterval()
//디지털 시계 만들기

//setInterval을 저장하기 위한 전역 변수 만들기
let interval;

//현재 시간을 문자열로 반환하는 함수 만들기
function currentTime(){

    const now = new Date();  //현재 시간을 반환해주는 객체


    let hour = now.getHours(); //시(時)를 알려주는 메서드

    let min = now.getMinutes(); //분을 알려주는 메서드

    let sec = now.getSeconds();//초를 알려주는 메서드

    //수가 한자리수로만 나올 때 06 처럼 앞에 0을 붙여주도록 해야 한다.
    if(hour<10)hour = "0"+hour;
    if(min<10)min = "0"+min;
    if(sec<10)sec = "0"+sec;

    return hour + " : "+min + " : " + sec;

}

function clockFn(){
    const clock=document.getElementById("clock");
    
    interval = setInterval(function() {  ///1초마다 clock에 있는 텍스트에 currentTime의 반환값을 대입해라
        clock.innerText = currentTime();
    },1000);
};

clockFn();


//window.clearInterval(전달인자:setInterval이 저장된 변수)
document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(interval); //삭제하고자 하는 변수를 전달함
});










