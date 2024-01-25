/* 매개변수와 전달인자 */

const input1 = document.querySelector("#input3");
const btn1 = document.querySelector("#btn1");

//함수 정의 : 2개의 값을 전달받아 출력하는 함수
function print1(num, str){//함수 선언
    //함수 정의
    console.log(`${num}은/는 ${str}입니다`);
}

/*#btn1 클릭 시 #input1의 값을 읽어와 print1() 함수 호출 */
btn1.addEventListener("click", function(){

    const value = input1.value;

    if(!typeof number || value.trim().length==0){
        console("숫자를 입력해주세요: ");
        return;  //함수 종료+호출한 곳으로 돌아감
    }
    let result;

    if(Number(value)==0)     result="0";
    else if(Number(value)>0) result="양수";
    else                     result="음수";

    /*함수 호출 (값 전달)*/
    /*중요!! 전달되는 값의 순서가 중요함 */
    print1(value, result);
})



/* 매개변수로 배열 전달하기 */


function arrayTest(arr){
    //전달받은 배열의 모든 요소를 출력하기
    for(let i=0; i<arr.length;i++){

        if(arr[i] == '멜론')arr[i]="딸기";
        console.log(`${i}번 인덱스 값: `,arr[i]);
    }
}


//#btn2a 클릭 됐을 때 arrayTest() 함수 호출하기

document.querySelector("#btn2a").addEventListener("click", function(){
    const arr1 = [10,20,30];
    const arr2 = ["사과","바나나","멜론"];


    arrayTest(arr1);
    arrayTest(arr2);

    console.log("arr2[2] : ", arr2[2]); //딸기가 출력됨
    //왜 멜론이 아니라 딸기가 출력될까? 
    //-> arrayTest(arr2) 호출 시 arr2 배열을 통째로 복사해서 전달하는게 아니라 arr2에 저장된 주소만 보내서 함수를 수행함
    //=>arrayTest()함수에서 arr2와 같은 배열을 '참조'해서 수정했다는 의미
    //->함수 수행 후 돌아와서도 참조하고 있던 배열의 2번 인덱스 값이 변화되어 있는 것임




    /*
    참조란?
    -객체 지향 언어에서 배열, 객체 등 object는 값을 여러개 가지고 있는 자료형임.
    변수는 값을 1개만 저장할 수 있기 때문에 object를 메모리가 다른 곳에 저장하고 그 주소를 변수에 저장하여
    필요할 때마다 해당 주소를 찾아가 원하는 값을 얻어오거나 수정할 수 있도록 함 (참조==주소를 찾아가는 것)
    */

})


/* 매개변수로 요소 전달하기 */

function btn2Fn(el){
    //매개변수 el : 이벤트가 발생한 요소
    el.style.backgroundColor="yellow";

}


/*매개변수로 함수 전달하기 */

function print2(fn){
    console.log(`a + b = ${fn(3,4)}`);
}


document.querySelector("#btn2c").addEventListener("click", function(){
    //함수도 변수에 저장 가능함 변수명 == 함수명이 됨
    const sumFn = function(a,b){
        return a + b; //함수를 끝내고 호출한 곳으로 되돌아감
                      //값(a+b)를 가지고 돌아감
    }
    //전달인자로 함수 전달
    print2(sumFn);
});


/*return  확인하기 */

//전달받은 수를 x 제곱하여 반환하는 함수
function pow(num,x){
    let result = 1;  //0이 아니라 1로 초기화해야 곱했을 때 결과에 영향을 주지 않음

    for(let i = 0; i<x;i++){
        result *=num;
    }
    return result;
}

//전달받은 배열의 합을 구해 반환하는 함수
function sumFn(arr){
    let result = 0;
    for(let i =0; i<arr.length; i++){
        result += arr[i];
    }
    return result;
}

document.querySelector("#btn3a").addEventListener("click",function(){
    //비어있는 배열에  push를 이용해 값을 넣을것임 그리고 합계까지 구하기

    const numbers=[]; //빈 배열

    //배열.push(값) : 배열의 마지막 요소로 갑을 추가함
    numbers.push(30);
    numbers.push(50);
    numbers.push(4);
    numbers.push(pow(2,5));  //==numbers.push(32)

    //console.log(numbers); 


    console.log("합계 : ",sumFn(numbers));

})
















