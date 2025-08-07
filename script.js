// Typing animation
const typingText = document.getElementById("typing-text")
const textToType = "Hi, I'm Panashe Bradley Seremani, a passionate Digital Marketer, creative Designer."
let i = 0

function typeWriter() {
  if (i < textToType.length) {
    typingText.innerHTML += textToType.charAt(i)
    i++
    setTimeout(typeWriter, 100)
  }
}

// Start typing animation when page loads
window.addEventListener("load", () => {
  setTimeout(typeWriter, 1000)
})

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const blurOverlay = document.getElementById("blur-overlay")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
  blurOverlay.classList.toggle("active")
  document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto"
})

// Close menu when clicking on overlay
blurOverlay.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
  blurOverlay.classList.remove("active")
  document.body.style.overflow = "auto"
})

// Smooth scrolling function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  const navHeight = document.querySelector(".navbar").offsetHeight
  const sectionTop = section.offsetTop - navHeight

  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  })

  // Close mobile menu if open
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
  blurOverlay.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Add click event listeners to nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const sectionId = link.getAttribute("href").substring(1)
    scrollToSection(sectionId)
  })
})

// Read more/less functionality
let isExpanded = false

function toggleReadMore() {
  const moreContent = document.getElementById("about-more")
  const button = document.getElementById("read-more-btn")

  if (!isExpanded) {
    moreContent.classList.add("expanded")
    button.textContent = "Read Less"
    isExpanded = true
  } else {
    moreContent.classList.remove("expanded")
    button.textContent = "Read More"
    isExpanded = false
  }
}

// Resume section functionality
let activeResumeSection = "education"

function toggleResumeSection(sectionName) {
  // Remove active class from all buttons and sections
  document.querySelectorAll(".resume-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  document.querySelectorAll(".resume-section-content").forEach((section) => {
    section.classList.remove("active")
  })

  // Add active class to clicked button and corresponding section
  event.target.classList.add("active")
  document.getElementById(sectionName).classList.add("active")

  activeResumeSection = sectionName
}



// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.1)"
  }
})

// Add click functionality to project placeholders
document.querySelectorAll(".project-placeholder").forEach((placeholder) => {
  placeholder.addEventListener("click", () => {
    alert("Click here to upload your project image")
  })
})

// Add click functionality to about image placeholder
document.querySelector(".image-placeholder").addEventListener("click", () => {
  alert("Click here to upload your profile picture")
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".project-card, .resume-item, .skill-category").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "all 0.6s ease"
  observer.observe(el)
})

// Add pulse animation to hire me button periodically
setInterval(() => {
  const hireBtn = document.querySelector(".btn-primary.pulse")
  if (hireBtn) {
    hireBtn.style.animation = "none"
    setTimeout(() => {
      hireBtn.style.animation = "pulse 2s infinite"
    }, 100)
  }
}, 10000)
