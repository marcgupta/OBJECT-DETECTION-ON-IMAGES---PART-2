status = "";
tv = "";

function preload() {

tv = loadImage("tv.avif");

}

function setup() {

    canvas = createCanvas(500,350);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(tv,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw(){
    image(tv,0,0,500,350);
}