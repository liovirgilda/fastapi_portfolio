// Dark mode button

const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {

  const currentTheme = html.getAttribute("data-bs-theme");

  if (currentTheme === "light") {
    html.setAttribute("data-bs-theme", "dark");
    toggleBtn.textContent = "☀️ Light";
  } else {
    html.setAttribute("data-bs-theme", "light");
    toggleBtn.textContent = "🌚 Dark";
  }

});

// Footer copyright year 

document.getElementById('year').textContent = new Date().getFullYear();