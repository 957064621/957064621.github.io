// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker_zb, marker_hiro, marker_01, marker_02, marker_03, marker_04;

let a_1, a_2, a_3, a_4, a_5, a_6, a_7, a_8, a_9, a_10, a_11, a_12, a_13, a_14;

let b_1, b_2, b_3, b_4, b_5;

let c_1, c_2, c_3, c_4, c_5;

let d_0, d_1, d_2, d_3, d_4, d_5, d_6, d_7;

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

  lock(ORIENTATION);
  
  createCanvas(windowWidth, windowHeight, WEBGL);
  read = true;

  world = new World('ARScene');

  //marker
  marker_zb = world.getMarker('zb');
  marker_hiro = world.getMarker('hiro');

  marker_01 = world.getMarker('01');
  marker_02 = world.getMarker('02');
  marker_03 = world.getMarker('03');
  marker_04 = world.getMarker('04');
  // marker_zb.add(cube);


  //冬日温暖

    a_1 = loadImage("assest/a/1.png");

    a_2 = loadImage("assest/a/2.png");

    a_3 = createVideo(
    'assest/a/3.webm',
    vidLoad);

    a_4 = createVideo(
    'assest/a/4.webm',
    vidLoad);

    a_5 = createVideo(
    'assest/a/5.webm',
    vidLoad);

    a_6 = createVideo(
    'assest/a/6.webm',
    vidLoad);

    a_7 = createVideo(
    'assest/a/7.webm',
    vidLoad);

    a_8 = createVideo(
    'assest/a/8.webm',
    vidLoad);

    a_9 = loadImage("assest/a/9.png");

    a_10 = loadImage("assest/a/10.png");

    a_11 = loadImage("assest/a/11.png");

    a_12 = createVideo(
    'assest/a/12.webm',
    vidLoad);

    a_13 = loadImage("assest/a/13.png");

    a_14 = loadImage("assest/a/14.png");

    //折荷

    b_1 = loadImage("assest/b/1.png");

    b_2 = createVideo(
    'assest/b/2.webm',
    vidLoad);

    b_3 = createVideo(
    'assest/b/3.webm',
    vidLoad);

    b_4 = createVideo(
    'assest/b/4.webm',
    vidLoad);

    b_5 = loadImage("assest/b/5.png");

    //两小

    c_1 = loadImage("assest/c/1.png");

    c_2 = createVideo(
    'assest/c/2.webm',
    vidLoad);

    c_3 = createVideo(
    'assest/c/3.webm',
    vidLoad);

    c_4 = createVideo(
    'assest/c/4.webm',
    vidLoad);

    c_5 = createVideo(
    'assest/c/5.webm',
    vidLoad);

    //逃避与追求

    d_0 = loadImage("assest/d/0.png");

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

// if(read == true){
//   background(255);
// }else{
    if(marker_01.isVisible()==true){
    let mk_pos = new THREE.Vector3();
    mk_pos.setFromMatrixPosition(marker_01.tag.object3D.matrixWorld);
    let x = mk_pos.x * width ;
    let y = mk_pos.y * -height;
    let z = mk_pos.z * width/2;
    let mk_rot = marker_01.tag.object3D.rotation;

    translate(x, y, z);
    rotateX(-mk_rot.x);
    rotateY(mk_rot.y);
    rotateZ(-mk_rot.z);
    rotateX(PI/2);

    texture(a_14);
    noStroke();
    rect(-325, -410, 650, 820);

    translate(0, 0, 50);
    texture(a_13);
    noStroke();
    rect(-325, -410, 650, 820);

    // translate(0, 0, 50);
    texture(a_12);
    noStroke();
    rect(-325, -410, 650, 820);

    texture(a_10);
    noStroke();
    rect(-325, -410, 650, 820);

    translate(0, 0, 50);
    texture(a_11);
    noStroke();
    rect(-325, -410, 650, 820);

    translate(0, 0, 50);
    texture(a_9);
    noStroke();
    rect(-325, -410, 650, 820);

    translate(0, 0, 50);
    texture(a_8);
    noStroke();
    rect(-325, -410, 650, 820);

    translate(0, 0, 50);
    texture(a_7);
    noStroke();
    rect(-325, -410, 650, 820);

    translate(0, 0, 50);
    texture(a_6);
    noStroke();
    rect(-325, -410, 650, 820);

    translate(0, 0, 50);
    texture(a_5);
    noStroke();
    rect(-325, -410, 650, 820);

    translate(0, 0, 30);
    texture(a_4);
    noStroke();
    rect(-325, -410, 650, 820);

    translate(0, 0, 30);
    texture(a_3);
    noStroke();
    rect(-325, -410, 650, 820);

    translate(0, 0, 25);
    texture(a_2);
    noStroke();
    rect(-325, -410, 650, 820);

    texture(a_1);
    noStroke();
    rect(-325, -410, 650, 820);
  }

  if(marker_02.isVisible()==true){
    let mk_pos = new THREE.Vector3();
    mk_pos.setFromMatrixPosition(marker_02.tag.object3D.matrixWorld);
    let x = mk_pos.x * width ;
    let y = mk_pos.y * -height;
    let z = mk_pos.z * width/2;
    let mk_rot = marker_02.tag.object3D.rotation;

    translate(x, y, z);
    rotateX(-mk_rot.x);
    rotateY(mk_rot.y);
    rotateZ(-mk_rot.z);
    rotateX(PI/2);

    texture(b_5);
    noStroke();
    rect(-320, -410, 640, 820);

    translate(0, 0, 80);
    texture(b_4);
    noStroke();
    rect(-320, -410, 640, 820);

    translate(0, 0, 80);
    texture(b_3);
    noStroke();
    rect(-320, -410, 640, 820);

    translate(0, 0, 80);
    texture(b_2);
    noStroke();
    rect(-320, -410, 640, 820);

    translate(0, 0, 80);
    texture(b_1);
    noStroke();
    rect(-320, -410, 640, 820);
  }

  if(marker_03.isVisible()==true){
    let mk_pos = new THREE.Vector3();
    mk_pos.setFromMatrixPosition(marker_03.tag.object3D.matrixWorld);
    let x = mk_pos.x * width ;
    let y = mk_pos.y * -height;
    let z = mk_pos.z * width/2;
    let mk_rot = marker_03.tag.object3D.rotation;

    translate(x, y, z);
    rotateX(-mk_rot.x);
    rotateY(mk_rot.y);
    rotateZ(-mk_rot.z);
    rotateX(PI/2);

    texture(c_5);
    noStroke();
    rect(-360, -410, 720, 820);

    translate(0, 0, 80);
    texture(c_4);
    noStroke();
    rect(-360, -410, 720, 820);

    translate(0, 0, 80);
    texture(c_3);
    noStroke();
    rect(-360, -410, 720, 820);

    translate(0, 0, 80);
    texture(c_2);
    noStroke();
    rect(-360, -410, 720, 820);

    translate(0, 0, 80);
    texture(c_1);
    noStroke();
    rect(-360, -410, 720, 820);

  }


    if(marker_04.isVisible()==true){
    let mk_pos = new THREE.Vector3();
    mk_pos.setFromMatrixPosition(marker_04.tag.object3D.matrixWorld);
    let x = mk_pos.x * width ;
    let y = mk_pos.y * -height;
    let z = mk_pos.z * width/2;
    let mk_rot = marker_04.tag.object3D.rotation;

    translate(x, y, z);
    rotateX(-mk_rot.x);
    rotateY(mk_rot.y);
    rotateZ(-mk_rot.z);
    rotateX(PI/2);

    // texture(d_0);
    // noStroke();
    // rect(-400, -400, 800, 800);

    // translate(0, 0, 50);
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
    noStroke();
    rect(-400, -400, 800, 800);
  }


}
   //texture(vid);
   //stroke(255);
   //strokeWeight(3);
   //rect(-width/2, -height/2, 584, 726);
   //image(vid, -width/2, -height/2);
