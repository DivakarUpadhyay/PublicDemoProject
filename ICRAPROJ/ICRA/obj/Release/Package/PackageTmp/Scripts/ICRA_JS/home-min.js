$(document).ready(function(){$("#banner").slick({infinite:!0,arrows:!0,dots:!0,fade:!1,autoplay:!1,speed:500,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1,pauseOnFocus:!1,pauseOnHover:!1,responsive:[{breakpoint:1023,settings:{adaptiveHeight:!0,dots:!1}}]}),$(".scroll_arrow").click(function(){$("html, body").animate({scrollTop:$(".research_in_focus").offset().top+20},1e3)}),$(".crp_slider_con").slick({dots:!1,infinite:!0,autoplay:!1,speed:300,slidesToShow:2,centerMode:!1,variableWidth:!0}),$(".popup-youtube").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0,closeOnBgClick:!0}),$(".actions-sliders").slick({slidesToShow:3,slidesToScroll:1,dots:!0,arrows:!1,autoplay:!0,adaptiveHeight:!0,infinite:!0,speed:400,vertical:!0,verticalSwiping:!0}),$(".m_pause").on("click",function(){$(this).css({display:"none"}),$(".m_play").css({display:"block"}),$(".marquee_content").css({"animation-play-state":"paused"})}),$(".m_play").on("click",function(){$(this).css({display:"none"}),$(".m_pause").css({display:"block"}),$(".marquee_content").css({"animation-play-state":"running"})}),$(".research_hld").slick({slidesToShow:3,slidesToScroll:1,dots:!1,arrows:!1,autoplay:!0,infinite:!0,speed:400,responsive:[{breakpoint:1e4,settings:"unslick"},{breakpoint:1100,settings:{slidesToShow:2,arrows:!0}},{breakpoint:767,settings:{slidesToShow:1,arrows:!0}}]})});
//# sourceMappingURL=maps/home-min.js.map
