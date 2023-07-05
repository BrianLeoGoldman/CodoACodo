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
        var csrftoken = getCookie('csrftoken');
        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                //'X-CSRFToken': csrftoken,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${username}&contrasena=${contrasena}`
        }
        fetch('http://127.0.0.1:8000/marylu/login/', options)
            .then(response => response.text())
            .then(data => {
                console.log(data);
                alert(data);
            })
            .catch(error => console.log(error));
        //window.location.replace("../../index.html");
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

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}