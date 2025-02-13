document.addEventListener("DOMContentLoaded", function () {
  const loginInput = document.querySelector(".inputLogin input");
  const passwordInput = document.querySelector(".inputPassword input");
  const eyeIcon = document.querySelector(".inputPassword img");
  const confirmButton = document.querySelector(".push__btn");
  loginInput.value = "anora";
  passwordInput.value = "";
  function updateButtonColor() {
    if (passwordInput.value.length > 0) {
      confirmButton.style.backgroundColor = "orange";
    } else {
      confirmButton.style.backgroundColor = "#ccc";
    }
  }
  passwordInput.addEventListener("input", updateButtonColor);
  confirmButton.addEventListener("click", function (event) {
    let storedPassword = localStorage.getItem("password") || "1234";
    storedPassword = storedPassword.substring(0, 4);
    if (
      loginInput.value !== "anora" ||
      passwordInput.value !== storedPassword
    ) {
      event.preventDefault();
      alert("Неправильный логин или пароль!");
    }
  });
  eyeIcon.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src = "./svg/EyeOpen.svg";
    } else {
      passwordInput.type = "password";
      eyeIcon.src = "./svg/Eye.svg";
    }
  });
});
const userData = {
  ism: "Anora",
  login: "anora",
  parol: 1234,
  coin: 748,
  hp: 1000,
  group: "F2-1956",
};
localStorage.setItem("user", JSON.stringify(userData));
const retrievedData = JSON.parse(localStorage.getItem("user"));

