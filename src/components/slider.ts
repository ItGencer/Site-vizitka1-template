import Swiper from 'swiper';
import { A11y, Pagination } from 'swiper/modules';
import { currentDataJson as content } from '../data/data';

let testimonialsSwiper: Swiper | null = null;

export const renderTestimonialsSlider = (): HTMLElement => {
  const slider = document.createElement('div');
  slider.className = 'testimonials-slider swiper';

  const wrapper = document.createElement('div');
  wrapper.className = 'swiper-wrapper';

  content.testimonials.forEach((item) => {
    const slide = document.createElement('article');
    slide.className = 'testimonials-slider__slide swiper-slide';

    const text = document.createElement('p');
    text.className = 'testimonials-slider__text';
    text.textContent = `“${item.text}”`;

    const author = document.createElement('div');

    const name = document.createElement('h3');
    name.textContent = item.name;

    const role = document.createElement('p');
    role.textContent = item.role;

    author.append(name, role);
    slide.append(text, author);
    wrapper.append(slide);
  });

  const pagination = document.createElement('div');
  pagination.className = 'swiper-pagination';

  slider.append(wrapper, pagination);

  return slider;
};

export const initTestimonialsSlider = (): void => {
  testimonialsSwiper?.destroy(true, true);
  testimonialsSwiper = null;

  const slider = document.querySelector<HTMLElement>('.testimonials-slider');

  if (!slider) {
    return;
  }

  testimonialsSwiper = new Swiper(slider, {
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
