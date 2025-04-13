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



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contatoForm");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const data = new FormData(form);
  
        fetch("https://hook.us2.make.com/b2hj8om1gwtbzmlsbm994kmdklh3aplr", {
          method: "POST",
          headers: {
            "Accept": "application/json"
          },
          body: data
        })
        // fetch("https://formsubmit.co/ajax/gomesborgesbiel@gmail.com", {
        //   method: "POST",
        //   headers: {
        //     "Accept": "application/json"
        //   },
        //   body: data
        // })
        .then(response => {
          if (response.ok) {
            alert("E-mail enviado com sucesso!");
            form.reset();
          } else {
            alert("Houve um erro ao enviar o e-mail.");
          }
        })
        .catch(error => {
          console.error("Erro:", error);
          alert("Erro na requisição.");
        });
      });
    }
  });
  
 