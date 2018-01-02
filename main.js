$(document).ready(function(){
    gnb();
    bg();
    cpnt1();
    cpnt2();
    cpnt3();
});

/* GNB */
function gnb() {
    var $header = $(".header");
    var $gnb = $(".header nav > ul > li");
    var $devs = $(".box_dev > li");
    var $currentDev = $devs.eq(0);

    $gnb.on("mouseenter", function(){
        $header.addClass("on")  
        if ( $(this).hasClass("li_dev") ) {   
            $(this).addClass("on").find(".box_dev").stop().slideDown()
        } else {
            $(this).addClass("on")
        }
    }).on("mouseleave", function(){
        $header.removeClass("on")
        if ( $(this).hasClass("li_dev") ) {
            $(this).find(".box_dev").stop().hide().parent(".li_dev").removeClass("on")
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
}

/* index페이지 배경 */
function bg(){
    $(".box_bg").on("mousemove", function(e){

        var posX = e.pageX;
        var posY = e.pageY;
    
        $(".bg_shape1").css({"bottom":0 -(posY/200)+"%", "right":0 -(posX/300)+"%"})
        $(".bg_shape2").css({"bottom":21 -(posY/300)+"%", "right":17 +(posX/200)+"%"})
        $(".bg_shape3").css({"bottom":24 +(posY/200)+"%", "right":-18 +(posX/300)+"%"})
        $(".bg_shape4").css({"bottom":20 -(posY/300)+"%", "right":28 -(posX/200)+"%"})
    })
}


/* index1페이지 컴퍼넌트 */
function cpnt1(){
    var $tab1_list = $(".type_cpnt1 .tab li")
    var $currentTab1 = $tab1_list.eq(0)
    $currentTab1.addClass("on").find(".inner").addClass("on");
    var tab1Move = function(){

        if ($currentTab1.index() == $(this).index()) { 
            return false;
        } else if ( $currentTab1.index() < $(this).index() ) {
            $currentTab1.removeClass("on").find(".inner").stop().animate({"left":"-100%"}).css("left","100%");
            $currentTab1 = $(this);
            $currentTab1.addClass("on").find(".inner").addClass("on").css("left","100%").stop().animate({"left":"0px"});
        } else if ( $currentTab1.index() > $(this).index() ) {
            $currentTab1.removeClass("on").find(".inner").stop().animate({"left":"100%"}).css("left","-100%");
            $currentTab1 = $(this);
            $currentTab1.addClass("on").find(".inner").addClass("on").css("left","-100%").stop().animate({"left":"0px"});
        }
    }
    $tab1_list.on("focusin", tab1Move );
    $tab1_list.on("click", tab1Move );
}


/* index2페이지 컴퍼넌트 */
function cpnt2(){

    var $base = $(".type_cpnt2");
    var $prev = $base.find(".btn_prev"); 
    var $next = $base.find(".btn_next");
    var $tab2 = $base.find(".tab");
    var $tab2_list = $base.find(".tab li");
    var $tab2_length = $tab2_list.length-1;
    var tab2_index = 0;
    var $currentTab2 = $tab2_list.eq(0);
    var $tab2_Width = $tab2_list.first().outerWidth();
    $tab2_length = $tab2_list.length;
    var $tab2_totalWidth = $tab2.width($tab2_Width*($tab2_length+2));
    $tab2_list.first().addClass("tab2_first");
    $tab2_list.last().addClass("tab2_last");
    $(".tab2_first").clone().appendTo(".type_cpnt2 .tab");
    $(".tab2_last").clone().prependTo(".type_cpnt2 .tab");
    $tab2.css({'left':-1*$tab2_Width+'px'});
        
    $next.on("click", function(){
        $tab2.stop();
        var $newPos = $tab2.position().left-(1*$tab2_Width);
        $tab2.animate({'left':$newPos+'px'},function() {
            if (Math.abs($newPos) == (($tab2_length+1)*$tab2_Width))
                {
                    $tab2.css({'left':-1*$tab2_Width+'px'});   
                }
            });
        return false;
    });

    $prev.on("click", function(){
        $tab2.stop();
        var $newPos = $tab2.position().left+(1*$tab2_Width);
        $tab2.animate({'left':$newPos+'px'},function() {
            if (Math.abs($newPos) == 0 )
                {
                    $tab2.css({'left':(-$tab2_length)*$tab2_Width+'px'});   
                }
            });
        return false;
    });
          
}


/* index3페이지 컴퍼넌트 */
function cpnt3(){
    var $more = $(".more");
    var $close = $(".more .close");
    var $tab3_list = $(".type_cpnt3 .tab li");

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
}
