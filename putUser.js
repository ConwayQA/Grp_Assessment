let putUserData = '{"id": "765959", "username": "Korbinian"}';

function putUser() {
  let obj = JSON.parse(putUserData);
  REQ.open("PUT", `http://petstore.swagger.io/v2/user/${obj.username}`);
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
  REQ.send(putUserData);
}

let buttPutUser = document.querySelector("#buttPutUser");
buttPutUser.addEventListener("click", putUser);
