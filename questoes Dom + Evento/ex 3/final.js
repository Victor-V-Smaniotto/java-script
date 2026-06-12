const taxas = { USD: 0.20, EUR: 0.18, GBP: 0.15 };
const valor = document.querySelector("#valor");
const btn = document.querySelector("#btn-converter");
const moeda = document.querySelector("#moeda");
let resultado = document.querySelector("#resultado");

btn.addEventListener("click", ()=>{

    if(moeda.value === "USD"){
        resultado.textContent = (valor.value * taxas.USD).toFixed(2);
        resultado.textContent;
    }else if(moeda.value === "EUR"){
        resultado.textContent = (valor.value * taxas.EUR).toFixed(2);
        resultado.textContent;
    }else if(moeda.value === "GBP"){
        resultado.textContent = (valor.value * taxas.GBP).toFixed(2);
        resultado.textContent;
    }

    resultado.textContent
});

