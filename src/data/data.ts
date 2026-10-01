import dataJsonIt from '../data/It.json';
import dataJsonPhotograph from '../data/content.json';
import dataJsonLawyer from '../data/lawyer.json';
import dataJsonDesigner from '../data/designer.json';

// Створюємо мапу даних із чіткими ключами
export const dataMap = {
  "Створення сайтів": dataJsonIt,
  "Фотограф": dataJsonPhotograph,
  "Адвокат": dataJsonLawyer,
  "Дизайнер інтерєрів": dataJsonDesigner,
} as const;

// Автоматично виводимо тип доступних послуг
export type ServiceCategory = keyof typeof dataMap;

// Використовуємо let замість const, щоб мати змогу оновлювати значення
let currentCategory: ServiceCategory = "Створення сайтів";

// Змінна зберігає самі дані JSON для поточної категорії
export let currentDataJson = dataMap[currentCategory];

// Функція оновлює поточну категорію та повертає нові дані
export function getDataJson(category: ServiceCategory) {
  currentCategory = category;
  currentDataJson = dataMap[category]; // Оновлюємо посилання на дані
  return currentDataJson;
}