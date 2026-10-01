import Swiper from 'swiper';
import { A11y, Pagination } from 'swiper/modules';
import content from '../data/content.json';

export const renderTestimonialsSlider = (): string => `
  <div class="testimonials-slider swiper">
    <div class="swiper-wrapper">
      ${content.testimonials.map((item) => `
        <article class="testimonials-slider__slide swiper-slide">
          <p class="testimonials-slider__text">“${item.text}”</p>
          <div>
            <h3>${item.name}</h3>
            <p>${item.role}</p>
          </div>
        </article>
      `).join('')}
    </div>
    <div class="swiper-pagination"></div>
  </div>
`;

export const initTestimonialsSlider = (): void => {
  const slider = document.querySelector<HTMLElement>('.testimonials-slider');

  if (!slider) {
    return;
  }

  new Swiper(slider, {
    modules: [Pagination, A11y],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    a11y: {
      enabled: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
};
