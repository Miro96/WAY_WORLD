var menu = $(".navbar-fixed-top");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 100 ) {
      console.log(1);
      menu.$(".main-menu").$("span").css('color:red!important')
    } else if ( top <= 200 ) {
      menu.$(".main-menu").$("span").css('color:red!important')
    }
  });
document.onmousemove = shiftImageXY;

var tempX = 0;
var tempY = 0;
var oldTempX = 0;
var oldTempY = 0;
var IE =  !!(window.attachEvent&&!window.opera);

function shiftImageXY(e) {
  if (IE) { 
    tempX = event.clientX + document.body.scrollLeft;
    tempY = event.clientY + document.body.scrollTop;
  } else {  
    tempX = e.pageX;
    tempY = e.pageY;
  }  
  img = document.getElementById('preview-img');
  speedFactorDamping = 0.03; // change this for faster movement
  xdir = (tempX - oldTempX) ;
  ydir = (tempY - oldTempY) ;
  parallexX = -xdir*speedFactorDamping;
  parallexY = -ydir*speedFactorDamping;
  currX = parseInt(img.offsetLeft);
  currY = parseInt(img.offsetTop);

  img.style.left = (currX + parallexX) + 'px';
  if(currY>0){
  img.style.top = (currY + parallexY) + 'px';
    }
  oldTempX = tempX;
  oldTempY = tempY;
  return true;
}
$(function() {
    $('.intro').addClass('go');
  
    $('.reload').click(function() {
      $('.intro').removeClass('go').delay(200).queue(function(next) {
        $('.intro').addClass('go');
        next();
      });
  
    });
  })
  var ractive = new Ractive({
    el: '#container',
    template: '#template',
    data: {}
  });
  