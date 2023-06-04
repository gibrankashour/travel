$(function (){
    'use strict';
    // search show and hide in md screen
    $('.main-header .md-search i.fa-search').on('click', function(){
        $('.main-header .md-search form').toggleClass('hide');
    });
    
    // main carousel adjust photo height
    
    var winh    = $(window).height(),
        underslide =$('.underneath-form').innerHeight(),
        allheader  = $('.top-header').innerHeight() + $('.main-header').innerHeight();
    if($(window).width() > 992){
        $('.main-carousel .carousel-inner .carousel-item img').height(winh - (allheader + underslide));
    }else{
        $('.main-carousel .carousel-inner .carousel-item img').height(winh - allheader);
    }
    
    // special offers img height
    
    $('.special-offers .card img').each(function(){
        $(this).height($(this).width() / 1.35 );
    });
});