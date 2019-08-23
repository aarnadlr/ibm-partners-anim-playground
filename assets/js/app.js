//center animation:
// TweenMax.set("#container", {position: 'absolute',left: '50%', top: '50%', xPercent: -50, yPercent: -50});

// const IBManim = require('./data-circle-diamond.json')

var animData = {
  container: document.getElementById('animWindow'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  // path: 'https://dl.dropboxusercontent.com/s/qwy4m0sexapyb8b/octoport-j.json?dl=0'
  // path: 'https://ww3.aaronadler.com/bodymovin/data.json'
  // IBM FIRST RENDER:
  // path: 'https://dl.dropboxusercontent.com/s/vlpdha884xnq1ta/data.json?dl=0'
  // IBM CIRCLES:
  // path: 'https://dl.dropboxusercontent.com/s/c58cyqrraerr0v5/data-circle-square-.json?dl=0'
  // IBM CIRCLE-DIAMOND:
  // path: 'https://s3.amazonaws.com/aws-website-animatedcodeme--n3fph/bodymovin_files/data-circle-diamond.json'
  path: 'https://dl.dropboxusercontent.com/s/zgzkp1rkvvkgr0p/ibm-data-circle-diamond.json?dl=0'
};




// PLACE THE ABOVE INTO A SHORTER VAR
var anim = bodymovin.loadAnimation(animData);





// SET SPEED
anim.setSpeed(.7);

// SET INITIAL COLOR OF PHONERECT (BACKGROUND) HERE:
TweenMax.set(".phoneRect", {background:"rgb(8, 0, 255)", opacity:1});

// CLICK ANYWHERE ON TOP DIV TO PLAY
$('.phoneRect').click( function() {
  anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
});





// FIRST ROW - PLAY CONTROLS
// FIRST ROW - PLAY CONTROLS
// FIRST ROW - PLAY CONTROLS
$('#play').click( function() {
  anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
  anim.loop = false;
});

$('#pause').click( function() {
  anim.pause();
});

$('#loop').click( function() {
  // anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
  anim.loop = true;
});


$('#fast').click( function() {
  anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
  anim.setSpeed(2);
  // anim.loop = false;
  anim.loop = true;
});

$('#normal').click( function() {
  anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
  anim.setSpeed(1);
  // anim.loop = false;
  anim.loop = true;
});

$('#slow').click( function() {
  anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
  anim.setSpeed(.5);
  // anim.loop = false;
  anim.loop = true;
});

$('#reverse').click( function() {
  anim.setDirection(-1);
  anim.goToAndStop(90, true);
  anim.play();
  // anim.loop = false;
  anim.loop = true;
});






// SECOND ROW - TYPE COLOR CONTROL
// SECOND ROW - TYPE COLOR CONTROL
// SECOND ROW - TYPE COLOR CONTROL
$('#white').click( function() {
  TweenMax.to("path", .5, {fill:"white", stroke:"white", opacity:1});
});

$('#red').click( function() {
  TweenMax.to("path", .5, {fill:"rgb(255, 0, 59)", stroke:"rgb(255, 0, 59)", opacity:1});
  // TweenMax.to("path", 1, {fill:"#70a8fc", opacity:1});
});
$('#cyan').click( function() {
  TweenMax.to("path", .5, {fill:"cyan", stroke:"cyan", opacity:1});
});

$('#magenta').click( function() {
  TweenMax.to("path", .5, {fill:"rgb(255, 0, 255)", stroke:"rgb(255, 0, 255)", opacity:1});
});

$('#black').click( function() {
  TweenMax.to("path", .5, {fill:"black", stroke:"black", opacity:1});
});







// THIRD ROW - BACKGROUND COLOR CONTROLS
// THIRD ROW - BACKGROUND COLOR CONTROLS
// THIRD ROW - BACKGROUND COLOR CONTROLS
$('#whiteBcg').click( function() {
  TweenMax.to(".phoneRect", .5, {background:"rgb(242, 242, 242)", opacity:1});
});

$('#redBcg').click( function() {
  TweenMax.to(".phoneRect", .5, {background:"rgb(255, 0, 59)", opacity:1});
});

$('#blueBcg').click( function() {
  TweenMax.to(".phoneRect", .5, {background:"rgb(8, 0, 255)", opacity:1});
});

$('#purpleBcg').click( function() {
  TweenMax.to(".phoneRect", .5, {background:"rgb(165, 0, 255)", opacity:1});
});

$('#blackBcg').click( function() {
  TweenMax.to(".phoneRect", .5, {background:"rgb(30, 30, 30)", opacity:1});
});