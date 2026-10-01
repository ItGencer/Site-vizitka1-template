import hero from './assets/img/hero.svg';
import portfolio1 from './assets/img/portfolio-1.svg';
import portfolio2 from './assets/img/portfolio-2.svg';
import portfolio3 from './assets/img/portfolio-3.svg';
import portfolio4 from './assets/img/portfolio-4.svg';
import portfolio5 from './assets/img/portfolio-5.svg';
import portfolio6 from './assets/img/portfolio-6.svg';

export const images = {
  hero,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6
};

export type ImageKey = keyof typeof images;
