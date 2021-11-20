function preload() {

}
function setup() {
    canvas = createCanvas(700,500);
    canvas.center();
    video = createCapture(VIDEO);
	video.parent("vid");
  video.size(800,400);
  posenet = ml5.poseNet(video, modeload);
  posenet.on('pose', gotPoses);
}
function modeload() {
	console.log("A log: Loaded");
	
}
function draw() {

}