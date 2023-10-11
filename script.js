const share = document.querySelector("#share");
const form = document.querySelector(".fact-form");

share.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    share.innerHTML = "Close";
  } else if (!form.classList.contains("hidden")) {
    form.classList.add("hidden");
    share.innerHTML = "SHARE A FACT";
  }
});
// SHARE A FACT butonuna event listener ekledim

// let votesInteresting = 23;
// let votesMindblowing = 9;
// let votesFalse = 4;
// const text = "Lisbon is the capital of Portugal";
// votesInteresting = votesInteresting + 1;
// console.log(votesInteresting);

// let totalUpvotes = votesInteresting + votesMindblowing;
// console.log("Upvotes: ", totalUpvotes);

// const isCorrect = votesFalse < totalUpvotes;

// console.log(isCorrect);

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}

let votesInteresting = 23;
let votesMindblowing = 9;
let votesFalse = 4;
if (votesInteresting === votesMindblowing) {
  console.log("Interesting and mindblowing are equal");
}
