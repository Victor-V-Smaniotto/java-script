
const senha = document.getElementById("senha");
const indicador = document.getElementById("indicador");

senha.addEventListener("input", () => {
    const texto = senha.value;
    const tamanho = texto.length;

    if(tamanho < 6) {
        senha.style.color = "red";
    } else if (tamanho >= 6 && tamanho <= 9){
        senha.style.color = "orange";
    } else if (tamanho >= 10){
        senha.style.color = "green";
    }

});

