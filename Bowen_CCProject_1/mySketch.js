// CC Project 1
// Bowen Gong bg1941

//Global variables
var open = 1;                  //variable control window to open and close

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#000000');  //black #000000
}

function draw() {
	if (open%2 == 0){  //even number, open window     
		draw_open_window();
	}
	else{  //odd number, close window
		draw_close_window();
	}

}

function draw_close_window(){
	background('#000000');
	rectMode(CENTER);
	noFill();
	rect(windowWidth/2,windowHeight/2,650,650,3);
	fill('#191970');
	
	rect(605,210,250,270,3);
	rect(605,505,250,270,3);
	rect(925,210,250,270,3);
	rect(925,505,250,270,3);
	stroke('#191970');
	line(765,35,765,680);
}

function draw_open_window(){
	noStroke();
	rectMode(CENTER);
	fill('#191970');        //night blue 
	rect(windowWidth/2, windowHeight/2,650,650)
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

function mousePressed(){
	open++;
}