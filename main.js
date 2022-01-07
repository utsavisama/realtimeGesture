var nose_x = 0
var nose_y = 0
var left_wrist_x = 0
var right_wrist_x = 0
var difference = 0


function setup(){
canvas = createCanvas(550, 450)
canvas.position(560, 100)
video = createCapture(VIDEO)
video.size(450, 350)
video.position(100, 100)


var posenet = ml5.poseNet(video, modelLoaded)
posenet.on('pose', gotResults)
}

function modelLoaded(){
    console.log("POSENET IS LOADED!")
}
function draw(){
    background("grey")
    fill("hotpink")
    stroke("black")
    strokeWeight(6)
    square(nose_x, nose_y, difference)
    document.getElementById("square_sides").innnerHTML = "The size of the square = " + difference + "px"
}

function gotResults(results){
if(results.length>0){
    console.log(results)
    nose_x = results[0].pose.nose.x
    nose_y = results[0].pose.nose.y
    left_wrist_x = results[0].pose.leftWrist.x
    right_wrist_x = results[0].pose.rightWrist.x
    difference = floor(left_wrist_x - right_wrist_x)
}
}