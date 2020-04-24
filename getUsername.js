const REQ = new XMLHttpRequest();

let data =
  '{"id": 0, "username": "DavidW", "firstName": "David", "lastName": "Williams", "email": "dwill@gmail.com", "password": "noice", "phone": "07584962578", "userStatus": 0}';

function getUsername() {
  REQ.open("GET", "http://petstore.swagger.io/v2/user/user1");
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.onload = () => {
    if (REQ.status === 404) {
      console.log(REQ.response);
      console.log(REQ.response.title);
      document.querySelector("#resp").innerHTML = REQ.response[0].title;
    } else {
      console.log(`Handle Error!`);
    }
  };
  //REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  //REQ.responseType = "json";
  REQ.send(data);
}

let buttGetUsername = document.querySelector("#butt1");
butt1.addEventListener("click", getUsername);
