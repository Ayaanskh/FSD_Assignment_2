const reveals = document.querySelectorAll(".reveal");
const bars = document.querySelectorAll(".bar div");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");

      if (entry.target.classList.contains("skill")) {
        const bar = entry.target.querySelector(".bar div");
        bar.style.width = bar.dataset.level + "%";
      }
    }
  });
}, { threshold: 0.2 });

reveals.forEach(r => observer.observe(r));
