// -------------- JavaScript for marquee text script --------------
document.addEventListener("DOMContentLoaded", () => {
  const marqueeText = document.querySelector(".marquee-text");
  const containerWidth = document.querySelector(".marquee-container").offsetWidth;

  let animationFrameId;
  let currentPosition = containerWidth;

  function animate() {
    const textWidth = marqueeText.offsetWidth;

    if (currentPosition + textWidth <= 0) {
      currentPosition = containerWidth; // Reset position when text scrolls out of view
    }
    marqueeText.style.transform = `translateX(${currentPosition}px)`;
    currentPosition -= 2; // Adjust speed by changing this value
    animationFrameId = requestAnimationFrame(animate);
  }

  function startMarquee() {
    animationFrameId = requestAnimationFrame(animate);
  }

  function stopMarquee() {
    cancelAnimationFrame(animationFrameId);
  }

  // Start marquee immediately
  startMarquee();

  // Pause on hover
  marqueeText.addEventListener("mouseenter", stopMarquee);
  marqueeText.addEventListener("mouseleave", startMarquee);
});
// -------------- End of JavaScript for marquee text script --------------

// -------------- script to Detect Scroll and Change Navbar Background --------------
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("megamenu-section");
  var navlogo = document.getElementsByClassName("navlogo");

  if (window.scrollY > 100) {
    // Change background after scrolling 100px
    navbar.classList.add("scrolled");
    navlogo.classList.add("scrolled-logo");
  } else {
    navbar.classList.remove("scrolled");
    navlogo.classList.remove("scrolled-logo");
  }
});
// -------------- End of script to Detect Scroll and Change Navbar Background --------------
