// Get the modal
let modal1 = document.getElementById("infoModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img1 = document.getElementById('imgId');
let modalImg1 = document.getElementById("divId");
let captionText1 = document.getElementById("someCaption");
img1.onclick = () => {
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = () => { modal1.style.display = "none"; } 