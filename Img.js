const REQ = new XMLHttpRequest();
function uploadImg() {
     let petID1 = document.getElementById("petId").value;
    // let petCaption1 = document.getElementById("petCaption").value;
    // let petImg1 = document.getElementById("petImg").value;
    // let imgForm1 = document.getElementById("imgForm").value;
    //var form = document.forms.namedItem("fileinfo");

    let formElement = document.getElementById("imgForm");
    let formData = new FormData(formElement);

    
    //let formData = new FormData(imgForm1);
    // formData.append("petId", petID1);
    // formData.append("additionalMetadata", petCaption1);
    // formData.append("file", petImg1.file[0]);
    

    // let data = ({"petId": petID1,
    //                             "additionalMetadata": petCaption1,
    //                             "file": petImg1 });

    REQ.open('POST', `http://petstore.swagger.io/v2/pet/${petID1}/uploadImage`);
    REQ.setRequestHeader("accept", "application/json");
    REQ.setRequestHeader('Content-Type', 'multipart/form-data');
    REQ.onload = () => {
        if (REQ.status === 200) { 
            console.log(REQ.response);
            console.log("img uploaded");
        } else {
            console.log('handle error');
        }
    }
    console.log(...formData);
    REQ.send(...formData);
    //window.location.href = "./ViewImgs.html";
}

let btnImg = document.querySelector('#imgBtn');
btnImg.addEventListener('click',function (event) {
    event.preventDefault();
    uploadImg();
} );