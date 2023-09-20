var compteurImage=1; 
var totalimage=10; 

function slider(x){

    var image=document.getElementById('img'); 
    compteurImage=compteurImage + x; 
    image.src="images2/bourse"+ compteurImage+".jpg"; 

    if(compteurImage>=totalimage)
    {
        compteurImage=1; 
    }
    if(compteurImage<1){compteurImage=totalimage;}
}



function AutoSlider(){

    var image=document.getElementById('img'); 
    compteurImage=compteurImage + 1; 
    image.src="images2/bourse"+ compteurImage+".jpg"; 

    if(compteurImage>=totalimage)
    {
        compteurImage=1; 
    }
    if(compteurImage<1){compteurImage=totalimage;}
}

window.setInterval(AutoSlider,3000);