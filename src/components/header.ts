import { renderButton } from "./button";
import { currentDataJson, getDataJson, type ServiceCategory } from "../data/data";

const sectionHrefByRoute: Record<string, string> = {
  "#/": "#home",
  "#/services": "#services",
  "#/portfolio": "#portfolio",
  "#/contacts": "#contacts",
};

const toSectionHref = (href: string): string =>
  sectionHrefByRoute[href] || href;

const categoriesByChoice: Record<string, ServiceCategory> = {
  "1": "Створення сайтів",
  "2": "Фотограф",
  "3": "Адвокат",
  "4": "Дизайнер інтерєрів",
};

function businessActivity(onCategoryChange: () => void): void {
  while (true) {
    const choice = prompt(
      "1) Створення сайтів\n" +
        "2) Фотограф\n" +
        "3) Адвокат\n" +
        "4) Дизайнер інтер'єрів\n" +
        "Введіть номер виду діяльності:",
    );

    if (choice === null) {
      return;
    }

    const category = categoriesByChoice[choice.trim()];
    if (!category) {
      alert("Невірний вибір. Будь ласка, спробуйте ще раз.");
      continue;
    }

    getDataJson(category);
    onCategoryChange();
    return;
  }
}

const renderChangeOfBusinessActivityButton = (
  onCategoryChange: () => void,
): HTMLButtonElement => {
  const changeOfBusinessActivity = document.createElement("button");
  changeOfBusinessActivity.className =
    "header__inner__change-business-activity";
  changeOfBusinessActivity.type = "button";
  changeOfBusinessActivity.setAttribute("aria-label", "Змінити вид діяльності");
  changeOfBusinessActivity.textContent = "Змінити вид діяльності";
  changeOfBusinessActivity.addEventListener("click", () => {
    businessActivity(onCategoryChange);
  });

  return changeOfBusinessActivity;
};

export const renderHeader = (activeHash: string): HTMLElement => {
  const header = document.createElement("header");
  header.className = "header";

  const inner = document.createElement("div");
  inner.className = "container header__inner";

  const logo = document.createElement("a");
  logo.className = "header__logo";
  logo.href = "#home";
  logo.setAttribute("aria-label", "Pixel Studio — головна");

  const logoMark = document.createElement("span");
  logoMark.className = "header__logo-mark";
  logoMark.textContent = "P";

  const logoText = document.createElement("span");
  logoText.textContent = currentDataJson.brand.name;

  logo.append(logoMark, logoText);

  const nav = document.createElement("nav");
  nav.className = "header__nav";
  nav.setAttribute("aria-label", "Головна навігація");

  currentDataJson.navigation.forEach((item) => {
    const href = toSectionHref(item.href);
    const link = document.createElement("a");
    link.className = `header__link${href === activeHash ? " header__link--active" : ""}`;
    link.href = href;
    link.textContent = item.label;
    nav.append(link);
  });

  const cta = document.createElement("div");
  cta.className = "header__cta";
  cta.append(
    renderButton({ label: "Звʼязатися", href: "#contacts", variant: "pill" }),
  );

  const burger = document.createElement("button");
  burger.className = "header__burger";
  burger.type = "button";
  burger.setAttribute("aria-label", "Відкрити меню");
  burger.setAttribute("aria-expanded", "false");

  const burgerLineFirst = document.createElement("span");
  const burgerLineSecond = document.createElement("span");
  const burgerLineThird = document.createElement("span");
  burger.append(burgerLineFirst, burgerLineSecond, burgerLineThird);

  inner.append(logo, nav, cta, burger);
  header.append(inner);

  return header;
};

export const initHeader = (onCategoryChange: () => void): void => {
  const burger = document.querySelector<HTMLButtonElement>(".header__burger");
  const nav = document.querySelector<HTMLElement>(".header__nav");
  const links = document.querySelectorAll<HTMLAnchorElement>(".header__link");
  const changeOfBusinessActivity = document.querySelector<HTMLButtonElement>(
    ".header__inner__change-business-activity",
  );

  if (!changeOfBusinessActivity) {
    document.body.append(renderChangeOfBusinessActivityButton(onCategoryChange));
  }

  if (!burger || !nav) {
    return;
  }

  const updateActiveLink = (): void => {
    const activeHash = window.location.hash || "#home";

    links.forEach((link) => {
      link.classList.toggle("header__link--active", link.hash === activeHash);
    });
  };

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("header__nav--open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) {
      nav.classList.remove("header__nav--open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("hashchange", updateActiveLink);
  updateActiveLink();
};
