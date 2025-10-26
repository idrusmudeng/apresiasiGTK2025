document.addEventListener("DOMContentLoaded", () => {
  const ring = document.querySelector('.ring');
  let rotation = 0;

  function rotateAI() {
    rotation += 0.6;
    ring.style.transform = `rotateY(${rotation}deg) rotateZ(${rotation}deg)`;
    requestAnimationFrame(rotateAI);
  }

  rotateAI();
});
