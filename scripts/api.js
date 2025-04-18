let form = document.querySelector("#signupform");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  try {
    const response = await fetch("http://localhost:5543/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await response.json();
    console.log(data);

    // if (data.error.error) {
    //   console.log("data:", data.error.messages);
    // }
    form.reset();
  } catch (error) {
    console.log("error:", error);
  }
});
