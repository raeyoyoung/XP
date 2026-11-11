const posts = document.querySelector("#posts");
const articles = [...posts.querySelectorAll("article")];

articles.sort((first, second) => {
  const firstDate = first.querySelector("time").dateTime;
  const secondDate = second.querySelector("time").dateTime;
  return secondDate.localeCompare(firstDate);
});

posts.append(...articles);

let lastShortcut;

document.querySelectorAll("[data-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.dataset.open);
    lastShortcut = button;
    panel.hidden = false;
    panel.querySelector("h1").focus();
  });
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.closest(".window");
    panel.hidden = true;
    (lastShortcut ?? document.querySelector(".shortcut")).focus();
  });
});
