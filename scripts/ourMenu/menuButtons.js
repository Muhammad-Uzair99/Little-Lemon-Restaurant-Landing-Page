(() => {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    const mainBtn = document.querySelectorAll("#main-menu button");
    let preClickedKey = 0;
    mainBtn.forEach((element) =>
      element.addEventListener("click", () => {
        mainBtn[preClickedKey].classList.remove(
          "bg-gradient-to-br",
          "from-yellow-300",
          "via-yellow-500",
          "to-yellow-700",
          "text-red-900"
        );
        preClickedKey = Object.keys(mainBtn).find(
          (key) => mainBtn[key] === element
        );
        mainBtn[preClickedKey].classList.add(
          "bg-gradient-to-br",
          "from-yellow-300",
          "via-yellow-500",
          "to-yellow-700",
          "text-red-900"
        );
      })
    );
  });
})();
