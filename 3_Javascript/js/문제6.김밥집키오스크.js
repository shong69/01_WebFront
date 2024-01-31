
const cart = document.querySelector("#cart");//cart의 display 상태값 받아오기
const emptyCart = document.querySelector("#empty-cart");

var menulist={"김밥":0,"라면":0,"튀김":0,"떡볶이":0,"돈까스":0,"우동":0};

function addToCart(menu, price) {

    /*메뉴 누르면 바로 '장바구니 비워..'문장 안보이도록*/
    if(emptyCart.style.display = "block"){
        emptyCart.style.display =  "none";
        cart.style.display = "block";
    };

    cartitem(menu,price);

};

function cartitem(menu,price){
    if(menulist[menu]==0){
        //개수 수량 1 추가
        menulist[menu]=1;

        //div class=cart-item 추가
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cart.append(cartItem);

        //메뉴 넣을 span 추가:first-child
        const menuname = document.createElement("span");
        menuname.innerText = menu;
        cartItem.append(menuname);

        
        //quantity 영역 span 추가(안에 버튼이랑 수량 넣어야함) :nth-child(2)
        const quantity = document.createElement("span");
        quantity.classList.add("quantity"); 
        quantity.style.justifyContent="center";

        cartItem.append(quantity);


        //클래스quantity의 요소 안에 있는 버튼 추가  //수량 마이너스 버튼
        const minusBtn = document.createElement("button");
        minusBtn.classList.add("button");
        minusBtn.classList.add("minus");
        minusBtn.innerHTML = "-";
        quantity.append(minusBtn);

        minusBtn.onclick = function() {minusbtn(minusBtn)};

        const menunum = document.createElement("span");
        menunum.innerText = menulist[menu];
        quantity.append(menunum);
        
        
        //클래스quantity의 요소 안에 있는 버튼 추가  //수량 플러스 버튼
        const plusBtn = document.createElement("button");
        plusBtn.classList.add("button");
        plusBtn.classList.add("plus");

        plusBtn.innerHTML="+";
        quantity.append(plusBtn);
        // 버튼 클릭했을 때 함수호출 plusBtn(버튼요소전달인자로 전달)
        //plusBtn.onclick = plusbtn(plusBtn); 함수를 바로 주게 되면 addtoCart를 호출하면서 바로 함수가 실행돼버림
        plusBtn.onclick = function() { plusbtn(plusBtn) };

        //삭제할 span추가 :last-child
        const deleteBtn = document.createElement("span"); 
        deleteBtn.classList.add("delete-button");
        deleteBtn.innerHTML=`&times;`;
        cartItem.append(deleteBtn)

        deleteBtn.onclick = function(){delbtn(deleteBtn)};
    }
};


/*버튼 기능*/
//리스트의 숫자를 얻어와서 덮어씌우는 방식으로 수량 더하기
//var menulist={"김밥":0,"라면":0,"튀김":0,"떡볶이":0,"돈까스":0,"우동":0};

function minusbtn(btn){  
    const menu = btn.parentElement.previousElementSibling.innerText;
    menulist[menu] -=1;
    if (menulist[menu] ==0){
        btn.parentElement.parentElement.remove();
    };
    btn.nextElementSibling.innerText = menulist[menu];
    checkTotal();
    checkempty();
};

function plusbtn(btn){
    const menu =  btn.parentElement.previousElementSibling.innerText;       
    menulist[menu] += 1;
    btn.previousElementSibling.innerText=menulist[menu];
    checkTotal();
    checkempty();

};



//장바구니 삭제 버튼  //x버튼을 누른 요소의 형제의 이름과 메뉴리스
function delbtn(btn){
    btn.parentElement.parentElement.remove();
    //합계 나타내기
    checkTotal();
    checkempty();
};




//if() 장바구니 안에 개수 0이면 cart랑 emptycart none,block 바꿔주기
function checkempty(){
    let zerocount = 0;
    for(let key in menulist){
        if(menulist[key]==0){
            zerocount +=1;
        };
    };
    if(zerocount == 6){
        emptyCart.style.display =  "block";
        cart.style.display = "none";
    };
};


//합계 total 구하는 함수  <div id="total">합계: ₩0</div> -> 그냥 다시 쓰기
function checkTotal(){
    let total = 0;
    for(let menu in menulist){
        if(menulist[menu]>0){
            switch(menu){
                case "김밥": total += menulist[menu]*3000;break;
                case "라면": total += menulist[menu]*4500;break;
                case "튀김": total += menulist[menu]*5000;break;
                case "떡볶이": total += menulist[menu]*6000;break;
                case "돈까스": total += menulist[menu]*7500;break;
                case "우동": total += menulist[menu]*5000;break;
                default: break;
            };
        };
    };
    const totalResult =document.querySelector("#total");
    totalResult.innerText = `합계: ￦ ${total}`;
};