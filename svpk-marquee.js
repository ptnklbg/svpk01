/************** start of script for marquee text script  **************/
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
    currentPosition -= 1; // Adjust speed by changing this value
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
/************** end of script for marquee text script  **************/
