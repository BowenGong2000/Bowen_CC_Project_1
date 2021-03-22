// CC Project 1
// Bowen Gong bg1941

//Global variables
var open = 1;                  //variable that control window to open and close
var rains = [];                //array that stores numbers of rain drops
var r,g,b;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#000000');
	for (var i=0;i<250;i++){
		rains[i] = new Rain();
	} 
} 


function draw() {
	var flash = int(random(1,3));  //variable used to switch between black and white, create a lighntning like effect
	if (flash == 1){
		r=255;
		g=255;
		b=255;
	}
	else{
		r=0;
		g=0;
		b=0;
	}
	
	if (open%2 == 0){  //even number, open window     
		draw_open_window();
		lightning();
	}
	else{  //odd number, close window
		draw_close_window();
	}
}//end of draw


function draw_close_window(){
	background('black');
		rectMode(CENTER);
		fill('#191970');
		noStroke();
		rect(windowWidth/2,windowHeight/2,650,650,3); 
			//// rain ////
		for (var i=0;i<rains.length;i++){
   		rains[i].drop();
    	rains[i].display();
		}
		rectMode(CORNER);
		noStroke();
		fill('#000000');
		rect(442,32,35,650,3); 
		rect(442,32,650,40,3);
		rect(442,645,650,40,3);
		rect(1055,32,40,650,3);
		rectMode(CENTER);
		rect(windowWidth/2,windowHeight/2,600,25);
		rect(windowWidth/2,windowHeight/2,60,600);
		noFill();
		stroke('#191970');
		line(windowWidth/2,35,windowWidth/2,678);
		rect(windowWidth/2,windowHeight/2,650,650,3);
}// end of draw_close_window()


function draw_open_window(){
	background('#000000');
	noStroke();
	rectMode(CENTER);
	fill('#191970');        //night blue 
	rect(windowWidth/2, windowHeight/2,650,650)
	//// rain ////
	for (var i=0;i<rains.length;i++){
    rains[i].drop();
    rains[i].display();
	}
	
	//// window ////
	noStroke();
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
}// end of draw_open_window()


function lightning(){
		fill(r,g,b,63);
		rectMode(CENTER);
		rect(windowWidth/2,windowHeight/2,650,650)
}

function mousePressed(){
	open++;
}
