let currentSlide = 0
const slides = document.querySelectorAll(".slide")
const totalSlides = slides.length

// Function to show the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides
  updateSlidePosition()
}

// Function to show the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
  updateSlidePosition()
}

// Function to update slide position
function updateSlidePosition() {
  const slideWidth = slides[0].clientWidth
  const newPosition = -(currentSlide * slideWidth)
  document.querySelector(
    ".slides"
  ).style.transform = `translateX(${newPosition}px)`
}

// Add event listeners to buttons
document.querySelector(".next").addEventListener("click", nextSlide)
document.querySelector(".prev").addEventListener("click", prevSlide)

// Auto-slide every 6 seconds
setInterval(nextSlide, 6000)
