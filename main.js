
var $header = $("header")
var $logo =$(".logo")
var $gnb = $("header nav li")
var $menu = $("header nav a")

$gnb.on("mouseenter", function(){
   
   $header.css({
       "background" : "#fff", 
       "border-bottom":"1px solid #e5e5e5"
    })
   $menu.css("color", "#1b2252")
   $logo.css("color", "#1b2252")
   $(this).css("background", "#f7f9fd")
   $(this).find("a").css("color", "#59c6fd")

})

$gnb.on("mouseleave", function(){
    
    $header.css({
        "background" : "transparent", 
        "border-bottom" : "none" 
    })
    $menu.css({"color" : "#fff"})
    $logo.css({"color" : "#fff"})
    $gnb.css({
        "background":"transparent",
        "color":"#fff"
    })
})