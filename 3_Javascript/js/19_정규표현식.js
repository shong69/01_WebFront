//정규표현식 객체 생성 + 확인하기
document.getElementById("btn1").addEventListener("click",()=>{
    //정규표현식 객체 생성 방법1
    const regExp1 = new RegExp("script");  //->문자열 "script"와 일치하는 문자열이 있는지 검사하는 정규표현식

    //정규표현식 객체 생성 방법2
    const regExp2 = /java/;  // "java" 와 일치하는 문자열이 있는지 검사하는 정규표현식

    //확인하기

    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
    const str2 = "jsp(java server page)도 나중에 할 겁니다.";
    const str3 = "java, java, java";

    console.log("regExp1.test(str1) : ", regExp1.test(str1));
    console.log(regExp1.exec(str1));
    console.log("regExp2.test(str2) : ", regExp2.test(str2));
    console.log(regExp2.exec(str2));

});


//메타문자 확인하기
document.getElementById("btn2").addEventListener("click", ()=>{
    const div1=document.getElementById("div1");


    //a (일반문자열) :문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;

    div1.innerHTML += "/a/, apple : " + regExp1.test("appple") +"<hr>"; //true
    div1.innerHTML += "/a/, price : " + regExp1.test("price") +"<hr>";  //false

    //[abcd] : 문자열 내에 a, b, c, d 중에 하나라도 일치하는 문자가 있는지 검색
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple : " + regExp2.test("apple") +"<hr>"; //true
    div1.innerHTML += "/[abcd]/, ssbss : " + regExp2.test("ssbss") +"<hr>"; //true
    div1.innerHTML += "/[abcd]/, qwerty : " + regExp2.test("qwerty") +"<hr>"; //false

    //^(캐럿) : 문자열의 시작을 의미함
    const regExp3 = /^group/;  //문자열의 시작이 group인지를 따짐
    div1.innerHTML += "/^group/, group100 : " + regExp3.test("group100") +"<hr>"; //true
    div1.innerHTML += "/^group/, 100group : " + regExp3.test("100group") +"<hr>"; //false

    //$(달러) : 문자열의 끝을 의미함
    const regExp4 = /group$/;  //문자열의 끝이 group인지 확인
    div1.innerHTML += "/group$/, group100 : " + regExp4.test("group100") +"<hr>"; //false
    div1.innerHTML += "/group$/, 100group : " + regExp4.test("100group") +"<hr>"; //true


});


//이름 유효성 검사하기
document.getElementById("inputName").addEventListener("keyup",(e)=>{ 
    //이벤트 핸들러 내 일반 function에서 this는 이벤트가 일어난 객체지만
    //화살표 함수에서 this는 상위(부모)의 스코프 값이 상속된다.(화살표 함수에서는 this를 사용할 수 없음 )
    
    console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …} 출력됨
    
    
    
    //결과 출력용 span 얻어오기
    const span = document.getElementById("inputNameResult");

    //정규표현식 객체 만들기 (한글2~5글자)
    const regExp = /^[ㄱ-힣]{2,5}$/;  //시작과 끝이 모두 한글로 이루어지고, 2글자에서 5글자 사이
    
    //빈칸인지 검사
    if(e.target.value.length==0){  //this : 현재 이벤트가 일어나고 있는 요소==input요소
        span.innerText="";
        return
    };

    //유효성 검사
    if(regExp.test(e.target.value) ){
        //유효한 경우
        span.innerText = "유효한 이름 형식입니다.";
        span.style.color = "green";
        span.style.fontWeight="bold";
    }else{
        //유효하지 못한 경우
        span.innerText="이름 형식이 유효하지 않습니다.";
        span.style.color = "red";
        span.style.fontWeight="bold";
    };

});

//주민등록번호 유효성 검사하기


document.getElementById("inputPno").addEventListener("keyup",function(){
    const span = document.getElementById('inputPnoResult');
    if(this.value.length == 0){
        span.innerText="주민등록번호를 작성해주세요.";
        
        span.classList.remove("confirm");
        span.classList.remove("error");
        return;
    };
    

    //생년월일(6자)-고유번호(7)
    const regExp = /^\d{6}\-\d{7}$/; //대쉬를 넣기 위해서 슬래쉬를 닫는 백슬래쉬를 넣어야 한다

    if(regExp.test(this.value)){
        span.innerText="유효한 주민등록 번호 형식입니다.";
        span.classList.remove("error");
        span.classList.add("confirm");
    }else{
        span.innerText="유효하지 않습니다.";
        span.classList.remove("confirm");
        span.classList.add("error");
    };

});



