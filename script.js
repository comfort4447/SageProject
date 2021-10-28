
// menu toggle
/*
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

}());*/

(function(){
    'use strict'
    const submenu = document.querySelectorAll("ul li ul");

    function hideSubMenu(){
        //console.log(submenu)
        for(let i=0; i<submenu.length; i++){
            submenu[i].className ="hide-menu";
        }
    }
    hideSubMenu()


    const menuLink = document.querySelectorAll(".menu-link");
    //console.log(menuLink)

    for(let i=0; i<menuLink.length;i++){
        menuLink[i].addEventListener('click', function(evt){
            evt.preventDefault();
            //alert("clicked!")
            const thisMenu = this.parentNode.querySelector('ul');
            //alert(thisMenu.innerHTML);

            if (thisMenu.classList.contains('hide-menu')){

                hideSubMenu()
                thisMenu.className ="show-menu";
            }else{
                thisMenu.className ="hide-menu";
            }
        })
    } 
    
}());