// }

function vidLoad() {

  // vid.loop();
  // vid.volume(0);
  // vid.hide();

  a_3.loop();
  a_3.volume(0);
  a_3.hide();

  a_4.loop();
  a_4.volume(0);
  a_4.hide();

  a_5.loop();
  a_5.volume(0);
  a_5.hide();

  a_6.loop();
  a_6.volume(0);
  a_6.hide();

  a_7.loop();
  a_7.volume(0);
  a_7.hide();

  a_8.loop();
  a_8.volume(0);
  a_8.hide();

  a_12.loop();
  a_12.volume(0);
  a_12.hide();

  b_2.loop();
  b_2.volume(0);
  b_2.hide();

  b_3.loop();
  b_3.volume(0);
  b_3.hide();

  b_4.loop();
  b_4.volume(0);
  b_4.hide();

  c_2.loop();
  c_2.volume(0);
  c_2.hide();

  c_3.loop();
  c_3.volume(0);
  c_3.hide();

  c_4.loop();
  c_4.volume(0);
  c_4.hide();

  c_5.loop();
  c_5.volume(0);
  c_5.hide();

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

// function mouseClicked(){
//     if(read == true){

//     //set video loop here  
//     // vid.loop();

//     let arvid = document.getElementById('arjs-video');
//     if(arvid != null){
//       let style = window.getComputedStyle(arvid);
//       let style_width = style.width;
//       let style_height = style.height;
//       let style_left = style.marginLeft;
//       let style_top = style.marginTop;

//       let cvs = document.getElementById('defaultCanvas0');
//       cvs.style.width =  style_width;
//       cvs.style.height = style_height;
//       cvs.style.marginLeft = style_left;
//       cvs.style.marginTop =  style_top;

//       //console.log(style);
//       read = false;
//     }
//   }
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// (A) LOCK SCREEN ORIENTATION
function lock (orientation) {
  // (A1) GO INTO FULL SCREEN FIRST
  let de = document.documentElement;
  if (de.requestFullscreen) { de.requestFullscreen(); }
  else if (de.mozRequestFullScreen) { de.mozRequestFullScreen(); }
  else if (de.webkitRequestFullscreen) { de.webkitRequestFullscreen(); }
  else if (de.msRequestFullscreen) { de.msRequestFullscreen(); }

  // (A2) THEN LOCK ORIENTATION
  screen.orientation.lock(orientation);
}

// (B) UNLOCK SCREEN ORIENTATION
function unlock () {
  // (B1) UNLOCK FIRST
  screen.orientation.unlock();

  // (B2) THEN EXIT FULL SCREEN
  if (document.exitFullscreen) { document.exitFullscreen(); }
  else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
  else if (document.mozCancelFullScreen) { document.mozCancelFullScreen(); }
  else if (document.msExitFullscreen) { document.msExitFullscreen(); }
}