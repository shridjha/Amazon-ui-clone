
let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

let startSlider = 0;
let endSlider = (imgItem.length - 1)*100;

slideBtnLeft.addEventListener("click", handleLeftBtn);

function handleLeftBtn() {
    if(startSlider < 0){
        startSlider = startSlider +100;
    }
    
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
}
    

;

slideBtnRight.addEventListener("click", handleRightBtn);

function handleRightBtn() {
     if(startSlider > -endSlider){
         startSlider = startSlider -100;
        
    }
    
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

//auto slide
 function autoSlide(){ 
       if (startSlider > -endSlider){
        startSlider = startSlider -100;}
        
        else(startSlider = 0);

        handleRightBtn();
     }
     //startSlider = 0;
     setInterval(autoSlide, 2000);


     //sidebar navigation

     const sidebarNavigation = document.getElementById("sidebar-container");
     const sidebarOpenNav= document.getElementById("open-nav-sidebar");
     const sidebarCloseNav= document.getElementById("close-btn");
        
     
     sidebarOpenNav.addEventListener("click",()=>{
            sidebarNavigation.classList.toggle("sidebar-show");
        });

     sidebarCloseNav.addEventListener("click",()=>{ 
        sidebarNavigation.classList.toggle("sidebar-show");});  


    