// SÓ FUNCIONA USANDO LIVE SERVER, POR ISSO REPETIR O FORM TODAS AS VEZES, ach q o prof n vai usar o live server, por isso colocar tds os forms

const btnAbrir = document.getElementById("abrir-contato");
const modalContainer = document.getElementById("modal-container");
let path = window.location.pathname.includes("/pags/")
  ? "/pags/forms/contato.html"
  : "pags/forms/contato.html";

btnAbrir.addEventListener("click", async () => {
  // Só carrega se ainda não foi carregado
  if (!document.getElementById("modal-contato")) {
    try {
      // const response = await fetch("./pags/contato.html");
      const response = await fetch(path);
      const html = await response.text();
      modalContainer.innerHTML = html;

      const modal = document.getElementById("modal-contato");
      const btnFechar = document.getElementById("fechar-modal");
      const form = document.getElementById("form-contato");

      requestAnimationFrame(() => {
        modal.style.display = "flex";
        modal.classList.add("mostrar");
      });

      btnFechar.addEventListener("click", fecharModal);
      window.addEventListener("click", (e) => {
        if (e.target === modal) fecharModal();
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensagem enviada! Obrigado!");
        fecharModal();
        form.reset();
      });

      function fecharModal() {
        modal.classList.remove("mostrar");
        setTimeout(() => {
          modal.style.display = "none";
        }, 300);
      }
    } catch (err) {
      console.error("Erro ao carregar o modal de contato:", err);
    }
  } else {
    const modal = document.getElementById("modal-contato");
    modal.style.display = "flex";
    requestAnimationFrame(() => {
      modal.classList.add("mostrar");
    });
  }
});
