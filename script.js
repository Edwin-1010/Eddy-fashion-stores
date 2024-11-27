const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const mainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");
function showMenu() {
  if (bar) {
    bar.addEventListener("click", () => {
      nav.classList.add("active");
    });
  }
  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
}
function slider() {
  smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
  };
  smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
  };
  smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
  };
  smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;
  };
}

showMenu();
slider();
