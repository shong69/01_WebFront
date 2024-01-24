/**********분기문***********/
//break 확인
function check1(){
    //1~10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i = 1; i <= 10; i++){
        console.log(i);

        if(i==5)break;
    }
}

//무한 반복하는 while문 멈추기
function check2(){

    let i = 1;
    while(true){
        console.log(i++);
        if(i > 10) break;
    }
}

//continue 확인하기
function check3(){
    //1~20까지 출력. 단 3의 배수는 건너뛰기
    for(let i = 1; i <=20; i++){
        
        if(i%3==0) continue;

        //3의 배수인 경우 아래 코드는 수행하지 않는다.
        console.log(i);
         
    }
}

//1~30까지 1씩 증가하며 출력/ 홀수와 10의 배수는 건너뛰기
function check4(){
    
    for(let i = 1; i<=30; i++){
        if(i%2==1 || i%10==0) continue;
        console.log(i);
    }
}

//0~9까지 5줄 출력
//-각 줄에서 4의 배수는 건너뛰기
//3번째 줄 출력 후 멈추기
function check5(){

    for(let i=1; i<=5;i++){
        if(i>=4) break;

        let str="";

        for(let j=0; j<=9; j++){
            //0을 제외한 4의 배수인 경우
            if(j !=0 && j % 4 == 0) continue;
            str +=j;
        }//변수 j는 for문 안에서만 인식 가능함. for문 밖에서 j는 뭔지 알 수 없다.
        console.log(str);

        //if(i == 3) break;도 가능
    }
}



//up/down 게임
function startGame(){
    const answer = Math.floor(Math.random()*101);
    
    console.log(answer);

    let cnt = 1;
    while(true){

        let num = prompt("1~100 사이 숫자를 입력해주세요");

        if(num == null) break;

        if(num == answer) {
            alert(`정답입니다! ${cnt}회 만에 맞추셨습니다`);
            break;
        }else if(num > answer){
            alert("Down 하세요");
        }else if(num < answer){
            alert("Up 하세요");
        }

        cnt++;
    }
}