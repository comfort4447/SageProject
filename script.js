// Flexslider
$(window).load(function(){
    $(".flexslider").flexslider({
        animation: "slide",
        slideshowSpeed: 4000,
        direction: "horizontal",
        reverse: true,
        pauseOnHover: true,
    });
});

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


(function(){
    "use strict"
    const menu = document.querySelector(".fa-bars");
    const sidebar = document.getElementById('sidebar');
    sidebar. style.display ="block";

    menu.addEventListener('click', function(){
        //alert('captured!')
       if(sidebar. style.display =="block"){
        sidebar. style.display ="none";
       }else{
        sidebar. style.display ="block";
       }

    })

}());