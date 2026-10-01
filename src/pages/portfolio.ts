import { renderPortfolioCard } from '../components/card';
import content from '../data/content.json';

export const renderPortfolioPage = (): string => `
  <section class="page">
    <div class="container">
      <div class="page__head">
        <p class="section-kicker">${content.sections.portfolio.kicker}</p>
        <h1>${content.sections.portfolio.title}</h1>
        <p>${content.sections.portfolio.text}</p>
      </div>
      <div class="grid grid--3">
        ${content.portfolio.map((project) => renderPortfolioCard(project)).join('')}
      </div>
    </div>
  </section>
`;
