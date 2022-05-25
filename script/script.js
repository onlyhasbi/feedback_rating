const done = document.querySelector("#done");
const submit = document.querySelector(".rating-submit");
const setRating = document.querySelector("#done-value");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const isSelected = document.querySelector('input[name="rating"]:checked');
  const ratingValue = isSelected ? isSelected.value : 0;

  setRating.textContent = ratingValue;
  done.showModal();
});

done.addEventListener("click", () => {
  done.close();
});
