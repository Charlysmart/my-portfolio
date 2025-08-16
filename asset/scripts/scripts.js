let menuToggle = document.getElementById('menuToggle');
let body = document.querySelector('.body');
let menu = document.querySelector('.menu');
let menuList = document.querySelectorAll('.menu-list');
let scrollToTop = document.getElementById('scrollToTop');
let sections = document.querySelectorAll(".section");

menu.addEventListener('click', (e) => {
    menuItem = e.target.textContent;
    sections.forEach((section) => {
        if (menuItem.toLowerCase() === section.id.toLowerCase()) {
            if (screen.width >= 768) {
                body.scrollBy({
                    top: section.getBoundingClientRect().top - 100,
                    behavior: 'smooth'
                });
            } else {
                menu.classList.remove('show');
                body.classList.remove('no-scroll');
                body.scrollBy({
                    top: section.getBoundingClientRect().top - 100,
                    behavior: 'smooth'
                });
            }
        }
    })
})

// toggling menu
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    body.classList.toggle('no-scroll');
});

body.addEventListener('scroll', () => {
    sections.forEach((section) => {
        topSection = section.getBoundingClientRect().top;
        if (topSection < body.clientHeight) {
            menuList.forEach((item) => {
                let menuItem = item.lastElementChild;
                if (menuItem.textContent.toLowerCase() === section.id.toLowerCase()) {
                    item.style.color = 'rgb(135, 65, 247)';
                } else {
                    item.style.color = 'white';
                } 
            });
        }
    });

    if (body.scrollTop > body.clientHeight) {
        scrollToTop.style.display = 'flex';
    } else {
        scrollToTop.style.display = 'none';        
    }
});

scrollToTop.addEventListener('click', () => {
    body.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

