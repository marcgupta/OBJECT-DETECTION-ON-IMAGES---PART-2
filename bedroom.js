status = "";
bedroom = "";

function preload() {

bedroom = loadImage("bedroom.avif");

}

function setup() {

    canvas = createCanvas(500,350);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(bedroom,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw(){
    image(bedroom,0,0,500,350);
}