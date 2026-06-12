
const senha = document.selectElementByID("senha");
const indicador = document.selectElementByID("indicador");



senha.addEventListener("input", () => {
    const texto = senha.value;

    indicador.textContent = `${texto.length} caracteres!`;

});


if(indicador < 6) {
    fundo.style.backgroundColor = "#red";
} else if (indicador >= 6 && indicador <= 9){
    fundo.style.backgroundColor = "#orange";
} else if (indicador >= 10){
    fundo.style.backgroundColor = "#green";
}

senha.addEventListener("keyDown", (e) => {
    
});