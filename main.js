
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
$currentTab1.addClass("on").find(".inner").addClass("on");
var tab1Move = function(){

    if ($currentTab1.index() == $(this).index()) { 
        return false;
    } else if ( $currentTab1.index() < $(this).index() ) {
        $currentTab1.removeClass("on").find(".inner").stop().animate({"left":"-100%"},"linear").css("left","100%");
        $currentTab1 = $(this);
        $currentTab1.addClass("on").find(".inner").addClass("on").css("left","100%").stop().animate({"left":"0px"},"linear");
    } else if ( $currentTab1.index() > $(this).index() ) {
        $currentTab1.removeClass("on").find(".inner").stop().animate({"left":"100%"},"linear").css("left","-100%");
        $currentTab1 = $(this);
        $currentTab1.addClass("on").find(".inner").addClass("on").css("left","-100%").stop().animate({"left":"0px"},"linear");
    }
  }
  $tab1_list.on("focusin", tab1Move );
  $tab1_list.on("click", tab1Move );
  




/*
$currentTab1.addClass("on").find(".inner").addClass("on");
$tab1_list.on("click focusin", function(){
    
  $currentTab1.removeClass("on").find(".inner").stop().animate({"left":"-100%"},"linear").css("left","100%");
  $currentTab1 = $(this);
  $currentTab1.addClass("on").find(".inner").addClass("on").css("left","100%").stop().animate({"left":"0px"},"linear");
  }
)
*/


var $prev = $(".prev"); 
var $next = $(".next");
var $tab2_list = $(".cpnt2 .tab li");
var $tab2_length = $(".cpnt2 .tab li").length-1;
var tab2_Index = 0;
var $currentTab2 = $tab2_list.eq(0);


$(document).ready(function(){

    var $tab2_Width = $(".cpnt2 .tab li").first().outerWidth();
    var $tab2_length = $(".cpnt2 .tab li").length;
    var $tab2_totalWidth = $(".cpnt2 .tab").width($tab2_Width*($tab2_length+2));
    $(".cpnt2 .tab li").first().addClass("tab2_first");
    $(".cpnt2 .tab li").last().addClass("tab2_last");
    $(".tab2_first").clone().appendTo(".cpnt2 .tab");
    $(".tab2_last").clone().prependTo(".cpnt2 .tab");
    $(".cpnt2 .tab").css({'left':-1*$tab2_Width+'px'});
    
    $next.on("click", function(){
        $(".cpnt2 .tab").stop();
        var $newPos = $(".cpnt2 .tab").position().left-(1*$tab2_Width);
        $(".cpnt2 .tab").animate({'left':$newPos+'px'},function() {
            if (Math.abs($newPos) == (($tab2_length+1)*$tab2_Width))
                {
                    $(".cpnt2 .tab").css({'left':-1*$tab2_Width+'px'});   
                }
         });
        return false;
    });

    $prev.on("click", function(){
        $(".cpnt2 .tab").stop();
        var $newPos = $(".cpnt2 .tab").position().left+(1*$tab2_Width);
        $(".cpnt2 .tab").animate({'left':$newPos+'px'},function() {
            if (Math.abs($newPos) == 0 )
                {
                    $(".cpnt2 .tab").css({'left':(-$tab2_length)*$tab2_Width+'px'});   
                }
         });
        return false;
    });
    
});


/*

$('#endless_slider_right').click(function(){
    $('#slider_images').stop(true,true); //complete any animation still running - in case anyone's a bit click happy... 
    var $newLeft = $('#slider_images').position().left-(1*$imgWidth);//calculate the new position which is the current position minus the width of one image
    $('#slider_images').animate({'left':$newLeft+'px'},function(){//slide to the new position...
       if (Math.abs($newLeft) == (($imgCount+1)*$imgWidth)) //...and if the slider is displaying the last image, which is the clone of the first image...
          {
          $('#slider_images').css({'left':-1*$imgWidth+'px'});//...reset the slider back to the first image without animating 
          }
       });
    return false;
 });
/*
$next.on("click", function(){

    $tab2_list.eq(tab2_Index).clone().append();
    
    if ( tab2_Index == $tab2_length) {
        tab2_Index = 0;
    } else {
        tab2_Index++;
    }
    $(".cpnt2 .tab").animate({"left":"-"+(tab2_Index*100)+"%"})

});


$prev.on("click", function(){
    $currentTab2.find(".tab_panel").css("left","0px").stop().animate({"left":"100%"}).parent("li").removeClass("on");
    if (tab2_Index == 0) {
        tab2_Index = $tab2_length;
    } else {
        tab2_Index--;     
    }
    $currentTab2  = $tab2_list.eq(tab2_Index);
    $currentTab2.addClass("on").find(".tab_panel").css("left","-100%").stop().animate({"left":"0px"},"linear");   
});
*/

var $more = $(".more");
var $close = $(".more .close");
var $tab3_list = $(".cpnt3 .tab li");

$close.on("click", function(e){
    e.stopPropagation();
    
    $(this).parents(".more").slideUp().parents(".tab").children("li").removeClass("on");
    $(".space").slideUp();

});
$tab3_list.on("click", function(){
    $(".space").hide();
    $(".more").hide();
    $tab3_list.removeClass("on");
    if ($(this).hasClass("first")){
        $(this).next().next().find(".space").slideDown();
    }
    if ($(this).hasClass("second")){
        $(this).next().find(".space").slideDown();
    }
    $(this).addClass("on");
    $(this).find(".more").slideDown();
    
});