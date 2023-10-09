document.addEventListener("DOMContentLoaded", function () {
  const voteButtons = document.querySelectorAll(".vote-button");

  voteButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const voteType = event.target.closest(".vote-button").dataset.voteType;
      const voteCountSpan = event.target
        .closest(".vote-button")
        .querySelector(".vote-count");
      let currentCount = parseInt(voteCountSpan.textContent, 10);

      voteCountSpan.textContent = currentCount + 1;
    });
  });
});
