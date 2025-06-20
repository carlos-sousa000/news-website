// ESSE TEM QUE FICAR COPIANDO E COLANDO O FORM
const modal = document.getElementById("modal-contato");
const btnAbrir = document.getElementById("abrir-contato");
const btnFechar = document.getElementById("fechar-modal");
const form = document.getElementById("form-contato");

if (btnAbrir && modal && btnFechar && form) {
  // Abrir modal
  btnAbrir.addEventListener("click", () => {
    modal.style.display = "flex";
    requestAnimationFrame(() => {
      modal.classList.add("mostrar");
    });
  });

  // Fechar modal
  function fecharModal() {
    modal.classList.remove("mostrar");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // tempo igual ao do CSS (transition)
  }

  // Clicar no botão de fechar
  btnFechar.addEventListener("click", fecharModal);

  // Clicar fora do conteúdo do modal
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      fecharModal();
    }
  });

  // Enviar formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada! Obrigado!");
    fecharModal();
    form.reset();
  });
}
