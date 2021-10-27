
// menu toggle

(function(){
    "use strict";

    document.querySelector(".fa-bars").addEventListener("click", function(){
        const menu = document.querySelector(".wrapper ul");
        //alert("menu bar clicked!");
        //this.setAttribute("class",".fa-times");
    
        //menu.style.top = "50px";
    
        if(menu.style.top =="-252px"){
            menu.style.top="50px";
        }else{
            menu.style.top= "-252px";
        }
        
    });

}());
