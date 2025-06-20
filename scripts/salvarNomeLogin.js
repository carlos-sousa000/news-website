document
  .getElementById("form-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    if (nome) {
      localStorage.setItem("nome", nome);

      window.location.href = "../../index.html";
    } else {
      alert("Por favor, digite um nome válido.");
    }
  });
