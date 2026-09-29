document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".code-popup-button");
    if (buttons.length === 0) {
        return;
    }

    const overlay = document.createElement("div");
    overlay.className = "code-popup";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML = '<code class="code-popup__content"></code>';
    document.body.appendChild(overlay);

    const content = overlay.querySelector(".code-popup__content");

    function openPopup(html) {
        content.innerHTML = html;
        overlay.classList.add("is-open");
    }

    function closePopup() {
        overlay.classList.remove("is-open");
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const text = button.parentElement.querySelector(".code-popup-text");
            openPopup(text ? text.innerHTML : "");
        });
    });

    overlay.addEventListener("click", closePopup);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closePopup();
        }
    });
});
