const btnToggle = document.getElementById("btn-toggle");
const painel = document.getElementById("painel");

let aberto = false;

btnToggle.addEventListener("click", () => {

    aberto = !aberto;

    painel.style.display = aberto ? "block" : "none";
    btnToggle.textContent = aberto ? "Ocultar Detalhes" : "Mostrar Detalhes"

});