
const perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        pergunta.classList.toggle("ativa");
    });
});

const menu = document.querySelector(".menu");
const botao = document.querySelector(".menu-mobile");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });
});
