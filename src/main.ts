import './styles/main.scss';
import { images } from './assets';
import { renderButton } from './components/button';
import { renderPortfolioCard, renderServiceCard } from './components/card';
import { renderFooter } from './components/footer';
import { initContactForm, renderContactForm } from './components/form';
import { initHeader, renderHeader } from './components/header';
import { initTestimonialsSlider, renderTestimonialsSlider } from './components/slider';
import { currentDataJson as content } from './data/data';

const legacyHashes: Record<string, string> = {
  '#/': '#home',
  '#/services': '#services',
  '#/portfolio': '#portfolio',
  '#/contacts': '#contacts'
};

const normalizeLegacyHash = (): void => {
  const normalizedHash = legacyHashes[window.location.hash];

  if (!normalizedHash) {
    return;
  }

  window.history.replaceState(
    null,
    '',
    `${window.location.pathname}${window.location.search}${normalizedHash}`
  );
};

const createElement = <K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  className?: string
): HTMLElementTagNameMap[K] => {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  return element;
};

const createTextElement = <K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  text: string,
  className?: string
): HTMLElementTagNameMap[K] => {
  const element = createElement(tagName, className);
  element.textContent = text;

  return element;
};

const renderSectionHead = (
  kicker: string,
  title: string,
  text?: string
): HTMLElement => {
  const head = createElement('div', 'section__head');
  const kickerElement = createTextElement('p', kicker, 'section-kicker');
  const titleElement = createTextElement('h2', title);

  head.append(kickerElement, titleElement);

  if (text) {
    head.append(createTextElement('p', text));
  }

  return head;
};

const renderHeroSection = (): HTMLElement => {
  const section = createElement('section', 'hero');
  section.id = 'home';

  const container = createElement('div', 'container hero__grid');
  const heroContent = createElement('div', 'hero__content');
  const kicker = createTextElement('p', content.brand.name, 'section-kicker');
  const title = createTextElement('h1', content.hero.title);
  const subtitle = createTextElement('p', content.hero.subtitle);

  const actions = createElement('div', 'hero__actions');
  actions.append(
    renderButton({ label: content.hero.primaryAction, href: '#contacts', variant: 'filled' }),
    renderButton({ label: content.hero.secondaryAction, href: '#portfolio', variant: 'outline' })
  );

  heroContent.append(kicker, title, subtitle, actions);

  const image = createElement('img', 'hero__image');
  image.src = images.hero;
  image.alt = content.hero.imageAlt;

  container.append(heroContent, image);
  section.append(container);

  return section;
};

const renderServicesSection = (): HTMLElement => {
  const section = createElement('section', 'section');
  section.id = 'services';

  const container = createElement('div', 'container');
  const grid = createElement('div', 'grid grid--3');

  content.services.forEach((service) => {
    grid.append(renderServiceCard(service));
  });

  container.append(
    renderSectionHead(
      content.sections.services.kicker,
      content.sections.services.title,
      content.sections.services.text
    ),
    grid
  );
  section.append(container);

  return section;
};

const renderAdvantagesSection = (): HTMLElement => {
  const section = createElement('section', 'section section--soft');
  const container = createElement('div', 'container');
  const advantages = createElement('div', 'advantages');

  content.advantages.forEach((item) => {
    const article = createElement('article', 'advantages__item');
    const value = createTextElement('strong', item.value);
    const label = createTextElement('h3', item.label);
    const text = createTextElement('p', item.text);

    article.append(value, label, text);
    advantages.append(article);
  });

  container.append(
    renderSectionHead(content.sections.advantages.kicker, content.sections.advantages.title),
    advantages
  );
  section.append(container);

  return section;
};

