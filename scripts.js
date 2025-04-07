let Abrirmenu = document.getElementById('menu-abrir');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let fecharMenu = document.querySelector('.menu-fechar'); // Seleciona o ícone de fechar

// Abre o menu ao clicar no ícone de menu
Abrirmenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block'; // Exibe a sobreposição
});

// Fecha o menu ao clicar no ícone de fechar
fecharMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Esconde a sobreposição
});

// Fecha o menu quando o usuário clica na sobreposição
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Esconde a sobreposição
});
