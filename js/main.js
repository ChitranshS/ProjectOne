$(document).ready(function()
{  
     //hide functions starts//
    $(".main_body_area").hide();
    $(".header1").hide();
    $(".header2").hide();
    $(".header6").hide();
    $(".heade7").hide();
    $(".search_bar").hide();
    $(".nested_search").hide();
    $(".spec1").hide();
    $(".hero_area_3").hide();
        $(".hero_area_4").hide();
    $("ul").hide();


//for contact form --------------------------------------------
   
    //------------------------------------------------------


    setTimeout(function(){$(".loader_area").hide()},4700);

//show function starts
setTimeout(function(){$(".main_body_area").show("fast")},4500);
setTimeout(function(){$("body").attr("style","background-color:black;transition:0.3s ease-in;")},4500);

//scroll1 function starts
$(window).scroll(function() {
    if($(this).scrollTop()<800){
    var scroll = $(window).scrollTop();
    $(".hero_area").css({
    backgroundSize: (100 + scroll/5)  + "%",
    top: -(scroll/10)  + "px",
         });
         
    };
    });

    $(window).scroll(function(){
        if($(this).scrollTop() >500){
            $("ul").fadeIn("fast");
        };
    });
//scroll1 para function starts
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400)
        $(".header1").show("slow");
        });  

//oppo. scroll1 para function starts
$(window).scroll(function() {
    if ($(this).scrollTop() < 380)
    $(".header1").hide("slow");
    });  
  //scroll3 function starts
  $(window).scroll(function() {
    if($(this).scrollTop()<2200){
    var scroll1 = $(window).scrollTop();
    $(".hero_area_2ex").css({
    backgroundSize: (800 + scroll1/3)  + "px",
    top: -(scroll1/8)  + "px",
         });
        };     
    
    });

//scroll2 para function starts 
        $(window).scroll(function() {
        if ($(this).scrollTop() > 1200)
        $(".header2").show("slow");
        });
//opp0. scroll2 para function starts
        $(window).scroll(function(){
            if($(this).scrollTop() < 1180){
            $(".header2").hide("slow");
            };
        });

//scroll3 para function starts
$(window).scroll(function(){
if($(this).scrollTop() > 2200 ){
   $(".header6").show("slow");
};
});
//oppo. scroll3 function starts 
$(window).scroll(function(){
    if($(this).scrollTop() < 2180){
    $(".header6").hide("slow");
    };
});

//scroll4 para function starts 
$(window).scroll(function(){
if($(this).scrollTop() > 5900){
  $(".heade7").show("slow");
};
});

$(window).scroll(function(){
 if($(this).scrollTop() < 5880 ){
  $(".heade7").hide("slow");
 };
});

//video scroll function starts

        $(window).scroll(function() {
        var video = $('#hero_vid');
     if($(this).scrollTop()>1700)
{
    video[0].play();
};
        });
        
   
$(window).scroll(function() {
    if ($(this).scrollTop() > 900)
    $(".spec1").fadeIn("2000");
    });

$(window).scroll(function() {
        if ($(this).scrollTop() <700)
        $(".spec1").fadeOut("300");
        });
$(window).scroll(function() {
            if ($(this).scrollTop() > 900)
            $(".spec2").fadeIn("2000");
                });
$(window).scroll(function() {
                if ($(this).scrollTop() <700)
                $(".spec2").fadeOut("300");
            
            });

            $(".hero_area2").mouseover(function(){
                $(".hero_area2").attr("style","background:url('img/6_blur.jpg')no-repeat;background-size:cover;transition:2s ease;background-attachment:fixed;");
            });

                $(".hero_area2").mouseout(function(){
                    $(".hero_area2").attr("style","background:url('img/6.jpg')no-repeat;background-size:cover;transition:2s ease;background-attachment:fixed;");
                });

            $(".hero_area_3_ini").mouseover(function(){
                $(".hero_area_3_ini").attr("style",'background:url("img/3.jpg")no-repeat;background-size: contain; background-attachment: fixed;background-position: center;width:100%;overflow-x:hidden;height:800px;');
            });

            $(".hero_area_3_ini").mouseout(function(){
                $(".hero_area_3_ini").attr("style",'background:url("img/3.png")no-repeat;background-size: contain; background-attachment: fixed;background-position: center;width:100%;overflow-x:hidden;height:800px;transition:0.7s ease-in-out');
            });

     $(window).scroll(function() {
                    if ($(this).scrollTop() > 1700)
                    $(".hero_area_3").fadeIn("2000");
                        });
        $(window).scroll(function() {
                        if ($(this).scrollTop() <1500)
                        $(".hero_area_3").fadeOut("300");
                    
                    });
                    $(window).scroll(function() {
                        if ($(this).scrollTop() > 2100)
                        $(".hero_area_4").fadeIn("2000");
                            });
            $(window).scroll(function() {
                            if ($(this).scrollTop() <1900)
                            $(".hero_area_4").fadeOut("300");
                        
                        });



 
});

