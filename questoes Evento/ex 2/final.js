const btnMais = document.querySelector("#btn-inc");
const btnMenos = document.querySelector("#btn-dec");
let valor = document.querySelector("#valor");

btnMais.addEventListener("click", ()=>{
    valor.textContent = Number(valor.textContent) + 1;
})

btnMenos.addEventListener("click", ()=>{
    if(valor.textContent === 0){
        btnMenos.disabled = true;
    } else if (valor.textContent >0){
        btnMenos.disabled = false;
        valor.textContent = Number(valor.textContent) - 1;
    }

})