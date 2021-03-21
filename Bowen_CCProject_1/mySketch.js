// CC Project 1
// Bowen Gong bg1941

//Global variables
var length = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#000000');  //black #000000
	rectMode(CENTER);
	fill('#191970');        //night blue 
	rect(windowWidth/2, windowHeight/2,650,650)

}

function draw() {
	//draw_open_window();
	//background('#000000');
	fill('#191970');        //night blue 
	rect(windowWidth/2, windowHeight/2,650,650)
	rectMode(CENTER);
	rect(600,210,250,270);
	rect(600,500,250,270);
	
}

function draw_open_window(){
	//left window 
	fill('#000000')
	quad(443,50,463,80,463,630,443,660); //left bar
	rectMode(CORNER);
	rect(443,50,20,30);
	quad(463,50,535,90,515,100,463,80); //top bar
	quad(535,90,535,620,515,600,515,100); //right bar
	rect(443,630,20,30);
	quad(535,620,463,660,463,630,515,600); //bottom bar 
	rect(450,330,80,15); //middle bar
	
	//right window
	quad(windowWidth-443,50,windowWidth-463,80,windowWidth-463,630,windowWidth-443,660); //left bar
	rectMode(CORNER);
	rect(windowWidth-463,50,20,30);
	quad(windowWidth-463,50,windowWidth-535,90,windowWidth-515,100,windowWidth-463,80); //top bar
	quad(windowWidth-535,90,windowWidth-535,620,windowWidth-515,600,windowWidth-515,100); //right bar
	rect(windowWidth-463,630,20,30);
	quad(windowWidth-535,620,windowWidth-463,660,windowWidth-463,630,windowWidth-515,600); //bottom bar 
	rect(windowWidth-530,330,80,15); //middle bar
}
