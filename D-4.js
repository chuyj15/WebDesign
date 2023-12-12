$(function () {
    $('.nav>ul>li>ul, .bgt').fadeOut(0)

})

$('.nav>ul>li>a').mouseover(() => {
    $('.nav>ul>li>ul, .bgt').stop().show(500)
})
$('.nav>ul').mouseleave(() => {
    $('.nav>ul>li>ul, .bgt').stop().hide(500)
})

$('.sliderWrap').append($('.slide').eq(0).clone(true))

let index = 1;
setInterval(() => {

    console.log(index, '안녕')

    $('.sliderWrap').animate({ marginLeft: `${-100 * index}%` }, 1000)
    index++
    console.log(index)
    if (index ==4){
        setTimeout(()=>{
            $('.sliderWrap').animate({ marginLeft: '0'}, 0)
            index = 1
        }, 501)
    }
}, 2000)

$('.popup').hide()

const popup = function(){
    $('.popup').show()
}

const popclose = ()=>{
    $('.popup').hide()
}