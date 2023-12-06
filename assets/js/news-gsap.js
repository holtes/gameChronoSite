// Регистрация объектов ScrollTrigger и ScrollSmoother
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Пользователь начал крутить колесико мыши?
if(ScrollTrigger.isTouch !== 1) {
    // Параллакс анимация контента страницы
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.wrapper-content',
        smooth: 1.5,
        effects: true,
    });

    // Появление и скрытие заголовка
    gsap.fromTo('.header', {opacity: 1}, 
    {
        opacity: 0,
        scrollTrigger: {
            trigger: '.header',
            start: 'center',
            end: 'bottom',

            scrub: true,
        }
    })

    const cards = document.querySelectorAll('.news-card');
    let index = 0;
    // Появление и скрытие карточек новостей
    cards.forEach(card => {
        if(index % 2 === 0) {
            gsap.fromTo(card, {opacity: 0, x: -100}, 
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: card,
                        start: '-1200',
                        end: '-300',
            
                        scrub: true,
                    }
                })
        }
        else {
            gsap.fromTo(card, {opacity: 0, x: 100}, 
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: card,
                        start: '-1200',
                        end: '-300',
            
                        scrub: true,
                    }
                })
        }
        index++;

    });


}

