$(document).ready(function() {
    console.log("ready!");
    //initialize swiper when document ready  
    var mySwiper1 = new Swiper('.second-section .swiper-container', {
        // Optional parameters
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical', 
        loop: true, 
        autoplay: 6000,
        speed:1000,
    })

     var mySwiper2 = new Swiper('.swiper-container.shoes', {
        // Optional parameters
         pagination: '.pag-shoes',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        loop: true,
        

    })


    
});
