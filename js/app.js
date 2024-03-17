const warpper = document.querySelector('.warpper')
let pressed =false
let startX=0
warpper.addEventListener('mousedown', function (e) {
    pressed =true
    startX =e.clientX
    this.style.cursor = 'grab'

    console.log(startX);
} )

warpper.addEventListener('mouseleave', function (e) {
    pressed = false
} )

window.addEventListener('mouseup', function (e) {
    pressed = false
    warpper.style.cursor = ''
} )

warpper.addEventListener('mousemove', function (e) {
    if(!pressed) {
        return
    }
    this.scrollLeft +=startX - e.clientX
} )


jQuery(function($){
    var $navber = $('.menu-bg');
    $(window).scroll(function(event){
        var $current =$(this).scrollTop();
        if($current > 0 ){
            $navber.addClass('navber-color');
        }else{
            $navber.removeClass('navber-color');
        }
    });
});












// const wrapper = document.querySelector('.wrapper');
// let pressed = false
// let startX= 0
// wrapper.addEventListener('mousedown', function (e) {
//     pressed = true
//     startX = e.clientx
//     this.style.cursor = 'grabbing'
// });
// wrapper.addEventListener('mouseleave', function (e) {
//     pressed = false
// });
// window.addEventListener('mouseup', function (e) {
//     pressed = false
//     wrapper.style.cursor = 'grab'
// });
// wrapper.addEventListener('mousemove', function (e) {
//     if (!pressed) {
//         return 
//     }
    
//     this.scrollLeft += startX - e.clientx
// });
// let slider =document.querySelector('.slider')
// let innerSlider =document.querySelector('.slider-inner')
// let pressed =false;
// let startX;
// let x;

// slider.addEventListener('mousedown',(e) =>{
//     pressed = true;
//     startX = e.affsetX - innerSlider.offsetLeft;
//     slider.style.cursor = 'grabbing'
// });

// // slider.addEventListener('mouseenter',()=>{
// //     slider.style.cursor = 'grab'
// // })

// slider.addEventListener('mouseup',()=>{
//     slider.style.cursor = 'grab'
// });

// window.addEventListener('mouseup', ()=>{
//     pressed = false
// });

// slider.addEventListener('mousemove',(e)=>{
//     if(!pressed) return;
//     e.preventDefault();

//     x = e.affsetX
//     innerSlider.style.left = $(x -startX);
// })