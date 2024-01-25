//상자 안에서 방향키를 누르면 요소가 그 방향대로 움직인다 addEventListener("keydown")
//키를 누르면 폭탄 이미지가 그 자리에 생긴다 addEventListener("keyup")

//플레이어가 이동할 수 있는 거리 270, 270(전체 길이 - 플레이어 사이즈)

//x축 카운트, y축 카운트를 만들어서 +,- 하기 (첫 위치는 0,270) ->해당하는 축에 이미지 위치하도록 조정?
const player = document.querySelector("#man");

const move = 10;  /// 이동

let xsize = 0;   //x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let ysize = 0;   //y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

//e : 이벤트에 대한 정보를 다 담고 있음
document.addEventListener("keydown",function(e){ //누른 상태일 때 이동

    if(e.key == 37){ 
         //왼  이동하는 만큼 x축에 -
        if(xsize >=0){
            xsize -= move;
            player.style.left=`${xsize}`px;
        }
    }else if(e.key ==38){ 
         //위 이동하는 만큼 y축에 +   (올라가는게 -, 내려가는게 +임)
        if(ysize <= 0){
            ysize += move;
            player.style.top = `${ysize}`px;
        }
    }else if(e.key ==39){  
        //오 이동하는 만큼 x 축에 +
        if(xsize <= 270){
            xsize += move;
            player.style.left =`${xsize}`px;
        }
    }else if(e.key == 40){ 
         //아 이동하는 만큼 y축에 -
        if(ysize >=-270){
            ysize -= move;
            player.style.top= `${ysize}`px;
        }
    }  
    /*선생님 코드
    switch(e.key){
        case 'ArrowRight': xsize +=10;break
        case "ArrowLeft": xsize -= 10;break
        case "ArrowUp": ysize -= 10; break
        case "Arrowdown":ysize += 10; break

        case'x':   //x 버튼 누르면 플레이어 위치에 폭탄 이미지 넣기
        const box = document.getElementById("box");
        box.innerHTML += 
        `<img src="../../img/bomb.png"
        style="transform:translate3d(translate3d(${xsize}px, ${ysize}px,0); position: absolute;">`;
        break;
        default:
            alert("방향키와 x만 가능"): break;

    }

    player.style.transform = `translate3d(${xsize}px, ${ysize}px,0)`;


    */
})
