let logo = document.querySelector(".brand")


logo.addEventListener('click', ()=>{
    window.location.href = '/index.html'
})

fetch('http://localhost:5543/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: "Emmanuel77%",
      email: "adedayoforgit@g9mail.com",
      password: "20052907"
    })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));