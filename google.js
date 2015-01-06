$(function(){
    $(document).on("click",function(event){
        event.stopPropagation();
        if (!($(event.target).closest(".grid-li").hasClass("grid-li"))){
            if (!($(".frame").hasClass("no-display"))){
                $(".frame").toggleClass("no-display");
            };
            if (!($(".more-ul").hasClass("no-display"))){
                $(".more-ul").toggleClass("no-display");
            };
        } ;
        if (!($(event.target).closest(".bell-li").hasClass("bell-li"))){
            if(!($(".bell-frame").hasClass("no-display"))){
                $(".bell-frame").toggleClass("no-display");
            }
        } ;
    });
    $(".grid-li").on("click",function(event){

        event.preventDefault();
        $(this).find(".more-ul").addClass("no-display");
        $(this).find(".frame").toggleClass("no-display");
    });
    $("li.more").on("click", function(event){
        event.stopPropagation();
        event.preventDefault();

        $(".more-ul").toggleClass("no-display");
    });

    $(".bell-li").on("click", function(event){

        event.preventDefault();
        $(this).find("div.bell-frame").toggleClass("no-display");
    });
});