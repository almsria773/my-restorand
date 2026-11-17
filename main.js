let navbar=document.querySelector(".navbar")
let link=document.querySelector(".links")
let icon=document.querySelector(".icon-navbar")
icon.onclick=function(){
          link.classList.toggle("active")
          navbar.classList.toggle("active")
}
// const swiper = new Swiper('.swiper', {
 
//   slidesPerView:3,
//   spaceBetween:30,
  

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable:true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// })  
 var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
         spaceBetween: 40,        
          pagination: {           el: '.swiper-pagination',
          clickable: true,
        },
        navigation:{
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',         },
          breakpoints:{
            768:{
                       slidesPerView: 2,
                        spaceBetween: 40,
            },
            992:{
                slidesPerView: 3,
                spaceBetween: 40,

            }
          }
       
      });