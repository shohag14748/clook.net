$(document).ready(function(){
   var scrollLink = $('.bottom-cta a');
    scrollLink.on("click",function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top,
        }, 700);
    });
});
