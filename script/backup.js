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