document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".image-switcher").forEach((switcher) => {
        const buttons = switcher.querySelectorAll(".image-switcher__button");
        const panels = switcher.querySelectorAll(".image-switcher__panel");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                buttons.forEach((other) => {
                    const isActive = other === button;
                    other.classList.toggle("is-active", isActive);
                    other.setAttribute("aria-pressed", String(isActive));
                });
                panels.forEach((panel) => {
                    panel.hidden = panel.dataset.panel !== button.dataset.panel;
                });
            });
        });
    });
});
