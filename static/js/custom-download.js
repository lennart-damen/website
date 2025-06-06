document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card a").forEach(anchor => {
    const href = anchor.getAttribute("href");
    if (href && href.match(/\.(png|jpe?g|gif|webp|svg)$/i)) {
      anchor.setAttribute("download", "");
    }
  });
});