//회원가입 유효성 검사
/*
아이디 : 값이 변했을 때
영어 소문자로 시작하고 영어 대/소문자, 숫자, - , _ 로만 이루어진 6~14글자 사이 문자열인지 검사
형식이 일치할 경우 입력창의 배경색을 springgreen으로 변경
*/

document.getElementById("idCheck").addEventListener("change",function(){
    const idregExp=/^[a-z]{1}[a-zA-Z0-9-_]{5,14}$/;
    
    if (idregExp.test(this.value)){
        this.style.backgroundColor = "springgreen";
    }else{
        alert("아이디 양식이 틀렸습니다.");
    };
}); 


/*
비밀번호, 비밀번호 확인 : 키보드가 올라올 때
"비밀번호" 를 미입력한 상태에서 "비밀번호 확인"을 작성할 경우 "비밀번호 확인"에 작성된 내용을 모두 삭제하고 '비밀번호를 입력해주세요' 경고창 출력 후 focus 를 "비밀번호" 입력창으로 이동
비밀번호가 일치할 경우 : "비밀번호" 입력창 오른쪽에 "비밀번호 일치" 글자를 초록색으로 출력.
비밀번호가 일치하지 않을 경우 : "비밀번호" 입력창 오른쪽에 "비밀번호가 불일치" 글자를 빨간색으로 출력.
*/
const pwCheck = document.getElementById("pwCheck");
document.getElementById("pwCheck2").addEventListener("keyup", (e)=>{
    const pwResult = document.getElementById("pwResult");

    if (pwCheck.value.length==0){
        e.target.value="";
        span.innerText="";
        return
    };

    if(pwCheck.value == e.target.value){
        pwResult.innerText="비밀번호 일치";
        pwResult.style.color ="green";
    }else{
        pwResult.innerText="비밀번호가 불일치"
        pwResult.style.color ="red";
    }
});


/*
이름 : 값이 변화했을 때
한글 2~5 글자 사이 문자열인지 검사.
이름 정규표현식 : /^[가-힣]{2,5}$/ 형식이 일치할 경우 : "이름" 입력창 오른쪽에 "정상입력" 글자를 초록색으로 출력.
형식이 일치하지 않을경우 : "이름" 입력창 오른쪽에 "한글만 입력하세요" 글자를 빨간색으로 출력.
*/

const nameCheck = document.querySelector("#nameCheck")
nameCheck.addEventListener("change",(e)=>{
    const nameResult = document.querySelector("#nameResult");
    const nameregExp=/^[가-힣]{2,5}$/;

    if(nameregExp.test(e.target.value)){
        nameResult.innerText = "정상입력"
        nameResult.style.color = "green";
    }else{
        nameResult.innerText = "한글만 입력하세요"
        nameResult.style.color = "red";
    }
});

/*
회원가입 버튼 클릭 시 : validate() 함수를 호출하여 성별이 선택 되었는지, 
전화번호가 형식에 알맞게 작성되었는지 검사

- 성별이 선택되지 않은 경우
    "성별을 선택해주세요." 경고창(==대화상자) 출력 후
    submit 기본 이벤트를 제거하여 회원가입이 진행되지 않게 함.

전화번호 정규 표현식 : /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/
    - 전화번호 형식이 올바르지 않을 경우
    "전화번호의 형식이 올바르지 않습니다" 경고창(==대화상자) 출력 후
    submit 기본 이벤트를 제거하여 회원가입이 진행되지 않게 함. 

*/

//성별, 전화번호을 확인하는 validate함수

const submit =document.querySelector("#form");
 submit.addEventListener("submit",function(event){
    if(validate()==false){
        //submit 기본 이벤트를 제거하여 회원가입이 진행되지 않게 함. 
        event.preventDefault(); 
    };
 });




function validate() {
    //성별 선택
    const genderli = document.getElementsByName("gender");

    const phonNum = document.getElementById("phonenumber");
    const phonregExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(genderli[0].checked == false && genderli[1].checked==false){
        alert("성별을 선택해주세요");
        return false;
    }else if(phonregExp.test(phonNum.value)==false){
        alert("전화번호의 형식이 올바르지 않습니다.");
        return false;
    }else{
        return true;
    };    
};
