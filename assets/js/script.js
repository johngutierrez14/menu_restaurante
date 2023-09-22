let foodContainer = document.querySelector(".food-container");

const fooditem = [
  {
    FoodName: "Carne en Bisteck",
    foodimg: "./assets/img/Carme_bistek.jpeg",
    price: "$15.000",
    type: "Almuerzos",
    des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love.",
  },
];

const food = fooditem.map((item) => {
  const listitem = ` <div class="col foodbox ${item.type}">
        <!-- content div -->
        <div class="card h-100 shadow-sm">
            <!-- image -->
            <img src="${item.foodimg}" class="card-img-top" alt="">

            <div class="card-body">
                <div class="clearfix mb-3">
                    <h3 class="float-start">${item.FoodName}</h3>
                    <span class="float-end price-hp">${item.price}</span>
                </div>
                <div class="des my-3 ">
                    <p>${item.des}</p>
                </div>
            </div>
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
      if (e.target.innerHTML === "Todos") {
        box.classList.remove("d-none");
      } else if (e.target.innerHTML === "Desayunos") {
        if (box.classList.contains("Desayunos")) {
          box.classList.remove("d-none");
        }
      } else if (e.target.innerHTML === "Almuerzos") {
        if (box.classList.contains("Almuerzos")) {
          box.classList.remove("d-none");
        }
      } else if (e.target.innerHTML === "Cenas") {
        if (box.classList.contains("Cenas")) {
          box.classList.remove("d-none");
        }
      } else if (e.target.innerHTML === "Bebidas") {
        if (box.classList.contains("Bebidas")) {
          box.classList.remove("d-none");
        }
      }
    });
  });
});
