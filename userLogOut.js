const REQ = new XMLHttpRequest();

function getLogOut() {
  REQ.open(
    "GET","http://petstore.swagger.io/v2/user/logout"
  );
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
      window.location.href = "./index.html?username=&password=";    

    } else {
      console.log(`Handle Error!`);
    }
  };

  REQ.send();
}

let buttGetLogout = document.querySelector("#buttGetLogout");
buttGetLogout.addEventListener("click", getLogOut);
