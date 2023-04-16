Status = "";
img = "";
img1 = "";
img2 = "";
img3 = "";
img4 = "";

function preload()
{
    img = loadImage('bedroomimg.png');
    img1 = loadImage('tv&acimg.png'); 
    img2 = loadImage('deskimg.png'); 
    img3 = loadImage('bottlesimg.png'); 
    img4 = loadImage('fruitbasketimg.png');  
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded()
{
  console.log("Model Loaded!")
 Status= true;
 objectDetector.detect(img, gotResult);
 objectDetector.detect(img1, gotResult);
 objectDetector.detect(img2, gotResult);
 objectDetector.detect(img3, gotResult);
 objectDetector.detect(img4, gotResult);
}

function gotResult(error, results)
{
  if (error){
    console.log(error);
  }
  console.log(results);
  objects = results;
}

