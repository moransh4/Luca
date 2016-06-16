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
        speed: 1000,
    })

    var mySwiper2 = new Swiper('.swiper-container.shoes', {
        // Optional parameters
        pagination: '.pag-shoes',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        loop: true,
        paginationType: "custom",
        paginationCustomRender: function(swiper, current, total) {
            var names = [];
            $(".shoes .swiper-wrapper .swiper-slide").each(function(i) {
                names.push($(this).data("name"));
            });
            var text = "<span class='pContainer' style='background-color:transperent;text-align: center;width:100%; display:block'>";
            for (let i = 1; i <= total; i++) {
                if (current == i) {
                    text += "<span style='display:inline-block;border-top:3px solid #afd869;text-align:left;margin-right:4px;width: 20%;color:#afd869;padding:5px;'>" + names[i] + "</span>";
                } else {
                    text += "<span style='display:inline-block;border-top:3px solid white;text-align:left; margin-right:4px;width: 20%;color:white;padding:5px;'>" + names[i] + "</span>";
                }

            }
            text += "</span>";
            return text;
        }



    })



});
