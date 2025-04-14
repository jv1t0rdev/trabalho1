let botao = document.querySelector("#botao");
botao.style.background="blue";
let estaQuebrado=false;
let contaCliques=0
botao.addEventListener("mouseover",e =>{
if(!estaQuebrado)
botao.style.background="green";
});

botao.addEventListener("mouseout",e =>{
    if(!estaQuebrado)
    botao.style.background="blue"; 

});

botao.addEventListener("click",e =>{
    contaCliques=contaCliques+1;
    if(contaCliques>=10){
    botao.style.background="red";
    botao.innerHTML="quebrei";
    estaQurebrado=true;
    }

    });