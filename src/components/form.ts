import { currentDataJson as content } from '../data/data';

const renderField = (
  labelText: string,
  field: HTMLInputElement | HTMLTextAreaElement
): HTMLLabelElement => {
  const label = document.createElement('label');
  label.className = 'contact-form__field';

  const text = document.createElement('span');
  text.textContent = labelText;

  label.append(text, field);

  return label;
};

export const renderContactForm = (): HTMLFormElement => {
  const form = document.createElement('form');
  form.className = 'contact-form';
  form.noValidate = true;

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.autocomplete = 'name';

  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.name = 'phone';
  phoneInput.autocomplete = 'tel';

  const messageTextarea = document.createElement('textarea');
  messageTextarea.name = 'message';
  messageTextarea.rows = 5;

  const button = document.createElement('button');
  button.className = 'btn btn--filled contact-form__button';
  button.type = 'submit';
  button.textContent = content.contacts.form.button;

  const status = document.createElement('p');
  status.className = 'contact-form__status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');

  form.append(
    renderField(content.contacts.form.name, nameInput),
    renderField(content.contacts.form.phone, phoneInput),
    renderField(content.contacts.form.message, messageTextarea),
    button,
    status
  );

  return form;
};

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
