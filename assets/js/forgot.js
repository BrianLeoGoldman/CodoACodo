const button = document.getElementById('buttonForgot');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;

    console.log(email);
    
    if (email === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your registration email',
        });
    } else {
        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                //'X-CSRFToken': csrftoken,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${email}`
        }
        fetch('http://127.0.0.1:8000/marylu/forgot/', options)
            .then(response => response.text())
            .then(data => {
                console.log(data);
                let success_msg = 'Email delivery successful'
                if (data === success_msg) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Check your email box!',
                        html:'Go to ' + '<a href="../pages/login.html">Log In</a>',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Email delivery failed',
                        html:'Please check the email direction and try again',
                    });
                }
            })
            .catch(error => console.log(error));
    }
});