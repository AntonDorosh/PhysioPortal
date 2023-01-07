// скрипт прокрутки страницы вверх
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();

// добавляет источник при копировании текста
function PhysioPortalLink() {
  const istS = 'Источник:';
  const copyR = '© PhysioPortal - портал про фізичну реабілітацію після травм, операцій та захворювань';
  const body_element = document.getElementsByTagName('body')[0];
  const choose = window.getSelection();
  const myLink = document.location.href;
  const authorLink = "<br /><br />" + istS + ' ' + "<a href='"+myLink+"'>"+myLink+"</a><br />" + copyR;
  const copytext = choose + authorLink;
  const addDiv = document.createElement('div');
  addDiv.style.position='absolute';
  addDiv.style.left='-99999px';
  body_element.appendChild(addDiv);
  addDiv.innerHTML = copytext;
  choose.selectAllChildren(addDiv);
  window.setTimeout(function() {
      body_element.removeChild(addDiv);
  },0);
}
document.oncopy = PhysioPortalLink;

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

// скролл прогресс

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}