function moveSlide() {
    const margin = 10;
   
    $(".slider2").animate({
        'margin-left': -100
    }, 1000, replace)
}

function replace() {
    const li = $(".slider2 > li:eq(0)")
    li.remove()
    $(".slider2").css("margin-left", "0px")
    $(".slider2").append(li)
}

let slide = setInterval(function(){
    moveSlide();

}, 1000 );

$(".slider2 > li").mouseover(function(){
    clearInterval(slide);
}).mouseleave(function(){
    slide = setInterval(function(){
    moveSlide();

}, 1000 );
})


