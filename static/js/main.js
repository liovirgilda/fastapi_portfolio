// Typed navbar message

const navbar_typing = new Typed('#typing-text', {
    strings: [
      "Welcome to my website",
      "A Software Developer by heart",
      "A Data Analyst Expert"
    ],
    typeSpeed: 110,
    backSpeed: 50,
    loop: true
  });

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