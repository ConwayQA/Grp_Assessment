let loginData = '{"username": "Korbinian","password": "root"}';

function getLogin() {
  let obj = JSON.parse(loginData);
  REQ.open("GET",`https://petstore.swagger.io/v2/user/login?username=${obj.username}&password=${obj.password}`);
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
  REQ.send(data);
}

let buttGetLogin = document.querySelector("#buttGetLogin");
buttGetLogin.addEventListener("click", getLogin);
