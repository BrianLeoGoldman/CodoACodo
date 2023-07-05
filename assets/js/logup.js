class Usuario {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
};

const button = document.getElementById('buttonLog');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log(username);
    console.log(email);
    console.log(password);
    
    if (username === "" || email === "" || password === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Some data is missing. Please try again.',
          });
    } else {
      const options = {
        method: "POST",
        mode: "cors",
        headers: {
            //'X-CSRFToken': csrftoken,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}&email=${email}`
      }
      fetch('http://127.0.0.1:8000/marylu/register/', options)
          .then(response => response.text())
          .then(data => {
              console.log(data);
              let success_msg = 'New user created successfully'
              if (data === success_msg) {
                  sessionStorage.setItem(username, username);
                  sessionStorage.setItem("logUser", username);
                  Swal.fire({
                    icon: 'success',
                    title: 'Welcome!',
                    html:'Check your mailbox & Go to ' + '<a href="../pages/login.html">Log In</a>',
                  });
                  window.location.replace("../../index.html");
              } else {
                  Swal.fire({
                      icon: 'warning',
                      title: 'There was an issue with the registration process',
                      html:'Log up ' + '<a href="../pages/register.html">here</a>',
                  });
              }
          })
        .catch(error => console.log(error));
    }
});