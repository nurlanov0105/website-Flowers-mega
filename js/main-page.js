"use strict";
/*jslint devel: true, browser: true, white: true */
/*global $, jQuery, alert*/
jQuery(function ($) {
   jQuery(document).ready(function ($) {
      // Swiper for popular category section
      const swiperPopularCategory = new Swiper("#swiper-popularCategory", {
         loop: false,

         breakpoints: {
            0: {
               slidesPerView: "auto",
               spaceBetween: 17,
            },
            389: {
               slidesPerView: 3.5,
               spaceBetween: 17,
            },
            599: {
               slidesPerView: 3,
               spaceBetween: 23,
            },
            899: {
               slidesPerView: 5,
               spaceBetween: 23,
            },
            1231: {
               slidesPerView: 8,
               spaceBetween: 23,
            },
         },
      });

      // Add "active" for btn like
      const btnLikes = document.querySelectorAll(".favorite");
      btnLikes.forEach(function (btnLike) {
         btnLike.addEventListener("click", function () {
            btnLike.classList.toggle("active");
         });
      });

      // Add cards
      const btnDownloadCards = document.querySelectorAll("[data-download-cards]");
      let cardsRow = `
		<div class="row products__row" data-cards-row>
		<div class="card-standart">
			<a href="./product-buket.html" class="card-standart__img">
				<img src="./img/standart-card/01.png" alt="01">
			</a>
			<div class="card-standart__descr">
				<a href="./product-buket.html" class="card-standart__text">
					Букет “Рубиновое сияние”
				</a>
				<button class="card-standart__like favorite">
					<svg>
						<path
							d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>

			</div>
			<h3 class="h3 card-standart__pricing">
				<span class="card-standart__price">1 800 ₽</span>
				<s class="card-standart__oldprice">2 230₽</s>
			</h3>
			<button class="btn-order">
				<span class="btn-order__do active">
					<svg>
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
					</svg>
					<span>Заказать</span>
				</span>
				<span class="btn-order__done">
					<svg>
						<path
							d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
					</svg>
					<span>В корзине</span>
				</span>
			</button>
		</div>
		<div class="card-standart">
			<a href="./product-buket.html" class="card-standart__img">
				<img src="./img/standart-card/01.png" alt="01">
			</a>
			<div class="card-standart__descr">
				<a href="./product-buket.html" class="card-standart__text">
					Букет “Рубиновое сияние”
				</a>
				<button class="card-standart__like favorite">
					<svg>
						<path
							d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>

			</div>
			<h3 class="h3 card-standart__pricing">
				<span class="card-standart__price">1 800 ₽</span>
				<s class="card-standart__oldprice">2 230₽</s>
			</h3>
			<button class="btn-order">
				<span class="btn-order__do active">
					<svg>
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
					</svg>
					<span>Заказать</span>
				</span>
				<span class="btn-order__done">
					<svg>
						<path
							d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
					</svg>
					<span>В корзине</span>
				</span>
			</button>
		</div>
		<div class="card-standart">
			<a href="./product-single.html" class="card-standart__img">
				<img src="./img/standart-card/01.png" alt="01">
			</a>
			<div class="card-standart__descr">
				<a href="./product-single.html" class="card-standart__text">
					Букет из 101 розы
				</a>
				<button class="card-standart__like favorite">
					<svg>
						<path
							d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>

			</div>
			<h3 class="h3 card-standart__pricing">
				<span class="card-standart__price">1 800 ₽</span>
				<s class="card-standart__oldprice">2 230₽</s>
			</h3>
			<button class="btn-order">
				<span class="btn-order__do active">
					<svg>
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
					</svg>
					<span>Заказать</span>
				</span>
				<span class="btn-order__done">
					<svg>
						<path
							d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
					</svg>
					<span>В корзине</span>
				</span>
			</button>
		</div>
		<div class="card-standart">
			<a href="./product-single.html" class="card-standart__img">
				<img src="./img/standart-card/01.png" alt="01">
			</a>
			<div class="card-standart__descr">
				<a href="./product-single.html" class="card-standart__text">
					Букет из 101 розы
				</a>
				<button class="card-standart__like favorite">
					<svg>
						<path
							d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>

			</div>
			<h3 class="h3 card-standart__pricing">
				<span class="card-standart__price">1 800 ₽</span>
				<s class="card-standart__oldprice">2 230₽</s>
			</h3>
			<button class="btn-order">
				<span class="btn-order__do active">
					<svg>
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
					</svg>
					<span>Заказать</span>
				</span>
				<span class="btn-order__done">
					<svg>
						<path
							d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
					</svg>
					<span>В корзине</span>
				</span>
			</button>
		</div>

	</div>
	`;

      btnDownloadCards.forEach(function (btn) {
         btn.addEventListener("click", function () {
            btn.insertAdjacentHTML("beforebegin", cardsRow);
         });
      });

      // Know more btn
      const btnKnowMore = document.querySelector("[data-know-more]");
      const whyWeTitle = document.querySelector(".why-we__title");
      btnKnowMore.addEventListener("click", function () {
         btnKnowMore.classList.add("none");
         btnKnowMore.nextElementSibling.classList.remove("none");
         whyWeTitle.style.cssText = `
			text-align: left;
		`;
      });

      // Rummaging through several elements, adding a wire and adding an "active" class to the parent element
      function toggleAllActive(elem) {
         elem.forEach(function (item) {
            item.addEventListener("click", function () {
               item.parentNode.classList.toggle("active");
            });
         });
      }
      // ********
   });
});
