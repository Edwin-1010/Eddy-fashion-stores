const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const mainImg = getElementById("MainImg");
const smallImg = getElementByclassName("small-img");
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
showMenu();
function slider() {
  smallImg[0].onclick = function () {};
}
