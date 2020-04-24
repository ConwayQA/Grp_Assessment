const REQ = new XMLHttpRequest();

let data =
  '{"id": 0, "username": "DavidW", "firstName": "David", "lastName": "Williams", "email": "dwill@gmail.com", "password": "noice", "phone": "07584962578", "userStatus": 0}';

function getLogin() {
  REQ.open(
    "GET",
    "https://petstore.swagger.io/v2/user/login?username=user1&password=user1"
  );
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.onload = () => {
    if (REQ.status === 200) {
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

let buttGetLogin = document.querySelector("#butGetLogin");
buttGetLogin.addEventListener("click", getLogin);
