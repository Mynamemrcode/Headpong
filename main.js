rightWristx = "";
rightWristy = "";
rightWristscore= "";
status = "";
function preload() {

}
function setup() {
    canvas = createCanvas(700,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  
  posenet = ml5.poseNet(video, modeload);
  posenet.on('pose', gotPoses);
}
function srat() {
    status="start";
    document.getElementById("status").innerHTML = "Game Is Loading..."
}
function modeload() {
	console.log("A log: Loaded");
	
}
function gotPoses(results){
    if(results.length > 0) {
        rightWristx = results[0].pose.rightWrist.x;
    }
}
function draw() {
image(video, 0,0,700,500);
}