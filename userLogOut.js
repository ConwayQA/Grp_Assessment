const REQ = new XMLHttpRequest();

function getLogOut() {
  REQ.open(
    "GET","http://petstore.swagger.io/v2/user/logout"
  );
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
      window.location.href = "http://127.0.0.1:5500/2020/4/24/Group_Assessment/index.html?username=&password=";    

    } else {
      console.log(`Handle Error!`);
    }
  };

  REQ.send();
}

let buttGetLogout = document.querySelector("#buttGetLogout");
buttGetLogout.addEventListener("click", getLogOut);
