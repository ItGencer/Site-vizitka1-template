import { renderContactForm } from '../components/form';
import content from '../data/content.json';

export const renderContactsPage = (): string => `
  <section class="page contacts-page">
    <div class="container contacts-page__grid">
      <div class="contacts-page__info">
        <p class="section-kicker">${content.contacts.kicker}</p>
        <h1>${content.contacts.title}</h1>
        <p>${content.contacts.text}</p>
        <div class="contacts-list">
          <a href="tel:+380000000000">${content.contacts.phone}</a>
          <a href="mailto:${content.contacts.email}">${content.contacts.email}</a>
          <span>${content.contacts.city}</span>
        </div>
      </div>
      ${renderContactForm()}
    </div>
  </section>
`;
