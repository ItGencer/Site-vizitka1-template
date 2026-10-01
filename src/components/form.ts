import content from '../data/content.json';

export const renderContactForm = (): string => `
  <form class="contact-form" novalidate>
    <label class="contact-form__field">
      <span>${content.contacts.form.name}</span>
      <input type="text" name="name" autocomplete="name" />
    </label>
    <label class="contact-form__field">
      <span>${content.contacts.form.phone}</span>
      <input type="tel" name="phone" autocomplete="tel" />
    </label>
    <label class="contact-form__field">
      <span>${content.contacts.form.message}</span>
      <textarea name="message" rows="5"></textarea>
    </label>
    <button class="btn btn--filled contact-form__button" type="submit">${content.contacts.form.button}</button>
    <p class="contact-form__status" role="status" aria-live="polite"></p>
  </form>
`;

export const initContactForm = (): void => {
  const form = document.querySelector<HTMLFormElement>('.contact-form');
  const status = document.querySelector<HTMLParagraphElement>('.contact-form__status');

  if (!form || !status) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !phone || !message) {
      status.className = 'contact-form__status contact-form__status--error';
      status.textContent = content.contacts.form.error;
      return;
    }

    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    button?.setAttribute('disabled', 'true');
    status.className = 'contact-form__status';
    status.textContent = 'Надсилаємо...';

    window.setTimeout(() => {
      status.className = 'contact-form__status contact-form__status--success';
      status.textContent = content.contacts.form.success;
      button?.removeAttribute('disabled');
      form.reset();
    }, 700);
  });
};
