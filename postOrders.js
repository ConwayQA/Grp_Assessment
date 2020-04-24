const REQ = new XMLHttpRequest();

// POSTING INFORMATION TO THE SERVER
let data =
  '{"id": 1,"petId": 1,"quantity": 2,"shipDate": "2020-04-24T09:04:54.797Z","status": "placed","complete": true}';
function postOrders() {
  REQ.open("POST", "http://petstore.swagger.io/v2/store/order");
  REQ.setRequestHeader("Content-Type", "Application/json");
  // REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
    } else {
      console.log("handle error");
    }
  };
  REQ.send(data); // Waht we want to send across
}

let postorder = document.querySelector("#postorder");
postorder.addEventListener("click", postOrders);
