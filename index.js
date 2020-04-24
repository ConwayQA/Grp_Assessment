const REQ = new XMLHttpRequest();

let data = '{"id": 0, "username" : "Kring","firstName": "Korbinian","lastName": "Ring","email": "k.ring@outlook.com","password": "root","phone": "23434134","userStatus": 0}'

function createUser() {
    REQ.open('POST', 'http://petstore.swagger.io/v2/user');
    REQ.setRequestHeader('Content-Type', 'Application/json');
    // REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
    // REQ.setRequestHeader('access-control-allow-methods', '*');
    // REQ.setRequestHeader('access-control-allow-headers', '*');
    REQ.onload = () => {
        if (REQ.status === 201) {
            console.log(REQ.response);
        } else {
            console.log('handle error');
        }
    }
    REQ.send(data); // Waht we want to send across
}

let butt1 = document.querySelector('#butt1');
butt1.addEventListener('click', createUser);