document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Enlarged image");
    overlay.innerHTML = '<img alt="">';
    document.body.appendChild(overlay);

    const lightboxImg = overlay.querySelector("img");

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || "";
        overlay.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        overlay.classList.remove("is-open");
        lightboxImg.removeAttribute("src");
        lightboxImg.alt = "";
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".gallery-item img, .featured-image img").forEach((img) => {
        img.addEventListener("click", () => {
            openLightbox(img.currentSrc || img.src, img.alt);
        });
    });

    overlay.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
});
