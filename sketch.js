// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker_zb,marker_123;

// create some geometry to add to our marker
let scene_3;

let ball = new Sphere({
    x:0,
    y:0.5,
    z:0,
    radius: 1,
    opacity: 0.5,
    asset: 'sphere_texture'
});

// let dynamicBuffer;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // //graphics buffer for dynamic texture
  // dynamicBuffer = createGraphics(300, 300);
  // dynamicBuffer.clear();
  // // register this texture as a dynamic (updatable) texture
  // let dTexture = world.createDynamicTextureFromCreateGraphics(dynamicBuffer);
  // //bound the texture to object
  // cube = new Box({
  //   x:0,
  //   y:1,
  //   z:0,
  //   width:2,
  //   height:2,
  //   depth:2,
  //   asset: dTexture,
  //   dynamicTexture: true,
  //   dynamicTextureWidth: 300,
  //   dynamicTextureHeight: 300
  // });
  // console.log(cube);

  scene_3 = new Plane({
    x:0,
    y:1,
    z:0,
    width:2,
    height:2,
    depth:2,
    asset: '12',
    opacity: 0.9,
    rotationX: -90,
  })

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  marker_123 = world.getMarker('123');
  marker_zb = world.getMarker('zb');

  // add the cube to our marker
  // marker_hiro.add( cube );
  // marker_zb.add( scene_3 );
  marker_123.add( scene_3 );
}



function draw() {
  // dynamicBuffer.fill(random(255), random(255), random(255));
  // dynamicBuffer.ellipse(random(dynamicBuffer.width), random(dynamicBuffer.height),
  //                       30, 30);
}
