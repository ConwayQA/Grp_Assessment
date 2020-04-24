const REQ = new XMLHttpRequest();

let dataForLogOut =
  '{"id": 0, "username": "MattyB", "password": "noice"}';

function getLogOut() {
  REQ.open(
    "GET",
    "https://petstore.swagger.io/v2/user/logout?username=${}&password=${}"
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

  REQ.send(dataForLogOut);
}

let buttGetLogout = document.querySelector("#butGetLogout");
buttGetLogin.addEventListener("click", getLogOut);