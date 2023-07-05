const button = document.getElementById('buttonLog');
button.addEventListener('click', (e) => {
    e.preventDefault();

    let username = document.getElementById('user').value;
    let contrasena = document.getElementById('password').value;

    console.log(username);
    console.log(contrasena);
    
    if (username === "" || contrasena === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Some data is missing. Please try again.',
        });
    } else {
        fetch('http://127.0.0.1:8000/saludo')
            .then(response => response.text())
            .then(data => {
                console.log(data);
                alert(data);
            })
            .catch(error => console.log(error));
        window.location.replace("../../index.html");
        // if (logUser === null) {
        //     Swal.fire({
        //         icon: 'warning',
        //         title: 'No user?',
        //         html:'Log up ' + '<a href="../pages/register.html">here</a>',
        //       });
        // } else {
        //     sessionStorage.setItem('logUser', username);
        //     window.location.replace("../index.html");
        // }
    }
});