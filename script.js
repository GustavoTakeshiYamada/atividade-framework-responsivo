// ==============================
// MENU RESPONSIVO
// ==============================

const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

menuBotao.addEventListener("click", function() {

    menuBotao.classList.toggle("is-active");
    menu.classList.toggle("is-active");

});


// ==============================
// MODAL
// ==============================

const abrirModal = document.getElementById("abrirModal");
const meuModal = document.getElementById("meuModal");
const fecharModal = meuModal.querySelector(".modal-close");
const fundoModal = meuModal.querySelector(".modal-background");


abrirModal.addEventListener("click", function() {

    meuModal.classList.add("is-active");

});


fecharModal.addEventListener("click", function() {

    meuModal.classList.remove("is-active");

});


fundoModal.addEventListener("click", function() {

    meuModal.classList.remove("is-active");

});