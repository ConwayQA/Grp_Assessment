const REQ = new XMLHttpRequest();

let dataMakePet = {
    "id": 97239163502680,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }

  function addPet() {
      REQ.open('POST', 'https://petstore.swagger.io/v2/pet');
      REQ.setRequestHeader('Content-Type', 'Application/json');

      REQ.onload = () => {
          if(REQ.status === 200){
              console.log(REQ.response);
              console.log(REQ.response.title);
              document.querySelector("#resp").innerHTML = REQ.response[0].title;
          } else {
              console.log('HANDLE ERROR');
          }

      }
      REQ.send(dataMakePet);
  }

  let buttAddPet = document.querySelector("#buttAddPet");
  buttGetUsername.addEventListener("click", addPet);