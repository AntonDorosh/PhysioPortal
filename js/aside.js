// выпадающий список боковой навигации
const acc = document.getElementsByClassName("dropdown__btn-sidebar");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("dropdowm__btn-active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// фиксация сайдбара при прокрутке страницы







