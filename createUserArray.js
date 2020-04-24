const REQ = new XMLHttpRequest();

let data = '[{"id": 0,"username": "string","firstName": "string", "lastName": "string","email": "string","password": "string","phone": "string","userStatus": 0}]';
function postTodo() {
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
        } else {
            console.log('handle error');
        }
    }
    REQ.open('POST', 'http://petstore.swagger.io/v2/user/createWithArray');
    REQ.setRequestHeader('Content-Type', 'Application/json');
    //REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
    REQ.send(data); // Waht we want to send across
}

let butt1 = document.querySelector('#butt1');
butt1.addEventListener('click', postTodo);

