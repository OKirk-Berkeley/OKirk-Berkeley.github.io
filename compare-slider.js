document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".compare-slider__frame").forEach((frame) => {
        const range = frame.querySelector(".compare-slider__range");

        function setPosition(percent) {
            const clamped = Math.min(100, Math.max(0, percent));
            range.value = clamped;
            frame.style.setProperty("--pos", `${clamped}%`);
        }

        function positionFromPointer(event) {
            const rect = frame.getBoundingClientRect();
            setPosition(((event.clientX - rect.left) / rect.width) * 100);
        }

        frame.addEventListener("pointerdown", (event) => {
            frame.setPointerCapture(event.pointerId);
            positionFromPointer(event);
        });

        frame.addEventListener("pointermove", (event) => {
            if (frame.hasPointerCapture(event.pointerId)) {
                positionFromPointer(event);
            }
        });

        range.addEventListener("input", () => setPosition(Number(range.value)));
        setPosition(Number(range.value));
    });
});
