
var $header = $(".header");
var $gnb = $(".header nav > ul > li");

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


var $devs = $(".dev > li");
var $currentDev = $devs.eq(0);
    
$currentDev.addClass("on");
$devs.on("click", function(){
    $currentDev.removeClass("on");
    $currentDev = $(this) 
    $currentDev.addClass("on");     
    }
);

var $tab1_list = $(".cpnt1 .tab li")
var $currentTab1 = $tab1_list.eq(0)
var $reversePoint = $tab1_list.eq(2)

$currentTab1.addClass("on").find(".inner").addClass("on");
$tab1_list.on("click focusin", function(){

  $currentTab1.removeClass("on").find(".inner").stop().animate({"left":"-100%"},"linear").css("left","100%");
  $currentTab1 = $(this);
  $currentTab1.addClass("on").find(".inner").addClass("on").css("left","100%").stop().animate({"left":"0px"},"linear");
  }
)


$currentTab1.addClass("on").find(".inner").addClass("on");
$tab1_list.on("click focusin", function(){
    
  $currentTab1.removeClass("on").find(".inner").stop().animate({"left":"-100%"},"linear").css("left","100%");
  $currentTab1 = $(this);
  $currentTab1.addClass("on").find(".inner").addClass("on").css("left","100%").stop().animate({"left":"0px"},"linear");
  }
)

$(document).on('keydown', $reversePoint, function(e) {
    if (e.which == 9) {
        e.preventDefault();

        $tab1_list.on("focusin", function(){
            $currentTab1.removeClass("on").find(".inner").stop().animate({"left":"-100%"},"linear").css("left","100%");
            $currentTab1 = $(this);
            $currentTab1.addClass("on").find(".inner").addClass("on").css("left","100%").stop().animate({"left":"0px"},"linear");
            }
        
    }
});

