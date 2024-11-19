document.addEventListener("DOMContentLoaded", function() {
    var mySwiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
                spaceBetween: 0,
                loop: false,
                scrollbar: false,
                navigation: false,
                on: {
                    init: function () {
                        var totalSlides = this.slides.length;
                        var visibleSlides = 6;
                        var hiddenSlides = totalSlides - visibleSlides;
                        for (var i = 0; i < hiddenSlides; i++) {
                            this.slides[i].style.display = 'none';
                        }
                    }
                }
            }
        }
    });
});

const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1119px)");
const desktop = window.matchMedia("(min-width: 1120px)");
const brandsTablet = document.querySelectorAll(".brands__list > .brands__item.swiper-slide:nth-last-child(-n + 5)");
const brandsDesktop = document.querySelectorAll(".brands__list > .brands__item.swiper-slide:nth-last-child(-n + 3)");
const showAllButton = document.querySelector(".main__description_btn");

let isExpanded = false; // Флаг для отслеживания состояния отображения слайдов

showAllButton.addEventListener("click", () => {
    const elementsToToggle = tablet.matches
        ? brandsTablet
        : desktop.matches
        ? brandsDesktop
        : [];

    if (elementsToToggle.length === 0) return; // Если нет элементов, ничего не делать

    if (!isExpanded) {
        elementsToToggle.forEach((button) => {
            button.classList.add("show");
            button.classList.remove("hide");
        });
        showAllButton.textContent = "Скрыть";
        showAllButton.style.setProperty('--bg-image', 'url("image/ic/ic/верх.svg")');
    } else {
        elementsToToggle.forEach((button) => {
            button.classList.add("hide");
            button.classList.remove("show");
        });
        showAllButton.textContent = "Показать все";
        showAllButton.style.setProperty('--bg-image', 'url("image/ic/ic/вниз.svg")');
    }
    isExpanded = !isExpanded;
});

showAllButton.style.backgroundRepeat = "no-repeat";
