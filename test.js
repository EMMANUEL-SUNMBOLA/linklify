let err = '{"error":true,"message":{"username":"username should be at least 8 characters","email":"email cannot be empty","pwd":"password cannot be empty"}}';

let errJson = JSON.parse(err)
console.log(errJson.message)