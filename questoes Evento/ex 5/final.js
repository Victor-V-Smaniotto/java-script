const caixa = document.querySelector("#caixa");
const textoOriginal = caixa.textContent

caixa.addEventListener("mouseover", ()=>{
    caixa.style.backgroundColor = "blue";
    caixa.textContent = "mouse dentro";
})

caixa.addEventListener("mouseout", ()=>{
    caixa.style.backgroundColor = "gray";
    caixa.textContent = textoOriginal;
});