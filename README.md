# Pixel Studio

Односторінковий сайт для вебстудії на TypeScript, Webpack 5 і SCSS.

## Як запустити

1. Встановіть залежності:
   ```bash
   npm install
   ```

2. Запустіть сайт для розробки:
   ```bash
   npm run dev
   ```

3. Відкрийте адресу з консолі, зазвичай це:
   ```text
   http://localhost:3000
   ```

## Як зібрати готову версію

```bash
npm run build
```

Готові файли з'являться у папці `dist/`.

## Як змінити сайт

- Усі тексти редагуються в `src/data/content.json`.
- Основні кольори, тіні, радіуси й шрифти змінюються в `src/styles/_variables.scss`.
- Зображення лежать у `src/assets/img/`.
- Ліцензійні файли Gilroy покладіть у `src/assets/fonts/` як `Gilroy-Regular.woff2` і `Gilroy-SemiBold.woff2`; якщо їх немає, браузер використає fallback-шрифти.

## GitHub і Vercel

1. Створіть репозиторій на GitHub.
2. Додайте файли проєкту в репозиторій і зробіть push.
3. На Vercel натисніть **Add New Project** і виберіть цей репозиторій.
4. Vercel автоматично візьме команду збірки `npm run build` і папку `dist` з `vercel.json`.
5. Після деплою усі маршрути сайту працюватимуть через `index.html`.
