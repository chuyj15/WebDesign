//이미지슬라이드
// $('.sliderWrap').append($('.slide').eq(0).clone(true))
// let currentIndex = 0
// setInterval(()=>{
//     if (currentIndex == 3){
//         $('.sliderWrap').animate({marginLeft : 0} ,0)
//         currentIndex = 0
//     }
//     console.log(currentIndex)
//     currentIndex ++
//     $('.sliderWrap').animate({marginLeft : -1200*currentIndex}, 1000)
//     console.log( -1200*currentIndex)
// }, 3000)

//이미지 페이드인아웃
setInterval(()=>{
    let index = 0
    $('.slide').eq(index).fadeIn(500)
    $('.slide').eq(index+1).fadeOut(500)
    index ++ 
}, 3000)

//nav
// $('.wrap .header .nav > ul >li > ul ')

$('.wrap .header .nav > ul >li >a').mouseover(function(){
    $(this).siblings('ul').stop().slideDown(200)
})
$('.wrap .header .nav > ul >li >a').mouseout(function(){
    $(this).siblings('ul').stop().slideUp(200)
})

//공지사항 팝업뜨기
$(`.pop`).hide()
$('.imformation > a').click(function(){
    $(`.pop`).show()
})
$('.pop > a').click(function(){
    $(`.pop`).hide()
})

//탭 클릭
$(function(){
    $('.tab1').trigger('click')
})
// $('.tab1').trigger('click')

$('.tab1').click(function(){
    $('.imformation').show()
    $('.card').hide()
})
$('.tab2').click(function(){
    $('.card').show()
    $('.imformation').hide()
})

