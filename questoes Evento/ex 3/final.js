const campo = document.getElementById("campo");
const contagem = document.getElementById("contagem");
const preview = document.getElementById("preview");

campo.addEventListener("input", () => {
    const texto = campo.value;

    contagem.textContent = `${texto.length} caracteres!`;
    preview.textContent = texto;
});