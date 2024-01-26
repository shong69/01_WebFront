/*node 확인하기*/

document.querySelector("#btn1").addEventListener("click",()=>{

    const test = document.querySelector("#test"); //ul

    //#test의 모든 자식 노드를 얻어오기
    //요소.childNodes - >요소의 자식들이 배열로 넘어옴
    const list = test.childNodes;
    console.log(list); // data 항목에서 어떤 요소인지 알 수 있음

    //자식 노드 중 첫번째 li 요소
    const li1 = list[3];
    console.log(li1);

    //1. 부모 노드 찾기 (요소.parentNode)
    //->li1 부모 노드 배경색 변경하기
    li1.parentNode.style.backgroundColor = "pink";

    //2. 첫 번째 자식 노드 찾기 (요소.firstChild)
    //->#test(ul)의 첫 번째 자식 노드 찾기
    console.log(test.firstChild); //#test 출력됨(개행문자, 공백인 부분)

    //3. 마지막 자식 노드 찾기(요소.lastChild)
    //->#test(ul)의 마지막 자식 노드 찾기
    console.log(test.lastChild); //#text 출력됨.(개행문자와 공백)

    //4. 원하는 위치(index)에 존재하는 자식노드 찾기
    //(요소.childNodes[indexnum])
    //-> #test의 자식 노드 중 3번째 li태그를 찾아서 배경색으로 skkyblue 지정하기
        test.childNodes[9].style.backgroundColor="skyblue";

    //5. 이전/다음 형제 노드 찾기
    //(이전 형제 노드 : 요소.previousSibling)
    //(다음 형제 노드 : 요소.nextSibling)

    //->탐색용 코드는 연달아서 작성 가능하다
    //test.childNodes[9]의 다음다음 형제 노드 선택하기==test.childNodes[11]
    console.log(test.childNodes[9].nextSibling.nextSibling);
    //#test의 마지막 자식 노드의 이전 형제 노드 선택하기
    console.log(test.lastChild.previousSibling);


    //노드 추가하기
    //1.마지막 자식 노드로 추가하기(appendChild(node))
    
    //->list[11]의 마지막 자식으로 "zzz"라는 textnode 추가하기
    list[11].appendChild(document.createTextNode("zzz"));

    //2.마지막 자식으로 추가하기(append("내용" 또는 노드 또는 요소*n))
    list[11].append("12345", "abcd", "가나다라");

    //3.첫 번째 자식으로 추가하기(prepend("내용" 또는 노드 또는 요소*n))
    list[11].prepend("오늘","점심","뭐먹지?");

    //4. 이전/다음 형제로 추가하기(before/after("내용" 또는 노드 또는 요소*n))
    //#test 전/후에 내용 추가
    test.before("이전 입니다");
    test.after("이후 입니다");

});

/*node와 element의 차이 */
/**
 *         children : 자식 요소만 모두 선택
        parentElement : 부모 요소 선택


        firstElementChild : 첫 번째 자식 요소 선택
        lastElementChild  : 마지막 자식 요소 선택


        previousElementSibling : 이전 형제 요소 선택
        nextElementSibling     : 다음 형제 요소 선택
 */

const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", ()=>{
    //test2 얻어오기(ul)
    const test2 = document.querySelector("#test2");

    //test2의 모든 자식 요소(children) 얻어오기
    console.log(test2.children);  //HTMLCollection(4) [li, li.cls, li, li]출력됨. html로 이뤄진 유사배열을 의미

    //test2의 첫번째 자식 요소 확인하기
    console.log(test2.firstElementChild); //1번이라 쓰인 li태그 확인

    //test2의 마지막 자식 요소 확인하기
    console.log(test2.lastElementChild); //4번이라 쓰인 li태그 확인

    //test2의 부모 요소 확인
    console.log(test2.parentElement);  //body 태그

    //test2의 이전 형제 요소 
    console.log(test2.previousElementSibling); //<pre>태그 요소 확인

    //test2의 다음 형제 요소
    console.log(test2.nextElementSibling); //<button>태그 요소 확인
});

