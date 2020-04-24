let createData = '{"id": 0, "username" : "Korbinian","firstName": "Korbinian","lastName": "Ring","email": "k.ring@outlook.com","password": "root","phone": "23434134","userStatus": 0}'

function createUser() {
    REQ.open('POST', 'http://petstore.swagger.io/v2/user');
    REQ.setRequestHeader('Content-Type', 'Application/json');
    // REQ.setRequestHeader('Access-Control-Allow-Origin', '*'); leave this out, it throws error
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
        } else {
            console.log('handle error');
        }
    }
    REQ.send(createData); // Waht we want to send across
}

let buttCreateUser = document.querySelector('#buttCreateUser');
buttCreateUser.addEventListener('click', createUser);


