const REQ = new XMLHttpRequest();

let resp = document.querySelector('#resp');
let butt1 = document.querySelector('#butt1');

function storeInventory() {

    REQ.onload = () => {
        if (REQ.status === 200) { // Status code 200: 
            let responseObject = REQ.response;
            console.log(responseObject);
        }
        else {
            console.log(`Ooops, something went wrong`)
        }
    }

    REQ.open('GET', 'http://petstore.swagger.io/v2/store/inventory');
    REQ.setRequestHeader('Content-type', "Application/json");
    REQ.responseType = 'json';
    REQ.send();
}

butt1.addEventListener('click', storeInventory); 