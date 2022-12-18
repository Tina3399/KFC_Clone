const current_user = JSON.parse(localStorage.getItem("current_user")) || [];
console.log(current_user);
const cart_bag_empty = document.getElementById("cart_bag_empty");
const subtotal = document.getElementById("subtotal");
const cart_arr = JSON.parse(localStorage.getItem("cart_arr")) || [];
const cart_items_div = document.getElementById("cart_items_div");
const total_qty = document.getElementById("total_qty");

console.log(cart_arr);
if (cart_arr.length > 0) {
  cart_bag_empty.style.display = "none";
  cart_items_div.style.display = "block";
}
if (current_user[0]) {
  show_icon.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i>`;
  show_icon.addEventListener("click", () => logout_user);
  current_user[0].products.push(cart_arr);
} else {
  show_icon.innerHTML = `<i class="fa-sharp fa-solid fa-user"></i>`;
}

const tbody = document.querySelector("tbody");
show_cart_items(cart_arr);
function show_cart_items() {
  tbody.innerHTML = null;
  cart_arr.forEach((element, index) => {
    console.log(element);
    const table_row = document.createElement("tr");
    const name_td = document.createElement("td");
    name_td.innerText = element.name;
    const image_td = document.createElement("img");
    image_td.src = element.image;
    const price_td = document.createElement("td");
    price_td.innerText = element.price;
    const qty_td = document.createElement("td");
    qty_td.innerText = element.count;
    const total_td = document.createElement("td");
    total_td.innerText = +element.price * +element.count;
    const remove_td = document.createElement("td");
    remove_td.innerHTML = '<i class="fa-sharp fa-solid fa-circle-xmark"></i>';

    remove_td.addEventListener("click", () => {
      remove_row(index);
    });

    table_row.append(name_td, image_td, price_td, qty_td, total_td, remove_td);

    tbody.append(table_row);
  });
  showSubTotal();
  total_qty.innerText = cart_arr.length + " items ";
}

function showSubTotal() {
  let total = 0;

  for (let i = 0; i < cart_arr.length; i++) {
    total += cart_arr[i].price * cart_arr[i].count;
  }
  subtotal.innerText = "₹" + total;
}

function remove_row(index) {
  console.log(index);
  cart_arr.splice(index, 1);

  localStorage.setItem("cart_arr", JSON.stringify(cart_arr));
  show_cart_items();
  console.log(cart_arr);
}

function logout_user() {
  current_user[0].isAuth = false;
  localStorage.clear("cart_arr");
  localStorage.clear("current_user");
  window.location.href = "loginPage.html";
}
