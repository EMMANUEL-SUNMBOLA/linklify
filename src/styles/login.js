let path = window.location.href

if(path = '/dashboard.html'){
  // window.location.href = '/signin.html'
  alert("subarashi")
}else{
  alert(path.slice(-13))
}