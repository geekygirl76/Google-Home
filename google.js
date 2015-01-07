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
        if (!($(event.target).closest(".user-li").hasClass("user-li"))){
            if(!($(".user-frame").hasClass("no-display"))){
                $(".user-frame").toggleClass("no-display");
            }
        } ;
        if (!($(event.target).closest(".plus-li").hasClass("plus-li"))){

            if(!($(".plus-frame").hasClass("no-display"))){
                $(".plus-frame").toggleClass("no-display");
            }
        } else{
            event.stopPropagation();
            return;
            // console.log($(".plus-li").hasClass("no-display"));
//             console.log("keep the same");
        };
    });
    $("#close-icon").on("click",function(event){

        event.stopPropagation();
        event.preventDefault();
        $("#public").css({"display":"none"});
        $("#add-input").attr("placeholder","To: Add names, circles, or email addresses");
    });
    $(".grid-li").on("click",function(event){

        event.preventDefault();
        $(this).find(".more-ul").addClass("no-display");
        $(this).find(".frame").toggleClass("no-display");
    });
    $(".frame").on("click",function(event){
        event.stopPropagation();

    });
    $(".bell-frame").on("click",function(event){
        event.stopPropagation();

    });
    $(".plus-frame").on("click",function(event){
        event.stopPropagation();

    });
    $(".user-li").on("click",function(event){

        event.preventDefault();
        $(".user-frame").toggleClass("no-display");
    });
    $(".plus-li").on("click",function(event){
        event.preventDefault();
        $(".plus-frame").toggleClass("no-display");
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
    $("#user-face").on("click", function(event){
        event.stopPropagation();
        event.preventDefault();
        $(".modal").removeClass("no-display");
        $("header").css({"color":"#ccc","background":"#bbb"});
        $("main").css({"color":"#ccc"});
        $("footer").css({"color":"#ccc","background":"#bbb"});
        $(".plus-frame").css({"color":"#ccc","background":"#bbb"});

    });
    $("#search-close").on("click",function(event){
        $(".modal").addClass("no-display");
        $("header").css({"color":"black","background":"white"});
        $("main").css({"color":"black"});
        $("footer").css({"color":"black","background":"#eee"});
        $(".plus-frame").css({"color":"black","background":"#eee"});
    });
    var words= ["I'm Feeling Lucky", "I'm Feeling Hungry",
"I'm Feeling Wonderful", "I'm Feeling Playful","I'm Feeling Trendy",
    "I'm Feeling Artistic","I'm Feeling Puzzled",
    "I'm Feeling Generous"];


    $(".roll").hover(function(){
        var n = Math.floor(Math.random() * words.length);
        $(this).prop("value",words[n]);
    },
    function(){
        $(this).prop("value","I'm Feeling Lucky");
    }
    );
});