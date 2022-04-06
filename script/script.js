const done = document.querySelector("#done");
const ratingSubmit = document.querySelector(".rating-submit");
const ratingValue = document.querySelectorAll(".rating-value");
const setValue = document.querySelector("#done-value");
var value = 0;

ratingValue.forEach((item) => {
  item.addEventListener("click", (e) => {
    const active = document.querySelector(".active");
    const target = e.target;

    if (active === target) {
      target.classList.remove("active");
      this.value = 0;
      return;
    } else if (active && active !== target) {
      active.classList.remove("active");
      target.classList.add("active");
    } else {
      target.classList.add("active");
    }

    this.value = e.target.textContent;
  });
});

ratingSubmit.addEventListener("click", () => {
  setValue.textContent = value;
  done.showModal();
});

done.addEventListener("click", () => {
  done.close();
});
