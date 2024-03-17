let divImage = document.getElementById("photoGal");
// Create input element and add it to the doom
let input = document.createElement("input");
input.type = "file";
document.body.appendChild(input);
//if any change happen to the input the image src will chang also
input.addEventListener("change", function(event){
    
    let file = event.target.files[0];
    let reader = new FileReader();
    
    reader.onload = function(e) {
        imgElm.src = e.target.result;
    };
    
    reader.readAsDataURL(file);
   
})


//creat and attach image to the dom tree
let imgElm = document.createElement("img");
imgElm.src = "1.png";
//set default width and hight so we can do zoom in and out
imgElm.width = 200;
imgElm.height = 200;

divImage.appendChild(imgElm);

//creat and delete button
let delBtn = document.createElement("button");
delBtn.innerText = "delete";
divImage.appendChild(delBtn);


delBtn.addEventListener("click" ,function(){
    imgElm.remove();
    delBtn.remove();
    
})


//zooming
let factor = 1.5;
let zoomInBtn = document.createElement("button");
zoomInBtn.innerText = " + ";
divImage.appendChild(zoomInBtn);

zoomInBtn.addEventListener("click" ,function(){
    //zoom in event handler
    imgElm.width *= factor;
    imgElm.height *= factor;

})


let zoomOutBtn = document.createElement("button");
zoomOutBtn.innerText = " - ";
divImage.appendChild(zoomOutBtn);
zoomOutBtn.addEventListener("click" ,function(){
    //zoom out event handler
    imgElm.width /= factor;
    imgElm.height /= factor;
})