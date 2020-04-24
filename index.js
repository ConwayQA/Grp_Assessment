const REQ = new XMLHttpRequest();

let data = '{ "username" : "asdf" , "firstName" : "asdf2" , "lastName" : "asdf3" }';

function createUser() {
    REQ.open('POST', 'http://petstore.swagger.io/v2/user');
    REQ.setRequestHeader('Content-Type', 'Application/json');
    REQ.onload = () => {
        if (REQ.status === 201) {
            console.log(REQ.response);
        } else {
            console.log('handle error');
        }
    }
    REQ.send(data);
}

let butt1 = document.querySelector('#butt1');
butt1.addEventListener("click",createUser);