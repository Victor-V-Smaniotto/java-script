const caixa = document.getElementById("caixa");
const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        caixa.style.backgroundColor = botao.dataset.cor;
    });
});