document.addEventListener("DOMContentLoaded", function () {
  const nomeUsuarioLink = document.getElementById("nome-usuario");
  const iconeUsuario = document.getElementById("icone-usuario");
  const nomeTexto = document.getElementById("nome-texto");

  function atualizarMenu() {
    const nomeSalvo = localStorage.getItem("nome");

    if (nomeSalvo) {
      nomeTexto.textContent = nomeSalvo;
      iconeUsuario.style.display = "inline-block";
    } else {
      nomeTexto.textContent = "Login";
      iconeUsuario.style.display = "none";
    }
  }

  atualizarMenu();

  nomeUsuarioLink.addEventListener("click", function (event) {
    event.preventDefault();

    const nomeSalvo = localStorage.getItem("nome");

    if (nomeSalvo) {
      window.location.href = "pags/conta.html";
    } else {
      window.location.href = "pags/forms/cadastro.html";
    }
  });
});