const renderProcessSection = (): HTMLElement => {
  const section = createElement('section', 'section');
  const container = createElement('div', 'container');
  const process = createElement('div', 'process');

  content.process.forEach((item, index) => {
    const article = createElement('article', 'process__step');
    const number = createTextElement('span', String(index + 1).padStart(2, '0'));
    const title = createTextElement('h3', item.title);
    const text = createTextElement('p', item.text);

    article.append(number, title, text);
    process.append(article);
  });

  container.append(
    renderSectionHead(content.sections.process.kicker, content.sections.process.title),
    process
  );
  section.append(container);

  return section;
};

const renderPortfolioSection = (): HTMLElement => {
  const section = createElement('section', 'section section--soft');
  section.id = 'portfolio';

  const container = createElement('div', 'container');
  const head = createElement('div', 'section__head section__head--row');
  const headText = createElement('div');
  const grid = createElement('div', 'grid grid--3');

  headText.append(
    createTextElement('p', content.sections.portfolio.kicker, 'section-kicker'),
    createTextElement('h2', content.sections.portfolio.title),
    createTextElement('p', content.sections.portfolio.text)
  );

  head.append(
    headText,
    renderButton({ label: 'Усе портфоліо', href: '#portfolio', variant: 'outline' })
  );

  content.portfolio.forEach((project) => {
    grid.append(renderPortfolioCard(project));
  });

  container.append(head, grid);
  section.append(container);

  return section;
};

const renderTestimonialsSection = (): HTMLElement => {
  const section = createElement('section', 'section');
  const container = createElement('div', 'container');

  container.append(
    renderSectionHead(content.sections.testimonials.kicker, content.sections.testimonials.title),
    renderTestimonialsSlider()
  );
  section.append(container);

  return section;
};

const renderCtaSection = (): HTMLElement => {
  const section = createElement('section', 'section');
  const container = createElement('div', 'container');
  const cta = createElement('div', 'cta');
  const text = createElement('div');

  text.append(
    createTextElement('h2', content.sections.cta.title),
    createTextElement('p', content.sections.cta.text)
  );

  cta.append(
    text,
    renderButton({ label: content.sections.cta.action, href: '#contacts', variant: 'filled' })
  );
  container.append(cta);
  section.append(container);

  return section;
};

const renderContactsSection = (): HTMLElement => {
  const section = createElement('section', 'page contacts-page');
  section.id = 'contacts';

  const container = createElement('div', 'container contacts-page__grid');
  const info = createElement('div', 'contacts-page__info');
  const contactsList = createElement('div', 'contacts-list');

  const phone = createTextElement('a', content.contacts.phone);
  phone.href = 'tel:+380000000000';

  const email = createTextElement('a', content.contacts.email);
  email.href = `mailto:${content.contacts.email}`;

  const city = createTextElement('span', content.contacts.city);
  contactsList.append(phone, email, city);

  info.append(
    createTextElement('p', content.contacts.kicker, 'section-kicker'),
    createTextElement('h1', content.contacts.title),
    createTextElement('p', content.contacts.text),
    contactsList
  );

  container.append(info, renderContactForm());
  section.append(container);

  return section;
};

const renderAppPage = (): DocumentFragment => {
  const page = document.createDocumentFragment();

  page.append(
    renderHeroSection(),
    renderServicesSection(),
    renderAdvantagesSection(),
    renderProcessSection(),
    renderPortfolioSection(),
    renderTestimonialsSection(),
    renderCtaSection(),
    renderContactsSection()
  );

  return page;
};

const scrollToCurrentHash = (): void => {
  const targetId = window.location.hash.slice(1);

  if (!targetId) {
    return;
  }

  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  target.scrollIntoView();
};

const renderApp = (): void => {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) {
    return;
  }

  normalizeLegacyHash();

  const main = document.createElement('main');
  main.id = 'main-content';
  main.append(renderAppPage());

  app.textContent = '';
  app.append(renderHeader(window.location.hash || '#home'), main, renderFooter());

  initHeader(renderApp);
  initTestimonialsSlider();
  initContactForm();
  window.requestAnimationFrame(scrollToCurrentHash);
};

renderApp();
