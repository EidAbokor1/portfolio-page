const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const storageKey = "eid-portfolio-theme";
const root = document.documentElement;

const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem(storageKey);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const setTheme = (theme) => {
  root.dataset.theme = theme;
  themeToggle?.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
};

setTheme(getPreferredTheme());

if (year) {
  year.textContent = new Date().getFullYear();
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  });
}

window.addEventListener(
  "pointermove",
  (event) => {
    root.style.setProperty("--cursor-x", `${event.clientX}px`);
    root.style.setProperty("--cursor-y", `${event.clientY}px`);
  },
  { passive: true },
);

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}
