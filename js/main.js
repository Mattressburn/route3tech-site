(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  if (!toggle || !mobileNav) return;

  const closeMobile = () => {
    mobileNav.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = !mobileNav.hidden;
    mobileNav.hidden = isOpen;
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  mobileNav.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A") closeMobile();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 760) closeMobile();
  });
})();
