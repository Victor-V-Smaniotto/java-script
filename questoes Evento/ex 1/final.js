const mensagem = document.getElementById("mensagem");
const btn = document.getElementById("btn");

let clicado = false;

btn.addEventListener("click", () => {
    if(!clicado){
        mensagem.textContent = "Botão clicado!";
        clicado = true;
    }
    else{
        mensagem.textContent = "Clique novamente!";
        clicado = false;
    }
});