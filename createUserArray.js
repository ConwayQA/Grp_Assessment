const REQ = new XMLHttpRequest();
function createUser() {
    let data = `[{"id": 0,"username": "${document.getElementById("username").value}","firstName": "${document.getElementById("firstName").value}", "lastName": "${document.getElementById("lastName").value}","email": "${document.getElementById("email").value}","password": "${document.getElementById("password").value}","phone": "${document.getElementById("phoneNr").value}","userStatus": 0}]`;
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
            console.log("user created");
            window.location.href = "http://127.0.0.1:5500/2020/4/24/Group_Assessment/index.html";
        } else {
            console.log('handle error');
        }
    }
    REQ.open('POST', 'http://petstore.swagger.io/v2/user/createWithArray');
    REQ.setRequestHeader('Content-Type', 'Application/json');
    //REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
    REQ.send(data); // Waht we want to send across
}

let buttCreateUser = document.querySelector('#buttCreateUser');
buttCreateUser.addEventListener('click', createUser);

