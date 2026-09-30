document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".size-slider").forEach((slider) => {
        const range = slider.querySelector(".size-slider__range");
        const image = slider.querySelector(".size-slider__image");
        const value = slider.querySelector(".size-slider__value");

        function update() {
            image.style.width = `${range.value}%`;
            if (value) {
                value.textContent = `${range.value}%`;
            }
        }

        range.addEventListener("input", update);
        update();
    });
});
