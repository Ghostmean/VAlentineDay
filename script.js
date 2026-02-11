document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const envelope = document.querySelector(".envelope");
  const paper = document.querySelector(".envelope__paper");
  const closeLetterBtn = document.getElementById("closeLetter");

  // Первая страница: кнопки "Да" и "Нет"
  if (yesButton && noButton) {
    let scale = 1;
    const maxScale = 2.8;

    noButton.addEventListener("click", () => {
      if (scale >= maxScale) return;

      scale = Math.min(maxScale, scale + 0.25);
      yesButton.classList.add("grow");
      yesButton.style.transform = `scale(${scale})`;
      yesButton.style.zIndex = "2";

      if (scale >= maxScale) {
        noButton.disabled = true;
        noButton.style.pointerEvents = "none";
        noButton.style.opacity = "0";
      }
    });

    yesButton.addEventListener("click", () => {
      window.location.href = "letter.html";
    });
  }

  // Вторая страница: конверт и бумажка
  if (envelope) {
    envelope.addEventListener("click", () => {
      if (!envelope.classList.contains("open")) {
        envelope.classList.add("open");
      }
    });
  }

  if (closeLetterBtn && envelope) {
    closeLetterBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      envelope.classList.remove("open");
    });
  }
});

