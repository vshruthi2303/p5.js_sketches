var kitty;
function preload() {
Face1 = loadImage("Screenshot (485).png");
Face2 = loadImage("Screenshot (486).png");
Face3 = loadImage("Screenshot (487).png");
Face4 = loadImage("Screenshot (488).png");
Face5 = loadImage("Screenshot (489).png");
Face6 = loadImage("Screenshot (490).png");
  var button;
}
function setup() {
createCanvas(400, 400);
  button = createButton("Pick your mood for 2020 -");
  slider= createSlider(0, 300,60,60)
   
}
function draw() {
background(255);

  if(slider.value()==0)
    {image(Face1,0,0);}
  if(slider.value()==60)
    { image(Face2,0,0);}
if(slider.value()==120)
    { image(Face3,0,0);}
if(slider.value()==180)
    { image(Face4,0,0);}
if(slider.value()==240)
    { image(Face5,0,0);}
if(slider.value()==300)
    { image(Face6,0,0);}


}




//https://artsandculture.google.com/usergallery/QwJSNYn5TFM6KA
//https://artsandculture.google.com/usergallery/QQKSzB9LBFhrIw
//https://artsandculture.google.com/usergallery/pwLCl2yb0RpEKw
//https://artsandculture.google.com/usergallery/dwLSDKHlKh5JJw