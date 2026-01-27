// contact.js
document.addEventListener("DOMContentLoaded", function () {
  // Protection anti bots simple (retarde l affichage)
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    const email = emailLink.getAttribute("href");
    emailLink.removeAttribute("href");

    setTimeout(function () {
      emailLink.setAttribute("href", email);
    }, 800);
  }

  // Copier email au clic
  document.querySelectorAll(".tag").forEach(function (tag) {
    const badge = tag.querySelector(".tag-badge a");
    if (!badge) return;

    badge.addEventListener("click", function (e) {
      if (badge.href.startsWith("mailto:")) {
        e.preventDefault();
        navigator.clipboard.writeText(badge.textContent.trim());

        badge.textContent = "Copie";
        setTimeout(function () {
          badge.textContent = "lucas.per64120@gmail.com";
        }, 1200);
      }
    });
  });
});
