$(document).ready(function(){

//lightbox open
$(".my-img").click(function(){
    $(".lightbox").show();
    $("#lightbox-img").attr("src", (this).src);
    console.log(this.src)
})


// lightbox close
$("#close-btn").click(function(){
    $(".lightbox").hide();
    $(".lightbox-img").hide();
})

// filter

$("#all-btn").click(function(){
    $(".sp").show();
    $(".salvador").show();
    $(".rio").show();
    $(".bh").show();
})

$("#rio-btn").click(function(){
    $(".rio").show();
    $(".salvador").fadeOut();
    $(".sp").fadeOut();
    $(".bh").hide();
})

$("#salvador-btn").click(function(){
    $(".salvador").show();
    $(".rio").fadeOut();
    $(".sp").fadeOut();
    $(".bh").fadeOut();
})

$("#sp-btn").click(function(){
    $(".sp").show();
    $(".salvador").fadeOut();
    $(".rio").fadeOut();
    $(".bh").fadeOut();
})

$("#bh-btn").click(function(){
    $(".bh").show();
    $(".salvador").fadeOut();
    $(".rio").fadeOut();
    $(".sp").fadeOut();
})

})