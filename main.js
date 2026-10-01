let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
};
let ticking = false;
window.onscroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
            ticking = false;
        });
        ticking = true;
    }
};
/* Slides */

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 4000,  
    }, 
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
    
}); /*novo efeito de animação texto*/ 
  window.addEventListener('load', () => {
    const sr = ScrollReveal({
        reset: false,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        viewFactor: 0,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    sr.reveal('.about .image', {
        origin: 'left',
        distance: '80px',
        duration: 1200,
        delay: 100,
        opacity: 0
    });

    sr.reveal('.about .logo-text', {
        origin: 'top',
        distance: '30px',
        duration: 900,
        delay: 200,
        opacity: 0
    });

   sr.reveal('.about .content > h2', {
    origin: 'left',
    distance: '40px',
    duration: 800,
    delay: 100,
    interval: 200,
    opacity: 0
    });

    sr.reveal('.about .content > p', {
    origin: 'bottom',
    distance: '25px',
    duration: 700,
    delay: 150,
    interval: 100,
    opacity: 0
    });

    sr.reveal('.about .box', {
        origin: 'bottom',
        distance: '30px',
        duration: 700,
        delay: 100,
        interval: 120,
        opacity: 0
    });

    sr.reveal('.features .box', {
        origin: 'bottom',
        distance: '40px',
        duration: 800,
        interval: 180,
        opacity: 0
    });

    sr.reveal('.trainers .box', {
        origin: 'bottom',
        distance: '40px',
        duration: 800,
        interval: 150,
        opacity: 0
    });

    /*sr.reveal('.banner', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        interval: 200,
        opacity: 0
    });*/

    /*novo*/
    function animarContador(elemento, inicio, fim, duracao, sufixo = '') {
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progresso = Math.min((timestamp - startTime) / duracao, 1);
        const valor = Math.floor(progresso * (fim - inicio) + inicio);
        elemento.textContent = (inicio === 0 && fim === 1000 ? '+' : '') + valor + sufixo;
        if (progresso < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // pega pelo ícone, não pela posição
            const metricaModalidades = document.querySelector('.fa-dumbbell')?.closest('.metrica')?.querySelector('h3');
            const metricaAvaliacao = document.querySelector('.fa-star')?.closest('.metrica')?.querySelector('h3');
            const metricaLocal = document.querySelector('.fa-map-marker-alt')?.closest('.metrica')?.querySelector('h3');

            if (metricaModalidades) animarContador(metricaModalidades, 0, 7, 1500);
            if (metricaAvaliacao) animarContador(metricaAvaliacao, 0, 5, 1200);

            if (metricaLocal) {
                const texto = 'Localização';
                metricaLocal.textContent = '';
                let i = 0;
                const digitar = setInterval(() => {
                    metricaLocal.textContent += texto[i];
                    i++;
                    if (i >= texto.length) clearInterval(digitar);
                }, 80);
            }

            observer.disconnect();
        }
    });
}, { threshold: 0.5 });

const metricas = document.querySelector('.metricas');
if (metricas) observer.observe(metricas);
});

/*abas do sobre*/

const tabs = document.querySelectorAll('.about-tab');
const label = document.querySelector('.about-tab-label');
const labels = ['Sobre Nós', 'Disciplina'];
let currentTab = 0;

function mostrarTab(index) {
    tabs.forEach(t => t.classList.remove('active'));
    tabs[index].classList.add('active');
    label.textContent = labels[index];
}

const btnNext = document.querySelector('.about-next');
const btnPrev = document.querySelector('.about-prev');

if (btnNext) btnNext.addEventListener('click', () => {
    currentTab = (currentTab + 1) % tabs.length;
    mostrarTab(currentTab);
});

if (btnPrev) btnPrev.addEventListener('click', () => {
    currentTab = (currentTab - 1 + tabs.length) % tabs.length;
    mostrarTab(currentTab);
});