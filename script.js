let semBtn = document.querySelector(".sem-btn");
let courses = document.querySelector(".phonetic-courses");


semBtn.addEventListener("click", () => {
  if (courses.classList.contains("hidden")) {
    courses.classList.remove("hidden");
    semBtn.textContent = "Hide 1st Semester 🔺";
  } else {
    courses.classList.add("hidden");
    semBtn.textContent = "Show 1st Semester 🔻";
  }
});

