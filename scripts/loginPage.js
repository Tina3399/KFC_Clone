const form = document.querySelector("form");
const wrong_email = document.getElementById("wrong_email");
const wrong_password = document.getElementById("wrong_password");
let userArray;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let login_data = {
    email: form.email.value,
    password: form.password.value,
  };
  fetch_user_data(login_data);
});

async function fetch_user_data(login_data) {
  try {
    let response = await fetch(
      `https://63986b8e044fa481d69ccef0.mockapi.io/users_data?email=${login_data.email}`
    );
    let res = await response.json();
    if (res[0].password === login_data.password) {
      res[0].isAuth = true;
      localStorage.setItem("current_user", JSON.stringify(res));
      window.location.href = "index.html";
      console.log(res);
    } else {
      wrong_password.innerText = "Incorrect Password!";
    }
  } catch (error) {
    wrong_email.innerText = "Please enter correct Email!";
    console.log(error);
  }
}
