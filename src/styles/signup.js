let signupform = document.querySelector("#signupform");
let errorDiv = document.querySelector(".err-div")


signupform.addEventListener("submit", async (e) => {
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
    // alert("test")

    if (data.error) {
      let messages;
    
      if (typeof data.message === "string") {
        messages = data.message;
      } else if (typeof data.message === "object") {
        messages = Object.values(data.message).join("<br>");
      } else {
        messages = "An unknown error occurred.";
      }
    
      errorDiv.innerHTML = messages;
      console.log(data);
    } else {
      errorDiv.innerHTML = "";
      signupform.reset(); // fix: you wrote `form.reset()` but should be `signupform.reset()`
    }
    

    } catch (error) {
      
      errorDiv.innerHTML = "errJson.message";
      console.log("error:", error);
    }
});



