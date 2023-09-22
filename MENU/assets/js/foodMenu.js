let foodContainer = document.querySelector(".food-container");

const fooditem = [
  {
    FoodName: "Cheese paratha",
    foodimg: "./assets/img/Almuerzo_1.jpeg",
    price: "RS 250",
    type: "Breakfast",
    des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love.",
  },
  {
    FoodName: "Cheese paratha",
    foodimg: "./assets/img/Almuerzo_3.jpeg",
    price: "RS 250",
    type: "Shakes",
    des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love.",
  },
];

const food = fooditem.map((item) => {
  const listitem = ` <div class="food-items ${item.type}">
    <!-- content div -->
        <img src="${item.foodimg}" alt="">
        <div class="details">
            <div class="details-sub">
                <h5>${item.FoodName}</h5>
                <h5 class="price">${item.price}</h5>
            </div>
            <p>${item.des}</p>
        </div>
    </div>`;
  foodContainer.innerHTML += listitem;
});

const foodbox = document.querySelectorAll(".foodbox");
const menu = document.querySelectorAll("ul");

menu.forEach((m) => {
  m.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    foodbox.forEach((box) => {
      box.classList.add("d-none");
      if (e.target.innerHTML === "All") {
        box.classList.remove("d-none");
      } else if (e.target.innerHTML === "Breakfast") {
        if (box.classList.contains("breakFast")) {
          box.classList.remove("d-none");
        }
      } else if (e.target.innerHTML === "Lunch") {
        if (box.classList.contains("Lunch")) {
          box.classList.remove("d-none");
        }
      } else if (e.target.innerHTML === "Shakes") {
        if (box.classList.contains("Shakes")) {
          box.classList.remove("d-none");
        }
      } else if (e.target.innerHTML === "Dinner") {
        if (box.classList.contains("Dinner")) {
          box.classList.remove("d-none");
        }
      }
    });
  });
});
