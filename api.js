fetch('http://localhost:5543/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: "emmanuel",
      email: "adedayoforgit@gmail.com",
      password: "12345678"
    })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));