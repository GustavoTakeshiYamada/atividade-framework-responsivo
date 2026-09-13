// Espera o DOM carregar completamente
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Lógica do Menu Mobile
  const btnMenuMobile = document.getElementById("btn-menu-mobile");
  const menuMobile = document.getElementById("menu-mobile");

  if (btnMenuMobile && menuMobile) {
    btnMenuMobile.addEventListener("click", () => {
      menuMobile.classList.toggle("hidden");
    });
  }

  // 2. Lógica do Modal
  const btnAbrirModal = document.getElementById("btn-abrir-modal");
  const btnFecharModal = document.getElementById("btn-fechar-modal");
  const modalContainer = document.getElementById("modal-container");

  if (btnAbrirModal && btnFecharModal && modalContainer) {
    // Abrir Modal
    btnAbrirModal.addEventListener("click", () => {
      modalContainer.classList.remove("hidden");
    });

    // Fechar Modal no botão
    btnFecharModal.addEventListener("click", () => {
      modalContainer.classList.add("hidden");
    });

    // Fechar Modal ao clicar fora dele
    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        modalContainer.classList.add("hidden");
      }
    });
  }

  // 3. Alerta simples no envio do formulário
  const formExemplo = document.getElementById("form-exemplo");
  if (formExemplo) {
    formExemplo.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Formulário enviado com sucesso!");
      formExemplo.reset();
    });
  }
});
