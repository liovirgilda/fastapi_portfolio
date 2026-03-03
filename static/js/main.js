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

// Footer copyright year 

document.getElementById('year').textContent = new Date().getFullYear();