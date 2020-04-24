const REQ = new XMLHttpRequest();

function getOrders() {
    REQ.onload = () => {
        if (REQ.status === 200) {
            // console.log(REQ);
            let obj = REQ.response
            console.log(obj);
        } else {
            console.log(`Handle Error!`);
        }
    }
    REQ.open('GET', 'http://petstore.swagger.io/v2/store/order/1');
    REQ.setRequestHeader('Content-Type', 'Application/json');
    // REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
    REQ.responseType = 'json';
    REQ.send();
}

let getorder = document.querySelector('#getorder');
getorder.addEventListener('click', getOrders);