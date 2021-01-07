// Get the modal
let modal1 = document.getElementById("infoModal"); //Id could be <content#(if multiple)>Modal

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img1 = document.getElementById('imgId'); //Id could be <content#()>
let modalImg1 = document.getElementById("divId"); //Id could be <content0#()>
let captionText1 = document.getElementById("someCaption"); //Id could be <caption#>
img1.onclick = () => {
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = () => { modal1.style.display = "none"; } 