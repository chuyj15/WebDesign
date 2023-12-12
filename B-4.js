// $('header ul > li').on('mouseover', ()=>{
//     $('header').addClass('on')
//     $('.submenu').stop().slideDown(400)
//     console.log('여기')
// })
// $('header ul > li').on('mouseout', ()=>{
//     $('header').removeClass('on')
//     $('.submenu').stop().slideUp(400)
//     console.log('저기')
// })
$('header').removeClass('on')
$('.submenu').stop().slideUp(0)

$('nav > ul > li').mouseover(()=>{
    $('header').addClass('on')
    $('.submenu').stop().slideDown(400)
    console.log('여기')
})
$('nav, .submenu, header').mouseout(()=>{
    $('header').removeClass('on')
    $('.submenu').stop().slideUp(1000)
    console.log('저기')
})

$('.sliderWrap').append($('.sliderWrap').find('.slide').eq(0).clone(true))

let index = 0;
setInterval( ()=>{
    index ++ 
    //$('.sliderWrap').animate({marginLeft :`${-1200 * index}`+'px'}, 500)
    $('.sliderWrap').animate({marginLeft :`${-1200 * index}px`}, 500)
    if (index == 3){
        setTimeout(()=>{$('.sliderWrap').css({marginLeft : 0})}, 501)
        index = 0
    }
}, 2000)