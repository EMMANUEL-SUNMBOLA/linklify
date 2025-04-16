let form = document.querySelector("#signupform");

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");


  fetch('http://localhost:5543/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

    form.reset();

})
