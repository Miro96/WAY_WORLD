
document.onmousemove = shiftImageXY;

var tempX = 0;
var tempY = 0;
var oldTempX = 0;
var oldTempY = 0;
var IE = !!(window.attachEvent && !window.opera);

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
  xdir = (tempX - oldTempX);
  ydir = (tempY - oldTempY);
  parallexX = -xdir * speedFactorDamping;
  parallexY = -ydir * speedFactorDamping;
  currX = parseInt(img.offsetLeft);
  currY = parseInt(img.offsetTop);

  img.style.left = (currX + parallexX) + 'px';
  if (currY > 0) {
    img.style.top = (currY + parallexY) + 'px';
  }
  oldTempX = tempX;
  oldTempY = tempY;
  return true;
}