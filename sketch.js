// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker_hiro;

// create some geometry to add to our marker
let plane;
let video;
let dynamicBuffer;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  //graphics buffer for dynamic texture
  dynamicBuffer = createGraphics(650, 820);
  dynamicBuffer.clear();
  // register this texture as a dynamic (updatable) texture
  let dTexture = world.createDynamicTextureFromCreateGraphics(dynamicBuffer);
  //bound the texture to object
  //width and height based on video aspect ratio
  // 2 * (820 / 650) = 2.523
  plane = new Plane({
    x:0,
    y:1,
    z:0,
    width:2,
    height:2.523,
    opacity: 0.9,
    asset: dTexture,
    dynamicTexture: true,
    dynamicTextureWidth: 650,
    dynamicTextureHeight: 820,
    rotationX: -90,
  });
  console.log(plane);

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  marker_hiro = world.getMarker('hiro');

  // add the plane to our marker
  marker_hiro.add( plane );

  //video
  video = createVideo("8.webm", vidLoad);
}


function draw() {
  dynamicBuffer.clear();
  dynamicBuffer.image(video, 0, 0);
}

function vidLoad(){
  video.loop();
  video.hide();
}
