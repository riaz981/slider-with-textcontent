var myTimer = [4000,4000,4000];
var myIndex = 0;
carousel();

function carousel() {
    var i;
    
    var x = document.getElementsByClassName("mySlides");
    var overlay = document.getElementsByClassName("after");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    myIndex++;
    
    if (myIndex > x.length) {myIndex = 1}   
    console.log(myTimer[myIndex-1]); 
    x[myIndex-1].style.display = "block"; 
    setTimeout(carousel, myTimer[myIndex-1]);    
}