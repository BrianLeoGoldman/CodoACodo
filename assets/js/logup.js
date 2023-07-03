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
        Swal.fire({
            icon: 'success',
            title: 'Welcome!',
            html:'Check your mailbox & Go to ' + '<a href="../pages/login.html">Log In</a>',
          });
        // const newUsuario = new Usuario (username, email, password);
        // let newUsuarioJSON = ACA VA LA API DEL BACK?;
        // sessionStorage.setItem(username, newUsuarioJSON);
        // sessionStorage.setItem("logUser", username);
        // window.location.replace("../../index.html");
    }
});