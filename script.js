const share = document.querySelector("#share");
const form = document.querySelector("fact-form");
share.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  }
});
