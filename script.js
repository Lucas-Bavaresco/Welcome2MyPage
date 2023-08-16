document.addEventListener("DOMContentLoaded", function () {
  const duolingoLink = document.getElementById("duolingo");

  duolingoLink.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    showAlert(
      "You will be redirected to my profile 'lucas.ixt8.tech' on Duolingo!",
      function () {
        window.open(
          "https://www.duolingo.com/profile/lucas.ixt8.tech?via=share_profile/",
          "_blank"
        );
      }
    );
  });

  function showAlert(message, callback) {
    if (confirm(message)) {
      callback();
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const mimoLink = document.getElementById("mimo");

  mimoLink.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    showAlert(
      "Add my username '@user15309' (Lucas Bavaresco) on Mimo and let's code together!",
      function () {
        window.open("https://getmimo.com/invite/548zlg", "_blank");
      }
    );
  });

  function showAlert(message, callback) {
    if (confirm(message)) {
      callback();
    }
  }
});
