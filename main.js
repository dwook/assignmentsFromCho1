
var $header = $(".header");
var $gnb = $(".header nav > ul > li");
var $devs = $(".dev > li");
var $currentDev = $devs.eq(0);

$gnb.on("mouseenter", function(){
    $header.addClass("on")  
    if ( $(this).hasClass("devNav") ) {   
        $(this).addClass("on").find(".dev").stop().slideDown()
    } else {
        $(this).addClass("on")
    }
}).on("mouseleave", function(){
    $header.removeClass("on")
    if ( $(this).hasClass("devNav") ) {
        $(this).find(".dev").stop().hide().parent(".devNav").removeClass("on")
    } else {
        $(this).removeClass("on")
    }
})

    
$currentDev.addClass("on");
$devs.on("click", function(){
    $currentDev.removeClass("on");
    $currentDev = $(this) 
    $currentDev.addClass("on");     
    }
);

