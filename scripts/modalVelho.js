document.getElementById("abrir-contato").addEventListener("click", () => {
  document.getElementById("modal-contato").style.display = "flex";
});

document.getElementById("fechar-modal").addEventListener("click", () => {
  document.getElementById("modal-contato").style.display = "none";
});

window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal-contato");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("form-contato").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada! Obrigado!");
  document.getElementById("modal-contato").style.display = "none";
  e.target.reset();
});

// jeito velho acima(sem animação), pra ver: lembrar de tirar a animação do css tbm
// ainda n tem o ngc com o div pq é mt complicado agora mas vou ver
// esse tbm precisa copiar e colar o form
