
// Hero Section Gallery 

document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('.thumb');

    // Switch main image on thumbnail click
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Remove 'active' class from all thumbs
            thumbs.forEach(t => t.classList.remove('active'));

            // Add 'active' class to the clicked thumb
            thumb.classList.add('active');

            // Get new image source from data attribute
            const newImageSrc = thumb.getAttribute('data-bg');

            // Set the new image source
            mainImage.src = newImageSrc;
        });
    });
});


// Testimonial slider


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".testimonials-slider", {
        slidesPerView: 1, /* Default for mobile */
        spaceBetween: 30,
        navigation: {
            nextEl: ".testimonial-nav .next-btn",
            prevEl: ".testimonial-nav .prev-btn",
        },
        breakpoints: {
            // When window width is >= 320px (small mobile)
            320: {
                slidesPerView: 1,
            },
            // When window width is >= 481px (large mobile)
            481: {
                slidesPerView: 1,
            },
            // When window width is >= 768px (tablets)
            768: {
                slidesPerView: 2,
            },
            // When window width is >= 992px (small laptops)
            992: {
                slidesPerView: 2,
            },
            // When window width is >= 1200px (desktops)
            1200: {
                slidesPerView: 3,
            },
            // When window width is >= 1600px (large desktops)
            1600: {
                slidesPerView: 3.5,
            },
        },
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".projects-gallery-wrapper");
    if (!sliders.length) return;

    sliders.forEach(function (swiperEl) {
        const spaceBetween = parseInt(swiperEl.dataset.space) || 20;

        function initSwiper() {
            if (typeof Swiper === "undefined") {
                setTimeout(initSwiper, 200);
                return;
            }

            const slidesCount = swiperEl.querySelectorAll(".swiper-slide").length;
            if (slidesCount === 0) return;

            const slider = new Swiper(swiperEl, {
                slidesPerView: "auto",
                spaceBetween: spaceBetween,
                loop: slidesCount > 1,
                centeredSlides: false,
                autoplay: slidesCount > 1 ? { delay: 1000, disableOnInteraction: false } : false,
            });

        }

        initSwiper();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Hamburger toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Dropdown toggle for multiple dropdowns
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        const parentDropdown = toggle.closest('.dropdown');
        toggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent clicks from bubbling up
            // Close other open dropdowns
            document.querySelectorAll('.dropdown.active').forEach(drop => {
                if (drop !== parentDropdown) drop.classList.remove('active');
            });
            // Toggle this dropdown
            parentDropdown.classList.toggle('active');
        });
    });

    // Close dropdowns if you click outside
    document.addEventListener('click', (e) => {
        document.querySelectorAll('.dropdown.active').forEach(drop => {
            if (!drop.contains(e.target)) drop.classList.remove('active');
        });
    });
});
