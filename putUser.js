const REQ = new XMLHttpRequest();

let data = '{"username": "David"}';

function putUser() {
  let obj = JSON.parse(data);
  REQ.open("PUT", `http://petstore.swagger.io/v2/user/${obj.username}`);
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
      console.log(REQ.response.title);
    } else {
      console.log(`Handle Error!`);
    }
  };
  //REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  //REQ.responseType = "json";
  REQ.send(data);
}

let buttPutUser = document.querySelector("#butGetLogin");
buttPutUser.addEventListener("click", putUser);
