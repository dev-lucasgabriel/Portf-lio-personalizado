// menu.js

let Abrirmenu = document.getElementById('menu-abrir');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let fecharMenu = document.getElementById('menu-fechar');

// Abre o menu
Abrirmenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

// Fecha o menu ao clicar no botão "X"
fecharMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Fecha o menu ao clicar no fundo escuro
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});
