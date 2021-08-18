var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["59c28886-61ed-474a-8b87-f975decba207","0f44cc64-10bf-4b51-8965-527d156a89bd","40cf1390-fcf3-48b1-87bc-0c76723a044f"],"propsByKey":{"59c28886-61ed-474a-8b87-f975decba207":{"name":"Dream_Skin2.png_1","sourceUrl":null,"frameSize":{"x":200,"y":267},"frameCount":1,"looping":true,"frameDelay":12,"version":"Aukh3kX5IVG4jJ0QV94hzRsDpn5KrTVb","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":267},"rootRelativePath":"assets/59c28886-61ed-474a-8b87-f975decba207.png"},"0f44cc64-10bf-4b51-8965-527d156a89bd":{"name":"body.png_1","sourceUrl":"assets/v3/animations/t94qxubkLxM2CZql1tsPn_WYOrYbAEL8xpga-aOGhPQ/0f44cc64-10bf-4b51-8965-527d156a89bd.png","frameSize":{"x":282,"y":282},"frameCount":1,"looping":true,"frameDelay":4,"version":"cIKqrk6xsVMKBejNn67NYyYSqZHlB0Z1","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":282},"rootRelativePath":"assets/v3/animations/t94qxubkLxM2CZql1tsPn_WYOrYbAEL8xpga-aOGhPQ/0f44cc64-10bf-4b51-8965-527d156a89bd.png"},"40cf1390-fcf3-48b1-87bc-0c76723a044f":{"name":"png-clipart-minecraft-mod-grass-block-computer-software-video-game-block-3d-computer-graphics-wood.png_1","sourceUrl":null,"frameSize":{"x":200,"y":114},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZgYXhyN1ugQO3Ajddcsor89c4WjJz.x0","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":114},"rootRelativePath":"assets/40cf1390-fcf3-48b1-87bc-0c76723a044f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");


var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");


// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";



// creating objects and giving them colours
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
striker.setAnimation("png-clipart-minecraft-mod-grass-block-computer-software-video-game-block-3d-computer-graphics-wood.png_1");
striker.scale = 1/4;


var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";
playerMallet.scale = 0.5;

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";
computerMallet.setAnimation("body.png_1");
computerMallet.scale = 0.5;

playerMallet.setAnimation("Dream_Skin2.png_1");


function draw() {
  //clear the screen
 
  
 background("green");
if (keyDown(ENTER)) {
  playSound("assets/dream_speedrun_music.mp3", true);
    
}
if (striker.isTouching(playerMallet)||striker.isTouching(computerMallet)) 
{
 playSound("hit.mp3", false);
   }



  //make the player paddle move with the Arrow keys
  paddleMovement();
  
  
  //AI for the computer paddle
  //make it move with the striker's y position
  computerMallet.x = striker.x;


  
  //draw line at the centre
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);
  

 
  
  //serve the striker when space is pressed
  if (keyDown("space")) {
    serve();
  }
 fill("yellow");
 textSize(12);
 text("Please press the ENTER key to hear the trance music ", 50, 190);
     
 
  drawSprites();
}






function serve() {
  striker.velocityX = 10;
  striker.velocityY = 8;
 
}

function paddleMovement()
{
playerMallet.x= World.mouseX;
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
