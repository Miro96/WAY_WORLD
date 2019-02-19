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
  $('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});