import { images, type ImageKey } from '../assets';

type ServiceCard = {
  title: string;
  description: string;
  price?: string;
};

type PortfolioCard = {
  title: string;
  tag: string;
  image: string;
  alt: string;
};

export const renderServiceCard = (service: ServiceCard): string => `
  <article class="card service-card">
    <div class="card__icon" aria-hidden="true">${service.title.slice(0, 1)}</div>
    <h3 class="card__title">${service.title}</h3>
    <p class="card__text">${service.description}</p>
    ${service.price ? `<p class="service-card__price">${service.price}</p>` : ''}
  </article>
`;

export const renderPortfolioCard = (project: PortfolioCard): string => {
  const imageKey = project.image as ImageKey;

  return `
    <article class="card portfolio-card">
      <img class="portfolio-card__image" src="${images[imageKey]}" alt="${project.alt}" loading="lazy" />
      <div class="portfolio-card__body">
        <p class="portfolio-card__tag">${project.tag}</p>
        <h3 class="card__title">${project.title}</h3>
      </div>
    </article>
  `;
};
