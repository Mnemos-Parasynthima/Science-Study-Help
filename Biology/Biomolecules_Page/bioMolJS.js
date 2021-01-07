// Get the modal
var modal1 = document.getElementById('lipid1Modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('lipid1');
var modalImg1 = document.getElementById("lipid01");
var captionText1 = document.getElementById("caption1");
img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
    modal1.style.display = "none";
} 



/***Second modal***/
// Get the modal
var modal2 = document.getElementById('aminoAcidModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('aminoAcid3');
var modalImg2 = document.getElementById("aminoAcid01");
var captionText2 = document.getElementById("caption2");
img2.onclick = function() {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal2.style.display = "none";
}



/***Third modal***/
// Get the modal
var modal3 = document.getElementById('nucleicAcidModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('nucleicAcid2');
var modalImg3 = document.getElementById("nucleicAcid01");
var captionText3 = document.getElementById("caption3");
img3.onclick = function() {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal3.style.display = "none";
}