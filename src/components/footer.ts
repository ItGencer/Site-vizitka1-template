import content from '../data/content.json';

export const renderFooter = (): string => `
  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <a class="footer__logo" href="#/">${content.brand.name}</a>
        <p>${content.brand.description}</p>
      </div>
      <nav class="footer__nav" aria-label="Навігація в підвалі">
        ${content.navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
      </nav>
      <address class="footer__contacts">
        <a href="tel:+380000000000">${content.contacts.phone}</a>
        <a href="mailto:${content.contacts.email}">${content.contacts.email}</a>
        <span>${content.contacts.city}</span>
      </address>
    </div>
  </footer>
`;
