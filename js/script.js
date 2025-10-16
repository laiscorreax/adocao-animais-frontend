document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LOGIN
  ========================= */
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      if (!email || !password) return alert("Preencha todos os campos!");
      alert(`Bem-vindo de volta, ${email}! 🐾`);
      window.location.href = "index.html";
    });
  }

  /* =========================
     CADASTRO
  ========================= */
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();
      if (!name || !email || !password || !confirmPassword)
        return alert("Preencha todos os campos!");
      if (password !== confirmPassword) return alert("As senhas não conferem!");
      alert(`Cadastro realizado! Bem-vindo(a), ${name}! 🎉`);
      window.location.href = "login.html";
    });
  }

  /* =========================
     ADOTAR ANIMAL
  ========================= */
  const adoptionFormSection = document.getElementById("adoption-form");
  const adoptedAnimalName = document.getElementById("adopted-animal");

  document.querySelectorAll(".adopt-btn").forEach(botao => {
    botao.addEventListener("click", () => {
      const card = botao.parentElement;
      const nome = card.querySelector("h3").textContent;

      adoptionFormSection.classList.remove("hidden");
      adoptedAnimalName.textContent = nome;
      adoptionFormSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  const formAdoption = document.getElementById("formAdoption");
  if (formAdoption) {
    formAdoption.addEventListener("submit", e => {
      e.preventDefault();

      const residencia = document.getElementById("residencia").value;
      const espaco = document.getElementById("espaco").value.trim();
      const outrosAnimais = document.getElementById("tem-outros-animais").value;
      const comentarios = document.getElementById("comentarios").value.trim();

      if (!residencia || !espaco || !outrosAnimais) {
        alert("Preencha todos os campos obrigatórios!");
        return;
      }

      alert(`🎉 Formulário enviado com sucesso!
Animal: ${adoptedAnimalName.textContent}
Residência: ${residencia}
Espaço: ${espaco}
Outros animais: ${outrosAnimais}
Comentários: ${comentarios || "Nenhum"}
Obrigado por se candidatar à adoção!`);

      formAdoption.reset();
      adoptionFormSection.classList.add("hidden");
    });
  }

});
