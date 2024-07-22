document.addEventListener("DOMContentLoaded", function() {
    const hdrutyara = document.getElementById("hdrutyara");
    const hdrutyaradiv = document.getElementById("UTYARADISCORD")

    hdrutyara.addEventListener("click", function() {
        if (hdrutyaradiv.style.display === "none" || hdrutyaradiv.style.display === "") {
            hdrutyaradiv.style.display = "block";
        } else {
            hdrutyaradiv.style.display = "none";
        }
    });
});

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
