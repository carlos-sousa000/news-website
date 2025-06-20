// document.getElementById("abrir-contato").addEventListener("click", () => {
//   document.getElementById("modal-contato").style.display = "flex";
// });

// document.getElementById("fechar-modal").addEventListener("click", () => {
//   document.getElementById("modal-contato").style.display = "none";
// });

// window.addEventListener("click", (event) => {
//   const modal = document.getElementById("modal-contato");
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// });

// document.getElementById("form-contato").addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Mensagem enviada! Obrigado!");
//   document.getElementById("modal-contato").style.display = "none";
//   e.target.reset();
// });

// jeito velho acima(sem animação), pra ver: lembrar de tirar a animação do css tbm
// ainda n tem o ngc com o div pq é mt complicado agora mas vou ver

const modal = document.getElementById("modal-contato");
const btnAbrir = document.getElementById("abrir-contato");
const btnFechar = document.getElementById("fechar-modal");
const form = document.getElementById("form-contato");

// Abrir modal
btnAbrir.addEventListener("click", () => {
  modal.style.display = "flex";

  // Display antes da animação
  requestAnimationFrame(() => {
    modal.classList.add("mostrar");
  });
});

// Fechar modal + animação reversa
function fecharModal() {
  modal.classList.remove("mostrar");

  // Espera a animação terminar
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

btnFechar.addEventListener("click", fecharModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    fecharModal();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada! Obrigado!");
  fecharModal();
  form.reset();
});
