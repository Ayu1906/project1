class Dropdown {
    constructor(dropdownElement) {
        this.dropdown = dropdownElement;
        this.select = this.dropdown.querySelector('.select');
        this.caret = this.dropdown.querySelector('.caret');
        this.menu = this.dropdown.querySelector('.menu');
        this.options = this.dropdown.querySelectorAll('.menu li');
        this.selected = this.dropdown.querySelector('.selected');

        this.isDropdownHovered = false;
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.dropdown.addEventListener('mouseenter', () => {
            this.isDropdownHovered = true;
            this.caret.classList.add('caret-rotated');
            this.menu.classList.add('menu-open');
        });

        this.dropdown.addEventListener('mouseleave', () => {
            this.isDropdownHovered = false;
            setTimeout(() => {
                if (!this.isDropdownHovered) {
                    this.caret.classList.remove('caret-rotated');
                    this.menu.classList.remove('menu-open');
                }
            }, 200);
        });

        this.select.addEventListener('mouseenter', () => {
            this.isDropdownHovered = true;
        });

        this.select.addEventListener('mouseleave', () => {
            this.isDropdownHovered = false;
            setTimeout(() => {
                if (!this.isDropdownHovered) {
                    this.caret.classList.remove('caret-rotated');
                    this.menu.classList.remove('menu-open');
                }
            }, 200);
        });
    }
}
const allDropdowns = document.querySelectorAll('.container-3 .dropdown');
allDropdowns.forEach(dropdown => new Dropdown(dropdown));


class SliderBanner {
    constructor(sliderElement) {
        this.slider = document.getElementById("slider");
        this.image = this.slider.getElementsByClassName("image");
        this.index = 0;
        this.slideShow(); // Mulai tayangan gambar ketika instance dibuat
    }

    slideShow() {
        for (let i = 0; i < this.image.length; i++) {
            this.image[i].style.display = 'none';
        }
        this.index++;

        if (this.index > this.image.length) {
            this.index = 1;
        }
        this.image[this.index - 1].style.display = 'block';
        setTimeout(() => this.slideShow(), 3000);
    }
}
let sliderSaya = new SliderBanner();


class ListLeft {
    constructor() {
        this.navslider = document.getElementById("navslider");
        this.klik();
    }

    klik() {
        this.navslider.addEventListener('click', () => {
            document.querySelector('.container-3').classList.toggle('container3Show');
            document.getElementById("list-menu").classList.remove('d-flex');

        });
    }
}
// Membuat instance dari class
const listLeftInstance = new ListLeft();

// SLIDER KE KIRI SATU PER SATU MENGGUNAKAN SLICK.JS
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

$(document).ready(function(){
    $('.autoplay').slick({
        dots:false,
        infinite: true,
        speed:300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:'<span class="priv_arrow border rounded-circle"><i class="bi bi-chevron-right"></i></span>',
        prevArrow:'<span class="next_arrow border rounded-circle"><i class="bi bi-chevron-left"></i></span>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    })
}); 

// footer 
const tahunSekarangElement = document.getElementById("tahunSekarang");
if (tahunSekarangElement) {
    tahunSekarangElement.innerHTML = new Date().getFullYear();
}
