document.addEventListener("DOMContentLoaded", () => {
  // ======================
  // Counter Animation
  // ======================

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
        const target = Number(counter.dataset.target);
        const speed = target / 100;

        function updateCounter() {
          const current = Number(counter.innerText);

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

  // ======================
  // Contact Form Validation
  // ======================

  const form = document.querySelector(".contact-form");

  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector(".email");
  const subjectInput = form.querySelectorAll('input[type="text"]')[1];
  const messageInput = form.querySelector("textarea");

  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Name
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      nameInput.focus();
      return;
    }

    // Email
    if (!gmailRegex.test(emailInput.value.trim())) {
      alert("Please enter a valid Gmail address.");
      emailInput.focus();
      return;
    }

    // Subject
    if (subjectInput.value.trim() === "") {
      alert("Please enter the subject.");
      subjectInput.focus();
      return;
    }

    // Message
    if (messageInput.value.trim() === "") {
      alert("Please enter your message.");
      messageInput.focus();
      return;
    }

    alert("Message sent successfully! ✅");

    form.reset();
  });
});

// 897
