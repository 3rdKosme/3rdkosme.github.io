fetch('https://ipapi.co/json/')
  .then(d => d.json())
  .then(d => document.querySelector('#ip').innerHTML = d.ip);