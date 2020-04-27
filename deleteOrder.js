const REQ = new XMLHttpRequest();
function orderDel() {
    let deleteData = '{"orderId" : "9"}';
    let obj = JSON.parse(deleteData);
    REQ.open('DELETE', `http://petstore.swagger.io/v2/store/order/${obj.orderId}`,true);
    REQ.setRequestHeader('Content-Type', 'Application/json');

    REQ.onload = () => {
        if (REQ.status === 200) { // Status code 200: 
            let x = REQ.response;
            console.log(x);
        }
        else {
            console.log(`Ooops, something went wrong`)
        
        }
    }
    REQ.send(deleteData);
};



butt1.addEventListener('click', orderDel); 

