const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const signup_data = {
    name: form.first_name.value + " " + form.last_name.value,
    email: form.email.value,
    password: form.password.value,
    products: [],
  };

  addUser(signup_data);

  form.first_name.value = "";
  form.last_name.value = "";
  form.email.value = "";
  form.password.value = "";

  console.log(signup_data);
});

async function addUser(signup_data) {
  try {
    const response = await fetch(
      "https://63986b8e044fa481d69ccef0.mockapi.io/users_data",
      {
        method: "POST",
        body: JSON.stringify(signup_data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let resp = await response.json();
    console.log(resp);
  } catch (err) {
    console.log("err", err);
  }
}