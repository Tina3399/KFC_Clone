const all_data = [
  "featured",
  "bucket",
  "tenders",
  "sandwiches",
  "fried_chicken",
  "pot_piles_bowls",
  "a_la_carte",
  "sides",
  "sauces",
  "desserts",
  "beverages",
];

Promise.all(
  all_data.map((url) =>
    fetch(`jsonData/${url}.json`).then((resp) => resp.json())
  )
)
  .then((res) => {
    display_items(res);
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

function display_items(data) {
  const display_items_arr = [
    "featured_products",
    "bucket_items",
    "tender_items",
    "sandwiches_items",
    "fried_chicken_items",
    "pot_pies_bowls_items",
    "a_la_carte_items",
    "sides_items",
    "sauces_items",
    "deserts_items",
    "beverages_items",
  ];

  display_items_arr.forEach((el, i) => {
    const featured = document.getElementById(el);
    data[i].forEach((element, index) => {
      const container = document.createElement("div");
      container.setAttribute("id", "main_card");
      const imgDiv = document.createElement("div");
      const image = document.createElement("img");
      image.src = element.image;
      const name = document.createElement("p");
      name.innerText = element.name;
      const calories = document.createElement("p");
      calories.innerText = "calories : " + element.calories;
      const price = document.createElement("p");
      price.innerText = "₹" + element.price;

      imgDiv.append(image);
      container.append(imgDiv, name, calories, price);
      container.addEventListener("click", () => {
        showDetails(element);
      });
      featured.append(container);
    });
  });
}

function showDetails(element) {
  console.log(element);
  window.location.href = "productPage.html";

  localStorage.setItem("product", JSON.stringify(element));
}
