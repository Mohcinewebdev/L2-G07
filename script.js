document.querySelectorAll(".sem-btn").forEach((btn) => {

  btn.addEventListener("click", () => {

    const courses = btn.parentElement.nextElementSibling;
    const arrow = btn.querySelector(".arrow");

    courses.classList.toggle("hidden");

    arrow.textContent =
      courses.classList.contains("hidden") ? "🔻" : "🔺";

  });

});

