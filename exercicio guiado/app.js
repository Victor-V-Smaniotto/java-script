const btnTema = document.querySelector('#btn-tema');

btnTema.addEventListener('click', () => {     

    document.body.classList.toggle('dark');

    const modoEscuro = document.body.classList.contains('dark');

    btnTema.textContent = modoEscuro ? '🌞 Modo Claro' : '🌑 Modo Escuro!';
}); 

const btnToggleInfo = document.querySelector('#btn-toggle-info');
const infoCorpo = document.querySelector('#info-corpo');

btnToggleInfo.addEventListener('click', () => {
    const visivel = infoCorpo.style.display !== 'none';

    visivel ? 
    (infoCorpo.style.display = 'none', btnToggleInfo.textContent = 'Mostrar'):
    (infoCorpo.style.display = 'block', btnToggleInfo.textContent = 'Ocultar');
})