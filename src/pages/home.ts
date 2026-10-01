import { images } from '../assets';
import { renderButton } from '../components/button';
import { renderPortfolioCard, renderServiceCard } from '../components/card';
import { renderTestimonialsSlider } from '../components/slider';
import content from '../data/content.json';

export const renderHomePage = (): string => `
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <p class="section-kicker">${content.brand.name}</p>
        <h1>${content.hero.title}</h1>
        <p>${content.hero.subtitle}</p>
        <div class="hero__actions">
          ${renderButton({ label: content.hero.primaryAction, href: '#/contacts', variant: 'filled' })}
          ${renderButton({ label: content.hero.secondaryAction, href: '#/portfolio', variant: 'outline' })}
        </div>
      </div>
      <img class="hero__image" src="${images.hero}" alt="${content.hero.imageAlt}" />
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section__head">
        <p class="section-kicker">${content.sections.services.kicker}</p>
        <h2>${content.sections.services.title}</h2>
        <p>${content.sections.services.text}</p>
      </div>
      <div class="grid grid--3">
        ${content.services.map((service) => renderServiceCard(service)).join('')}
      </div>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <div class="section__head">
        <p class="section-kicker">${content.sections.advantages.kicker}</p>
        <h2>${content.sections.advantages.title}</h2>
      </div>
      <div class="advantages">
        ${content.advantages.map((item) => `
          <article class="advantages__item">
            <strong>${item.value}</strong>
            <h3>${item.label}</h3>
            <p>${item.text}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section__head">
        <p class="section-kicker">${content.sections.process.kicker}</p>
        <h2>${content.sections.process.title}</h2>
      </div>
      <div class="process">
        ${content.process.map((item, index) => `
          <article class="process__step">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <div class="section__head section__head--row">
        <div>
          <p class="section-kicker">${content.sections.portfolio.kicker}</p>
          <h2>${content.sections.portfolio.title}</h2>
          <p>${content.sections.portfolio.text}</p>
        </div>
        ${renderButton({ label: 'Усе портфоліо', href: '#/portfolio', variant: 'outline' })}
      </div>
      <div class="grid grid--3">
        ${content.portfolio.slice(0, 3).map((project) => renderPortfolioCard(project)).join('')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section__head">
        <p class="section-kicker">${content.sections.testimonials.kicker}</p>
        <h2>${content.sections.testimonials.title}</h2>
      </div>
      ${renderTestimonialsSlider()}
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta">
        <div>
          <h2>${content.sections.cta.title}</h2>
          <p>${content.sections.cta.text}</p>
        </div>
        ${renderButton({ label: content.sections.cta.action, href: '#/contacts', variant: 'filled' })}
      </div>
    </div>
  </section>
`;
