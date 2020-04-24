const REQ = new XMLHttpRequest();

let data =
  '{"id": 0, "username": "MattyB", "firstName": "Mattie", "lastName": "Burt", "email": "matthewaaronburt@gmail.com", "password": "noice", "phone": "0758756543", "userStatus": 0}';

function getLogOut() {
  REQ.open(
    "GET",
    "https://petstore.swagger.io/v2/user/logout?username=user1&password=user1"
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

  REQ.send(data);
}

let buttGetLogout = document.querySelector("#butGetLogout");
buttGetLogin.addEventListener("click", getLogOut);