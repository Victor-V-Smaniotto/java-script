const campo = document.getElementById("campo");
const lista = document.getElementById("lista");

campo.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        const texto = campo.value.trim();

        if(texto !== ""){
            const li = document.createElement("li");
            li.textContent = texto;

            lista.appendChild(li);
            campo.value = "";

        }
    }
});