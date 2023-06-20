(() => {
  "use strict";
  const homeParaEl = document.querySelector("#home-para");
  const homeNextBtn = document.querySelector("#home-nextBtn");
  const homePrevBtn = document.querySelector("#home-prevBtn");
  const paraArr = [
    "Delight your taste buds with culinary wonders, at our restaurant where flavors take you on a journey.",

    "Indulge in culinary bliss, where every bite tells a delicious story.",

    "Experience a symphony of flavors, crafted with passion and served with perfection.",

    "Savor the art of dining, where gastronomy meets elegance.",

    "Embark on a culinary journey, where every dish is a masterpiece.",

    "Taste the extraordinary, where innovation meets tradition in every delectable dish.",
  ];

  let count = 0;
  let para = "";
  homeNextBtn.addEventListener("click", () => {
    count++;
    showPara();
  });
  homePrevBtn.addEventListener("click", () => {
    count--;
    showPara();
  });

  function showPara() {
    if (count < 0) {
      count = paraArr.length - 1;
    }
    if (count >= paraArr.length) {
      count = 0;
    }
    homeParaEl.textContent = `"${paraArr[count]}"`;
  }
})();
