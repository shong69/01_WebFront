/*인라인 이벤트 모델 확인*/
function check1(btn){ //html에서 this 요소가 전달됐기 때문에 btn 매개변수를 넣어야 한다. (매개변수 btn==클릭한 버튼 this)
    console.log(btn);  
    /*<button onclick="check1(this)" style="background-color: yellow;">인라인 이벤트 모델 확인</button>  출력됨
    ->이벤트가 발생한 현재 요소가 반환된다!!  
    */

    //버튼의 배경색을 얻어와 저장
    const bgColor = btn.style.backgroundColor;   //btn에서 값을 뽑아낼 수 있다
    console.log(bgColor);   //yellow 출력됨


    //버튼이 클릭 될 때마다 pink와 yellow가 번갈아가며 변경되도록하기
    if(bgColor=="yellow"){
        btn.style.backgroundColor="pink";
    }else{
        btn.style.backgroundColor="yellow";
    }

}



//-----------------------------------------------

/* 고전 이벤트 모델 확인 */
//아이디가 test1-1인 요소를 얻어와 test1a라는 변수에 저장할거임
const test1a =document.querySelector("#test1-1");

/***고전 이벤트 모델 작성법
 요소.이벤트리스너 = 이벤트핸들러***/

test1a.onclick = function(){    //익명함수 형태로 만듦
    alert("고전 이벤트 모델 확인 버튼 클릭됨");
}


/*고전 이벤트 모델 제거*/
//#test1-2버튼 클릭 시 #test1-1의 onclick 이벤트 리스너의 이벤트 핸들러 제거하기

document.querySelector("#test1-2").onclick = function(){
    //기존 onclick의 이벤트 핸들러를 null값으로 덮어씌우면 이벤트를 제거할 수 있음
    document.querySelector("#test1-1").onclick = null;
    alert("이벤트 제거됨");
}

//고전 이벤트 모델 단점

//test1-3요소를 얻어와 test1c 변수에 저장할거임
const test1c=document.querySelector("#test1-3");

//#test1-3요소가 클릭 되었을 때 배경색을 red로 변경
test1c.onclick=function(){
    test1c.style.backgroundColor="red";
}

//..... 시간이 오래 지나고 test1-3이 클릭됐을 때 글자색을 white로 변경하려고함
test1c.onclick = function(){
    test1c.style.color="white";
}
//이전에 지정했던 배경색 설정이 날라갔다!!!
//onclick에 저장된 값이 덮어씌워지면서 이전 코드가 사라지는 문제가 발생함





//------------------------------
/*표준 이벤트 모델 확인*/

const test2 = document.querySelector("#test2");

/* 표준 이벤트 모델 작성법
  요소.addEventListener("이벤트 종류", 이벤트 핸들러(함수));
*/

test2.addEventListener("click",function() {
    //투명도 조절 (불투명상태 : 1 -> 투명 : 0)

    //현재 #test2의 투명도 확인
    let curr = test2.style.opacity;

    //맨 처음에는 투명도 ''로 나옴 -> 1을 대입해줘야 한다
    if(curr ==''){
        test2.style.opacity=1;
        curr = 1;
    }

    //투명도를 0.1 감소시키기
    test2.style.opacity=curr - 0.1; //현재 투명도 - 0.1하기

    if(test2.style.opacity == 0){ //완전히 투명해지면 다시 불투명해지도록 함
        test2.style.opacity= 1;
    }

});


//#test2요소를 클릭하면 클릭 횟수를 카운트할거임

let count = 0;

test2.addEventListener("click",function(){
    count++;   //카운트 1 증가

    //표준 이벤트 모델의 핸들러 안에서 this == 이벤트가 발생한 요소
    this.innerText = count; //this가 test2를 의미한다고... (test2.innerText로 써도 똑같음)

});



/*입력한 색상으로 배경색 변경하기*/


const pallete = document.querySelector("#box3")  //box3

//입력한 색상 저장할 변수
//색상 변수를 변수 pallete에 적용한다


const input3 = document.querySelector("#input3");

input3.addEventListener("keyup", function(e){
    const color = input3.color;

    //e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
    //e.key : 입력된 키 (엔터를 치면 key에 엔터가 입력됨)

    if(e.key == "Enter"){
        box3.style.backgroundColor=input3.value;
    }
});


