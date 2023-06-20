(() => {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const crossBtn = document.querySelector("#cross-btn");
    const navEl = document.querySelector("#nav");

    hamburgerBtn.addEventListener("click", toggleBtn);
    crossBtn.addEventListener("click", toggleBtn);

    function toggleBtn() {
      hamburgerBtn.classList.toggle("hidden");
      crossBtn.classList.toggle("hidden");
      navEl.classList.toggle("hidden");
      navEl.classList.toggle("flex");
    }
  });
})();
