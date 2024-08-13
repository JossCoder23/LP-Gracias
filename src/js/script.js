window.addEventListener("load", () => {

    var slider1 = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        loop: true,
        breakpoints: {
            // 760: {
            //     slidesPerView: 2,
            //     slidesPerColumn: 1
            // },
            999: {
                slidesPerView: 5,
                slidesPerColumn: 1
            },
            // 1280: {
            //     slidesPerView: 4,
            //     slidesPerColumn: 1
            // }
        }
    });
    
    var slider2 = new Swiper(".mySwiper2", {
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
        }
    });

    var slider3 = new Swiper(".mySwiper3", {
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3"
        },
        pagination: {
            el: ".swiper-pagination3",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        loop: true,
        breakpoints: {
            760: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 3
            },
        }
    });

    var slider4 = new Swiper(".mySwiper4", {
        navigation: {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4"
        },
        pagination: {
            el: ".swiper-pagination4",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 1,
                slidesPerColumn: 1
            },
        }
    });

    let boton = document.querySelector('.bloqueFloat');

   window.addEventListener("scroll", (e) => {

        console.log(window.scrollY);


        if( screen.width >= 320 && screen.width <= 1019 ) {
            if( window.scrollY >= 650 && window.scrollY <= 2950 ) {
                boton.classList.add('bloqueFloatActive')
            }else {
                boton.classList.remove('bloqueFloatActive')
            }
        }
       
        if( screen.width >= 1020 && screen.width <= 1280 ) {
            // console.log(window.scrollY);
            if( window.scrollY >= 350 && window.scrollY <= 2700 ) {
                boton.classList.add('bloqueFloatActive')
            }else {
                boton.classList.remove('bloqueFloatActive')
            }
        }

        if( screen.width >= 1360 && screen.width <= 2600 ) {
            if( window.scrollY >= 450 && window.scrollY <= 3500 ) {
                boton.classList.add('bloqueFloatActive')
            }else {
                boton.classList.remove('bloqueFloatActive')
            }
        }

   })

})


