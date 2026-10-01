import content from '../data/content.json';
import { renderButton } from './button';

const navItems = content.navigation;

export const renderHeader = (activeHash: string): string => `
  <header class="header">
    <div class="container header__inner">
      <a class="header__logo" href="#/" aria-label="Pixel Studio — головна">
        <span class="header__logo-mark">P</span>
        <span>${content.brand.name}</span>
      </a>

      <nav class="header__nav" aria-label="Головна навігація">
        ${navItems.map((item) => `
          <a class="header__link ${item.href === activeHash ? 'header__link--active' : ''}" href="${item.href}">
            ${item.label}
          </a>
        `).join('')}
      </nav>

      <div class="header__cta">
        ${renderButton({ label: 'Звʼязатися', href: '#/contacts', variant: 'pill' })}
      </div>

      <button class="header__burger" type="button" aria-label="Відкрити меню" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
`;

export const initHeader = (): void => {
  const burger = document.querySelector<HTMLButtonElement>('.header__burger');
  const nav = document.querySelector<HTMLElement>('.header__nav');

  if (!burger || !nav) {
    return;
  }

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) {
      nav.classList.remove('header__nav--open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
};
