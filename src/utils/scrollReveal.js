
export function initScrollReveal() {
  let lastScrollY = window.scrollY;
  let direction = "down";

  const updateDirection = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY !== lastScrollY) {
      direction = currentScrollY > lastScrollY ? "down" : "up";
      document.documentElement.dataset.scrollDirection = direction;
      lastScrollY = currentScrollY;
    }
  };

  window.addEventListener("scroll", updateDirection, {
    passive: true,
  });

  document.documentElement.dataset.scrollDirection = direction;

  const elements = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        } else {
          // Allow the element to animate again when it re-enters.
          entry.target.classList.remove("is-revealed");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => {
    window.removeEventListener("scroll", updateDirection);
    observer.disconnect();
  };
}
