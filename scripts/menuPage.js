const loader = document.getElementById("pre_loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});
let filter_data_arr;
const current_user = JSON.parse(localStorage.getItem("current_user")) || [];
const cart_arr = JSON.parse(localStorage.getItem("cart_arr")) || [];

if (current_user.length > 0) {
  if (current_user[0].isAuth) {
    user_name_div.style.display = "block";
    user_name.innerText = current_user[0].name;
    logout_icon.style.display = "block";
    login_icon.style.display = "none";
  }
}

const filter = document.getElementById("filter");
filter.addEventListener("click", sortProducts);

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
    filter_data_arr = res;
    display_items(res);
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
    featured.innerHTML = null;
    data[i].forEach((element, index) => {
      console.log(element);
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

      const cart_show_div = document.createElement("div");
      cart_show_div.setAttribute("id", "cart_show_div");

      const showProdDiv = document.createElement("div");
      showProdDiv.setAttribute("class", "showDiv");

      const showProdText = document.createElement("span");
      showProdText.innerText = "View";
      showProdText.setAttribute("class", "showText");
      const showProd = document.createElement("span");
      showProd.innerHTML = '<i class="fa-solid fa-eye"></i>';
      showProd.setAttribute("class", "show_eyes");

      const cartDiv = document.createElement("div");
      cartDiv.setAttribute("class", "showDiv");
      const cart = document.createElement("span");
      cart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
      cart.addEventListener("click", () => {
        add_to_cart(element);
      });
      const cartText = document.createElement("span");
      cartText.innerText = "Add To Cart";
      cartText.setAttribute("class", "showText");

      imgDiv.append(image);
      showProdDiv.append(showProd, showProdText);
      cartDiv.append(cart, cartText);
      cart_show_div.append(showProdDiv, cartDiv);
      container.append(imgDiv, name, calories, price, cart_show_div);

      showProd.addEventListener("click", () => {
        showDetails(element);
      });
      featured.append(container);
    });
  });
}

function showDetails(element) {
  element.count = element.count + 1;
  window.location.href = "productPage.html";

  localStorage.setItem("product", JSON.stringify(element));
}
function sortProducts(e) {
  console.log(e.target.value);
  const temp_filter_arr = [...filter_data_arr.map((element) => [...element])];
  if (e.target.value === "lth") {
    const filtered_arr = temp_filter_arr.map((el) =>
      el.sort((a, b) => a.price - b.price)
    );
    display_items(filtered_arr);
  } else if (e.target.value === "htl") {
    const filtered_arr = temp_filter_arr.map((el) =>
      el.sort((a, b) => b.price - a.price)
    );
    display_items(filtered_arr);
  }
  if (e.target.value === "") {
    display_items(temp_filter_arr);
  }
}

function logout_user() {
  current_user[0].isAuth = false;

  localStorage.clear("current_user");
  location.reload();
}

// function add_to_cart(element) {
//   let isPresent=false;
//   for(let i=0;i<cart_arr.length;i++){
//     if(cart_arr[i].id===element.id){
//       isPresent=true;
//     }
//   }

// }
