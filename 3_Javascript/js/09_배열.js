//배열 선언 및 기초 사용법
function check1(){

    //배열 선언 방법
    const arr1= new Array();
    const arr2= new Array(3); //3칸배열 생성
    const arr3= [];
    const arr4= ["사과","바나나","딸기"];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    //배열명.length : 배열의 요소가 몇 개(배열 칸 수/ 저장된 데이터 수)가 들어있는지 길이를 알려준다.
    console.log(arr1.length);
    console.log(arr2.length);
    console.log(arr3.length);
    console.log(arr4.length);

    //배열의 index
    /*
    * - 배열의 각 칸을 구분하는 번호
    * - 0부터 시작됨
    * - 중간에 번호를 생략할 수 없음(항상 연속적)
    * - 마지막 index == 배열길이 -1
    */

    //배열명[indexnum] ->배열의 해당 index에 존재하는 데이터를 반환해줌
    console.log("arr4[2]: ",arr4[2]);

    //배열명[indexnum] = 값; ->해당 index에 지정된 값을 대입함
    arr2[0]=100;
    arr2[1]="점심먹고싶..";
    arr2[2]=true;

    
    console.log("arr2", arr2);
    //js배열의 특징 : index별로 자료형을 다르게 할 수 있다.

    //길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능
    arr1[0]="가";
    arr1[1]="나";
    arr1[13]="라"; //원하는 index에 값을 마음대로 추가할 수 있다

    console.log("arr1 : ", arr1);
    console.log("arr-none-element : ", typeof arr1[4]); //중간에 건너뛴 index는 빈칸으로 채워짐(type : undefined)
}


/***배열과 for문1***/
function check2(){
    //for문을 이용해서 배열 요소 초기화 하기(초기화:변수나 배열 요소에 처음으로 값을 대입하는 것)

    //index : 배열의 각 칸을 구분하는 번호
    //배열 요소 == 배열의 각 칸
    
    /*for문 사용 안 했을 때 배열 초기화 방법
    const arr1 =[];
    arr1[0] = 0;
    arr1[1] = 10;
    arr1[2] = 20;
    arr1[3] = 30;

    console.log(arr1); //(4) [0, 10, 20, 30] 출력됨
    */

    //for문 사용해서 배열 초기화
    const arr2=[];
    for(let i = 0; i <=3; i++){
        arr2[i] = i*10;
    }

    console.log("arr2: ", arr2);  //(4) [0, 10, 20, 30] 출력됨

}


//배열과 for문2
function check3(){
    //배열에 저장된 값 하나씩 순서대로 출력하기
    //->for문을 이용해서 배열의 모든 요소에 접근하기

    const arr = [10,20,50,100,400,1000];

    for(let i = 0; i <= arr.length-1; i++){
        console.log(`arr[${i}]==${arr[i]}`);
    }
}

//배열과 for문3

function check4(){

    //for문을 이용하여 배열을 순서대로 초기화 한 후 다른 for문을 이요해 배열 요소를 하나씩 모두 출력할 거임

    const arr = new Array(5); //5칸 짜리 배열 선언

    //1. 배열을 순서대로 초기화 하기
    for(let i = 0; i<arr.length; i++){
        arr[i] = Number(prompt(`${i}번째 숫자 입력`));
    }

    //2. 배열 요소를 하나씩 모두 출력하기 + 합계 출력
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        console.log(`arr[${i}] : ${arr[i]}`);
        sum += arr[i];
    }
    console.log("sum : ", sum);
}



/******저녁 메뉴 뽑기******/

function selectMenu(){

    //결과 출력 span
    const menuResult = document.getElementById("menuResult");

    //저녁 메뉴로 초기화 된 배열 생성
    const menu = ["제육볶음", "돈까스", "파스타", 
                    "순대국", "닭갈비", "초밥",
                    "가지덮밥", "샐러드","백반",
                    "알탕", "삼겹살"]; //총 11개


    //menu 배열 index 범위 내에서 난수를 생성
    const randomNum=Math.floor(Math.random()*menu.length);

    //난수번째 index 요소값을 화면에 출력
    menuResult.innerText = menu[randomNum];

}


/*****************2차원 배열********************/

function check5(){
    const arr = [[1,2,3,4], 
                [5,6,7,8], 
                [9,10,11,12]];
    console.log(arr[1][3]); //8
    console.log(arr[2][2]); //11
    //배열명[행][열]



    const arr1 = [100,200,300,400];
    const arr2 = [700,900,200,600];
    arr[3] = arr1;
    arr[4] = arr2;
    console.log(arr[4][3]); //600이 나오도록 수정하기

}

//2부터 2씩 증가하는 수를 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기
/*
 *[2, 4, 6, 8, 10]
  [12, 14, 16, 18, 20]
  [22, 24, 26, 28, 30]
  [32, 34, 36, 38, 40]
  [42, 44, 46, 48, 50] 
 */
function check6(){
    let count = 2;
    const arr = Array();

    for(let i = 0; i <5; i++){
        let lst = [];
        for(let j = 0; j <5; j++){
            lst[j] = count;
            count +=2;

        }
        arr[i]=lst;
    }
    console.log(arr);

    /*선생님 코드
    let count = 2;
    const arr = [];

    for(let row = 0; row <5; row++){
        arr[row]=[];

        for(let col=0; col<5; col++){
            arr[row][col]=count;
            count += 2;
        }
    }
    console.log(arr);

     */
}









