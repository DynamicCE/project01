const share = document.querySelector("#share");
const form = document.querySelector(".fact-form");

share.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else if (!form.classList.contains("hidden")) {
    form.classList.add("hidden");
  }
});
// SHARE A FACT butonuna event listener ekledim
