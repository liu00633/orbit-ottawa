const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

// NASA API Integration
const NASA_API_KEY = "pDBwXti4KC1asWMaH5HnoUXxoyvfYEUE7I5W1XOj"; // Replace with your actual API key
const NASA_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

fetch(NASA_API_URL)
  .then((response) => response.json())
  .then((data) => {
    const nasaImage = document.getElementById("nasa-image");
    const nasaCaption = document.getElementById("nasa-caption");

    if (data.media_type === "image") {
      nasaImage.src = data.url;
      nasaImage.alt = data.title;
    } else {
      nasaImage.src = "assets/landing-image.png"; // Replace with a local fallback image
      
    }

    nasaCaption.textContent = data.explanation || "No description available.";
  })
  .catch((error) => {
    console.error("Error fetching NASA image:", error);
    document.getElementById("nasa-caption").textContent = "Failed to load NASA Image.";
  });


// ScrollReveal and Swiper initializations
ScrollReveal().reveal(".header__image img", {
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});