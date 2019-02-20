const violetlight = '#784FBB';
const violet = '#472898';
const violetsuperLight = '#785EBC';
const blue = '#250D63';
const greylight = '#f2f2f2';
const pinky = '#701F93';
const fontcyrillic = 'MuseoSansCyrl,sans-serif';
const fontbig = 'Montserrat, sans-serif';
const fontitalic = 'Apercu Pro, sans-serif';
const menu = $(".navbar-fixed-top");
$('.menu-toggle').on('click', function(){
  $('body').toggleClass('open');
});
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 560 ) {
      $(".first-text").css('color',violet);
     // $("button: before").css('color',violet);
      
    } else if ( top <= 560 ) {
      $(".first-text").css('color','white');
      //  $("button :before").css('color','white');
        
    }
  });
  
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
