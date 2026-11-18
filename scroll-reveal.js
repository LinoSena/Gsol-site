const revealTargets = document.querySelectorAll(
  [
    "main section .card",
    "main section .tile",
    "main section .photo",
    "main section .steps li",
    "main section .values > div",
    "main section:not(.cta-wrap) h2",
    "main section .lead-muted",
    "main section .cta-band",
    "footer .cols > div",
  ].join(","),
);

if (
  revealTargets.length &&
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-revealed");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal-on-scroll");
    observer.observe(target);
  });
}
