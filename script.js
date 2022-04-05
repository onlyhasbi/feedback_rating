const thanksModal = document.querySelector("#thankYou");
const submitButton = document.querySelector(".buttonSubmit");
const container = document.querySelector(".thanks");
const rating = document.querySelectorAll(".ratingItem");
const ratingNumber = document.querySelector("#ratingNumber");
var ratingCount = 0;

rating.forEach((item) => {
  item.addEventListener("click", (e) => {
    const active = document.querySelector(".active");
    const target = e.target;

    if (active === target) {
      target.classList.remove("active");
      this.ratingCount = 0;
      return;
    } else if (active && active !== target) {
      active.classList.remove("active");
      target.classList.add("active");
    } else {
      target.classList.add("active");
    }

    ratingCount = e.target.textContent;
  });
});

submitButton.addEventListener("click", () => {
  ratingNumber.textContent = ratingCount;
  thanksModal.showModal();
});

container.addEventListener("click", () => {
  thanksModal.close();
});
