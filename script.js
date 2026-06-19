const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

const copyEmail = async (email, trigger) => {
  try {
    await navigator.clipboard.writeText(email);
    const originalText = trigger.textContent;
    trigger.textContent = "Copied";

    window.setTimeout(() => {
      trigger.textContent = originalText;
    }, 1600);
  } catch {
    window.prompt("Copy Bruna's email address:", email);
  }
};

document.querySelectorAll("[data-copy-email]").forEach((element) => {
  element.addEventListener("click", () => {
    copyEmail(element.dataset.copyEmail, element);
  });
});
