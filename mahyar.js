document.addEventListener('DOMContentLoaded',()=>{
  const counters = document.querySelectorAll(".counter");

  let started = false;

  function startCounters() {
    if (started) return;

    const statsSection = document.querySelector(".stats");
    const sectionTop = statsSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > sectionTop + 100) {
      started = true;

      counters.forEach((counter) => {
        const target = +counter.dataset.target;
        const speed = target / 100;

        function updateCounter() {
          const current = +counter.innerText;

          if (current < target) {
            counter.innerText = Math.ceil(current + speed);

            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target + "+";
          }
        }

        updateCounter();
      });
    }
  }

  window.addEventListener("scroll", startCounters);

  startCounters();

})