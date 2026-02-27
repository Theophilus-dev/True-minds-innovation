const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



  const items = document.querySelectorAll(".category-item");

  items.forEach(item => {
    item.addEventListener("click", () => {

      // remove active from all
      items.forEach(el => el.classList.remove("active"));

      // add active to clicked one
      item.classList.add("active");

    });
  });



  
  const plusBtn = document.querySelector(".plus");
  const minusBtn = document.querySelector(".minus");
  const qtyNumber = document.querySelector(".qty-number");

  let quantity = 1;

  plusBtn.addEventListener("click", () => {
    quantity++;
    qtyNumber.textContent = quantity;
  });

  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      qtyNumber.textContent = quantity;
    }
  });
