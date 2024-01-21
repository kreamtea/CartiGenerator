

function randomImageGenerator(){
    document.querySelector(".button").addEventListener("click", function(){

    var randomNumber = Math.floor(Math.random()*6)+1;
    var randomImage = "./images/carti-" + randomNumber + ".jpeg";

    document.querySelector(".carti-image").setAttribute("src",randomImage);
        
    });
};

randomImageGenerator();