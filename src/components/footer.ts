import { currentDataJson as content } from '../data/data';

const sectionHrefByRoute: Record<string, string> = {
  '#/': '#home',
  '#/services': '#services',
  '#/portfolio': '#portfolio',
  '#/contacts': '#contacts'
};

const toSectionHref = (href: string): string => sectionHrefByRoute[href] || href;

export const renderFooter = (): HTMLElement => {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const grid = document.createElement('div');
  grid.className = 'container footer__grid';

  const brand = document.createElement('div');

  const logo = document.createElement('a');
  logo.className = 'footer__logo';
  logo.href = '#home';
  logo.textContent = content.brand.name;

  const description = document.createElement('p');
  description.textContent = content.brand.description;

  brand.append(logo, description);

  const nav = document.createElement('nav');
  nav.className = 'footer__nav';
  nav.setAttribute('aria-label', 'Навігація в підвалі');

  content.navigation.forEach((item) => {
    const link = document.createElement('a');
    link.href = toSectionHref(item.href);
    link.textContent = item.label;
    nav.append(link);
  });

  const contacts = document.createElement('address');
  contacts.className = 'footer__contacts';

  const phone = document.createElement('a');
  phone.href = 'tel:+380000000000';
  phone.textContent = content.contacts.phone;

  const email = document.createElement('a');
  email.href = `mailto:${content.contacts.email}`;
  email.textContent = content.contacts.email;

  const city = document.createElement('span');
  city.textContent = content.contacts.city;

  contacts.append(phone, email, city);
  grid.append(brand, nav, contacts);
  footer.append(grid);

  return footer;
};
