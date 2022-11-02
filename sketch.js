// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker_zb;
let vid;
let read;
let read_width;
let read_height;

let d_1, d_2, d_3, d_4, d_5, d_6, d_7;

let dl_1, dl_2, dl_3, dl_4, dl_5, dl_6, dl_7;


let cube = new Box({
    x:0,
    y:0.5,
    z:0,
    red:0,
    green:255,
    blue:0,
    width:1,
    height:1,
    depth:1,
    opacity: 0.5
});

function setup() {
  // create our world (this also creates a p5 canvas for us)
  
  createCanvas(800, 600, WEBGL);
  read = true;

  world = new World('ARScene');

  //marker
  marker_zb = world.getMarker('zb');
  // marker_zb.add(cube);

    d_1 = loadImage("assest/d/1.png");

    d_2 = createVideo(
    'assest/d/2.webm',
    vidLoad);

    d_3 = createVideo(
    'assest/d/3.webm',
    vidLoad);

    d_4 = loadImage("assest/d/4.png");

    d_5 = createVideo(
    'assest/d/5.webm',
    vidLoad);

    d_6 = createVideo(
    'assest/d/6.webm',
    vidLoad);

    d_7 = createVideo(
    'assest/d/7.webm',
    vidLoad);

}

function draw(){
  clear();
   // stroke(255);
   // noFill();
   // rect(0, 0, width, height);

if(read == true){
  background(255);
}else{
    if(marker_zb.isVisible()==true){
    let mk_pos = new THREE.Vector3();
    mk_pos.setFromMatrixPosition(marker_zb.tag.object3D.matrixWorld);
    let x = mk_pos.x * width ;
    let y = mk_pos.y * -height;
    let z = mk_pos.z * width/2;
    let mk_rot = marker_zb.tag.object3D.rotation;

    translate(x, y, z);
    rotateX(-mk_rot.x);
    rotateY(mk_rot.y);
    rotateZ(-mk_rot.z);
    rotateX(PI/2);

    texture(d_7);
    noStroke();
    rect(-400, -400, 800, 800);

    translate(0, 0, 50);
    texture(d_6);
    noStroke();
    rect(-400, -400, 800, 800);

    translate(0, 0, 50);
    texture(d_5);
    noStroke();
    rect(-400, -400, 800, 800);

    translate(0, 0, 50);
    texture(d_4);
    noStroke();
    rect(-400, -400, 800, 800);

    translate(0, 0, 50);
    texture(d_3);
    noStroke();
    rect(-400, -400, 800, 800);

    translate(0, 0, 50);
    texture(d_2);
    noStroke();
    rect(-400, -400, 800, 800);

    translate(0, 0, 50);
    texture(d_1);
    stroke(255);
    strokeWeight(5);
    rect(-400, -400, 800, 800);
  }
}
   //texture(vid);
   //stroke(255);
   //strokeWeight(3);
   //rect(-width/2, -height/2, 584, 726);
   //image(vid, -width/2, -height/2);
}

function vidLoad() {

  // vid.loop();
  // vid.volume(0);
  // vid.hide();

  d_2.loop();
  d_2.volume(0);
  d_2.hide();

  d_3.loop();
  d_3.volume(0);
  d_3.hide();

  d_5.loop();
  d_5.volume(0);
  d_5.hide();

  d_6.loop();
  d_6.volume(0);
  d_6.hide();

  d_7.loop();
  d_7.volume(0);
  d_7.hide();
}

function mouseClicked(){
    if(read == true){

    //set video loop here  
    // vid.loop();

    let arvid = document.getElementById('arjs-video');
    if(arvid != null){
      let style = window.getComputedStyle(arvid);
      let style_width = style.width;
      let style_height = style.height;
      let style_left = style.marginLeft;
      let style_top = style.marginTop;

      let cvs = document.getElementById('defaultCanvas0');
      cvs.style.width =  style_width;
      cvs.style.height = style_height;
      cvs.style.marginLeft = style_left;
      cvs.style.marginTop =  style_top;

      //console.log(style);
      read = false;
    }
  }
}
