document.addEventListener("DOMContentLoaded", function () {
  const nomeUsuarioLink = document.getElementById("nome-usuario");
  const iconeUsuario = document.getElementById("icone-usuario");
  const nomeTexto = document.getElementById("nome-texto");

  function atualizarMenu() {
    const nomeSalvo = localStorage.getItem("nome");

    if (nomeSalvo) {
      nomeTexto.textContent = nomeSalvo;
      iconeUsuario.style.display = "inline-block";
      nomeUsuarioLink.classList.add("logado");
    } else {
      nomeTexto.textContent = "Login";
      iconeUsuario.style.display = "none";
      nomeUsuarioLink.classList.remove("logado");
    }
  }

  atualizarMenu();

  // ir pra uma pagina ao clicar na sua conta
  nomeUsuarioLink.addEventListener("click", function (event) {
    event.preventDefault();

    const nomeSalvo = localStorage.getItem("nome");

    if (nomeSalvo) {
      //window.location.href = "pags/conta.html";
      window.location.href = "#";
    } else {
      window.location.href = "pags/forms/cadastro.html";
    }
  });
});
