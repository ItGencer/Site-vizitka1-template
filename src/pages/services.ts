import { renderServiceCard } from '../components/card';
import content from '../data/content.json';

export const renderServicesPage = (): string => `
  <section class="page">
    <div class="container">
      <div class="page__head">
        <p class="section-kicker">${content.sections.services.kicker}</p>
        <h1>${content.sections.services.title}</h1>
        <p>${content.sections.services.text}</p>
      </div>
      <div class="grid grid--3">
        ${content.services.map((service) => renderServiceCard(service)).join('')}
      </div>
    </div>
  </section>
`;
