const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", clickHamburger);
const hamburgerDiv = document.getElementById("hamburger_click");
const current_user = JSON.parse(localStorage.getItem("current_user")) || [];
const user_name_div = document.getElementById("user_name_div");
const login_icon = document.getElementById("login_icon");
const logout_icon = document.getElementById("logout_icon");
logout_icon.addEventListener("click", logout_user);
const user_name = document.getElementById("user_name");
console.log(current_user);

if (current_user.length > 0) {
  if (current_user[0].isAuth) {
    user_name_div.style.display = "block";
    user_name.innerText = current_user[0].name;
    logout_icon.style.display = "block";
    login_icon.style.display = "none";
  }
}

function clickHamburger() {
  hamburger.classList.toggle("active");

  if (hamburgerDiv.style.display === "block") {
    hamburgerDiv.style.display = "none";
  } else {
    hamburgerDiv.style.display = "block";
  }
}

function logout_user() {
  current_user[0].isAuth = false;

  localStorage.clear("current_user");
  location.reload();
}
