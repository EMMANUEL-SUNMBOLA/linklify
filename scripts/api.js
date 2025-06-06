let form = document.querySelector("#signupform");
let errorDiv = document.querySelector(".err-div")


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // alert("test")
  
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

    if(data.error){

      let messages = Object.values(data.message).join("<br>");
      errorDiv.innerHTML = messages;
      console.log(data);
    }else{

      errorDiv.innerHTML = "";
      form.reset();
    }

    } catch (error) {
      
      errorDiv.innerHTML = "errJson.message";
      console.log("error:", error);
  }
});
