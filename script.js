/*
document.addEventListener('copy', function(e) {
    e.preventDefault();
    const customText = "Копирование запрещено.";
    e.clipboardData.setData('text/plain', customText);
    alert("Копирование запрещено. Если вы копируете код, убедитесь что вы прочитали ВСЕ что написано для этого кода.");
});
*/

function loadContent(url) {
    const request = new XMLHttpRequest()
    request.onload = function() {
      const parser = new DOMParser()
      const doc = parser.parseFromString(this.responseText, 'text/html')
      const newContent = doc.getElementById('main-content')
      if (newContent) {
        document.getElementById('main-content').innerHTML = newContent.innerHTML
    }
    }
    request.open('GET', url)
    request.send()
    window.scrollTo(0, 0);
  }


document.addEventListener('click', (event) => {
    const loadElement = event.target.closest('.load')
    const active_li = document.querySelector("#active")
    if (loadElement) {
        if (event.target.id != 'active') {
            if (active_li) {
                active_li.removeAttribute('id')
            }
            if (event.target.tagName == "LI") {
                event.target.id = 'active'
            } else {
                event.target.parentElement.id = 'active'
            }
        }
        const page = loadElement.classList[1]; 
        loadContent(`${page}.html`);
        document.getElementById("sidebar").classList.toggle("open");

    }
    
}, true);


document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
    } else {
        sidebar.classList.add('open');
    };
});


window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 768) {
        sidebar.classList.add('open');
    } else {
        sidebar.classList.remove('open');
    };
});

document.querySelectorAll(".menu-but").forEach(element => {
        element.addEventListener("click", () =>{
        document.getElementById("sidebar").classList.toggle("open");
    });
});

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();
