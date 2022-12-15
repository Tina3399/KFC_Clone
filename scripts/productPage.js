const product = JSON.parse(localStorage.getItem("product"));
const increase_button = document.getElementById("increase");
const decrease_button = document.getElementById("decrease");
const total_quantity = document.getElementById("total_quantity");
const container = document.getElementById("main_product");
const name_tag = document.getElementById("product_name");
showData(product);

function showData(product) {
  name_tag.innerText = product.name;
  let sub_div = document.createElement("div");
  let image_div = document.createElement("div");
  image_div.setAttribute("id", "product_image_div");
  let image = document.createElement("img");
  image.src = product.image;
  image_div.append(image);
  sub_div.append(image_div);
  container.append(sub_div);
}
