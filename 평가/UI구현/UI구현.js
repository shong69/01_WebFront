const submit = document.querySelector("#submit-btn");
const container = document.querySelector("#container");


submit.addEventListener("click",()=>{

    const wid = document.getElementById("wid");
    const hei = document.getElementById("hei");
    const fontSize = document.getElementById("siz");
    const weight = document.getElementsByName("wei");
    const fontColor = document.getElementById("f-color");
    const backColor = document.getElementById("b-color");
    const horizon = document.getElementsByName("horizon");
    const vertical = document.getElementsByName("vertical");
    const textLine = document.getElementById("text-line");
    //라디오버튼은 for문 돌려서 checked:true인지 확인하기


    //container에 요소 만들어서 더하기
    const output = document.createElement("div");
    output.classList="output";
    
    output.style.width=`${Number(wid.value)}px`;
    output.style.height=`${Number(hei.value)}px`;
    output.style.fontSize=`${Number(fontSize.value)}px`;
    output.style.color=fontColor.value; 
    output.style.backgroundColor=backColor.value;
    output.innerText=textLine.value;

    console.log(fontColor.value);
    
    

    for(let i=0; i<weight.length; i++){
        if(weight[i].checked==true)
        {output.style.fontWeight=weight[i].id;};
        };

    for(let i=0; i < horizon.length; i++){
        if(horizon[i].checked==true){
            output.style.textAlign= horizon[i].id;
        }
    }
    for(let i=0; i < vertical.length; i++){
        if(vertical[i].checked==true){
            output.style.lineHeight=`${Number(hei.value)*i}px`;
        }
    }
    //글자크기, 굵기 가로세로 정렬
    container.append(output);
});
