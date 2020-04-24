const REQ = new XMLHttpRequest();

let userData =
  '{"username": "Korbinian"}';

function getUsername() {
  let obj = JSON.parse(userData);
  REQ.open("GET", `http://petstore.swagger.io/v2/user/${obj.username}`);
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
    } else {
      console.log(`Handle Error!`);
    }
  };
  //REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  //REQ.responseType = "json";
  REQ.send(userData);
}

let buttGetUsername = document.querySelector("#buttGetUsername");
buttGetUsername.addEventListener("click", getUsername);
