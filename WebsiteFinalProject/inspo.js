const card = document.querySelectorAll('.card-inner');

card.forEach((card) => {
     card.addEventListener("click", () => {
          card.classList.toggle("is-flipped");
     });
});