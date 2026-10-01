import content from './data/content.json';
import { renderFooter } from './components/footer';
import { initHeader, renderHeader } from './components/header';
import { initContactForm } from './components/form';
import { initTestimonialsSlider } from './components/slider';
import { renderContactsPage } from './pages/contacts';
import { renderHomePage } from './pages/home';
import { renderPortfolioPage } from './pages/portfolio';
import { renderServicesPage } from './pages/services';

export type RoutePath = '#/' | '#/services' | '#/portfolio' | '#/contacts';

type Route = {
  render: () => string;
  afterRender?: () => void;
};

const routes: Record<RoutePath, Route> = {
  '#/': {
    render: renderHomePage,
    afterRender: initTestimonialsSlider
  },
  '#/services': {
    render: renderServicesPage
  },
  '#/portfolio': {
    render: renderPortfolioPage
  },
  '#/contacts': {
    render: renderContactsPage,
    afterRender: initContactForm
  }
};

const normalizeHash = (): string => window.location.hash || '#/';

const renderNotFound = (): string => `
  <section class="page page--center">
    <div class="container">
      <p class="section-kicker">${content.notFound.kicker}</p>
      <h1>${content.notFound.title}</h1>
      <p>${content.notFound.text}</p>
      <a class="btn btn--filled" href="#/">На головну</a>
    </div>
  </section>
`;

const renderApp = (): void => {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) {
    return;
  }

  const hash = normalizeHash();
  const route = routes[hash as RoutePath];

  app.innerHTML = `
    ${renderHeader(hash)}
    <main id="main-content">
      ${route ? route.render() : renderNotFound()}
    </main>
    ${renderFooter()}
  `;

  initHeader();
  route?.afterRender?.();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const initRouter = (): void => {
  window.addEventListener('hashchange', renderApp);
  renderApp();
};
