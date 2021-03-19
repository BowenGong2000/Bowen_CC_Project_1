// CC Project 1
// Bowen Gong bg1941

//Global variables
var length = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#FFFFFF');  //black #000000
	rectMode(CENTER);

}

function draw() {
	fill('#191970');
	rectMode(CENTER);
	rect(windowWidth/2, windowHeight/2,650,650)
	fill('#000000')
	quad(443,50,463,80,463,630,443,660);
	rectMode(CORNER);
	rect(443,50,20,30);
	quad(463,50,535,90,515,100,463,80); 
	quad(535,90,535,600,515,570,515,100); 
}