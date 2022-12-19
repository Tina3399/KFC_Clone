let slidingDiv = document.getElementById("slidingImages");
// const hamburger = document.querySelector(".hamburger");
// hamburger.addEventListener("click", clickHamburger);
// const hamburgerDiv = document.getElementById("hamburger_click");
// const current_user = JSON.parse(localStorage.getItem("current_user")) || [];
// const user_name_div = document.getElementById("user_name_div");
// const login_icon = document.getElementById("login_icon");
// const logout_icon = document.getElementById("logout_icon");
// logout_icon.addEventListener("click", logout_user);
// const user_name = document.getElementById("user_name");
// console.log(current_user);

// if (current_user.length > 0) {
//   if (current_user[0].isAuth) {
//     user_name_div.style.display = "block";
//     user_name.innerText = current_user[0].name;
//     logout_icon.style.display = "block";
//     login_icon.style.display = "none";
//   }
// }

const loader = document.getElementById("pre_loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
});

let imagesArr = [
  {
    backgroundImage:
      "https://images.ctfassets.net/9tka4b3550oc/55mEMDPuGwsehw9WbzruZj/ac5975a497c26a90187322c253e85e74/DesktopFamousBowlHero.jpg?q=75&w=1680",
    h5: "$5 FAMOUS BOWL",
    h1: "OUR $5 FINGER LICKIN’ GOOD GIFT TO YOU.",
    p: "Enjoy what you really love this season. Like creamy Mashed Potatoes topped with juicy fried chicken, gravy, and more. Get the KFC Famous Bowl now for only $5.",
    p2: "Order Now →",
  },
  {
    backgroundImage:
      "https://images.ctfassets.net/9tka4b3550oc/7byW6uLLjrWDbFhL8yaPxL/2c38c1de18383e1dfb0c86bfc446b1eb/Property_1_V1__3_.jpg?q=75&w=1680",
    h5: "",
    h1: "TIME TO SHARE A BUCKET & GIVE BACK",
    p: "This holiday season, we've teamed up with Blessings in a Backpack to share meals & spread hope to families in need.",
    p2: "Order Now →",
  },
  {
    backgroundImage:
      "https://images.ctfassets.net/9tka4b3550oc/48m6wy48Jn4QLc3xwP7qF2/8eb43e7133ce06372a2a3f282346c874/Property_1_V1__5_.jpg?q=75&w=1680",
    h5: "HOLIDAY VARIETY MEAL",
    h1: "SHARE A NEW TRADITION",
    p: "Gather your loved ones for the Holiday Variety Meal at KFC and share more than just a meal this season.",
    p2: "Order Now →",
  },
  {
    backgroundImage:
      "https://images.ctfassets.net/9tka4b3550oc/5iDWCXeatcvi2Ag3hBHoaW/0ac170659497c08c294775009f6b93a3/FotballMealDeal_Desktop_Home_Hero_1440x640.jpg?q=75&w=1680",
    h5: "",

    h1: "CROWD-PLEASIN’ FOR FOOTBALL SEASON.",
    p: "Feed the whole team with meals made for sharin’.",
    p2: "Order Now →",
  },
];

let i = 0;

showData();

setInterval(() => {
  showData();
}, 2000);
function showData() {
  slidingDiv.innerHTML = null;
  let mainDiv = document.createElement("div");

  mainDiv.setAttribute("id", "slidingDiv");

  mainDiv.style.backgroundImage = `url(${imagesArr[i].backgroundImage})`;
  let h5 = document.createElement("h5");
  h5.innerText = `${imagesArr[i].h5}`;
  let h1 = document.createElement("h1");
  h1.innerText = `${imagesArr[i].h1}`;
  let p = document.createElement("p");
  p.innerText = `${imagesArr[i].p}`;
  let anchorTag = document.createElement("p");
  anchorTag.innerText = `${imagesArr[i].p2}`;
  mainDiv.append(h5, h1, p, anchorTag);
  slidingDiv.append(mainDiv);
  console.log(i);

  i++;
  if (i === 2) {
    h5.style.color = "black";
    h1.style.color = "black";
    p.style.color = "black";
    anchorTag.style.color = "black";
  }
  if (i === imagesArr.length) {
    i = 0;
  }
}
