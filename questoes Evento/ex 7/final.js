const form = document.querySelector("#form");
const email = document.querySelector("#email");
const feedback = document.querySelector("#feedback");


form.addEventListener("submit", (e)=>{

    e.preventDefault();

    const emailV = email.value.trim();

    if (!emailV.includes('@')) {
        feedback.style.color = 'red';
        feedback.textContent = "E-mail inválido!";
    } else {
        feedback.style.color = "green";
        feedback.textContent = "Formulário enviado com sucesso!";
    }

    
});

