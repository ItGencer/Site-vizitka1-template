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

export const renderServiceCard = (service: ServiceCard): HTMLElement => {
  const card = document.createElement('article');
  card.className = 'card service-card';

  const icon = document.createElement('div');
  icon.className = 'card__icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = service.title.slice(0, 1);

  const title = document.createElement('h3');
  title.className = 'card__title';
  title.textContent = service.title;

  const description = document.createElement('p');
  description.className = 'card__text';
  description.textContent = service.description;

  card.append(icon, title, description);

  if (service.price) {
    const price = document.createElement('p');
    price.className = 'service-card__price';
    price.textContent = service.price;
    card.append(price);
  }

  return card;
};

export const renderPortfolioCard = (project: PortfolioCard): HTMLElement => {
  const imageKey = project.image as ImageKey;

  const card = document.createElement('article');
  card.className = 'card portfolio-card';

  const image = document.createElement('img');
  image.className = 'portfolio-card__image';
  image.src = images[imageKey];
  image.alt = project.alt;
  image.loading = 'lazy';

  const body = document.createElement('div');
  body.className = 'portfolio-card__body';

  const tag = document.createElement('p');
  tag.className = 'portfolio-card__tag';
  tag.textContent = project.tag;

  const title = document.createElement('h3');
  title.className = 'card__title';
  title.textContent = project.title;

  body.append(tag, title);
  card.append(image, body);

  return card;
};
