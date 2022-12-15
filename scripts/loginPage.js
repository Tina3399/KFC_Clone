const form = document.querySelector("form");

let userArray;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let login_data = {
    email: form.email.value,
    password: form.password.value,
  };
  fetch_user_data();
});

async function fetch_user_data() {
  try {
    let response = await fetch(
      "https://63986b8e044fa481d69ccef0.mockapi.io/users_data"
    );
    let res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
