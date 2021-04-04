// CC Project 1
// Bowen Gong bg1941


//Instructions: 
//- Click your mouse to control the open and close window.
//- When window open, the lightning will be lauched in 4s, and will repeat randomly
//- When the window is open the black object will start moving to you, 
//wait until the object reach you, which is the end. 
//- You can reset the object by reopen the window. 
//- Pretent it is a ghost which will come to you as soon as you open your window,
//and close your window will protect you.
//- My adjective to illustrate is : unexpected.

//- Bowen 


//Global variables
var windowwidth,windowheight
var open = 1;                  //variable that control window to open and close
var rains = [];                //array that stores numbers of rain drops
var r,g,b;
//var stop = false;            //variable that controls the launch of the lightning
var face;


function setup() {
	window.print("Click mouse to control the window, wait and see what happen,close and reopen the window to reset the scene");
	createCanvas(1536,714);
	background('#000000');
	windowwidth = 1536;
	windowheight = 714;
	increment = 0;
	sizeX = 6;
	sizeY = 8;
	face = new Movingobj();
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
		setTimeout(lightning,4000);  // wait 4s to lauch the lightning
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
	rect(windowwidth/2,windowheight/2,650,650,3); 
	fill(0,0,0,100);
	rect(windowwidth/2,windowheight/2,650,650,3); 
	//// moon ////
	fill('#999900');
	circle(950,150,80);
	//// moutain ////
	var color1 = color(105,105,105); 
	var color3 = color(119,136,153);
	var color2 = color(128,128,128);
	draw_mountain(color1);
	push();
	translate(0, 15);
	draw_mountain(color2);
	translate(0,22);
	draw_mountain(color3);
	pop();
	//// land ////
	fill('#423324');
	rect(768,537,649,290);
		//// road ////
	fill('#4D5656');
	quad(745,393,792,393,880,560,655,560);
	quad(848,500,1092,500,1092,560,880,560);
	//// rain ////
	for (var i=0;i<rains.length;i++){
   	rains[i].drop();
    rains[i].display();
	}
	//// window ////
	rectMode(CORNER);
	noStroke();
	fill('#000000');
	rect(442,32,35,650,3); 
	rect(442,32,650,40,3);
	rect(442,645,650,40,3);
	rect(1055,32,40,650,3);
	rectMode(CENTER);
	rect(windowwidth/2,windowheight/2,600,25);
	rect(windowwidth/2,windowheight/2,60,600);
	noFill();
	stroke('#191970');
	line(windowwidth/2,35,windowwidth/2,678);
	rect(windowwidth/2,windowheight/2,650,650,3);
	face.reset();
	fill(0,0,0,100);
	rect(windowwidth/2,windowheight/2,650,650,3); 
}// end of draw_close_window()


function draw_open_window(){
	background('#000000');
	noStroke();
	rectMode(CENTER);
	fill('#191970');        //night blue 
	rect(windowwidth/2, windowheight/2,650,650)
	//// moon ////
	fill('#999900');
	circle(950,150,80);
	//// mountain ////
	var color1 = color(105,105,105); 
	var color3 = color(119,136,153);
	var color2 = color(128,128,128);
	draw_mountain(color1);
	push();
	translate(0, 15);
	draw_mountain(color2);
	translate(0,22);
	draw_mountain(color3);
	pop()
	//// land ////
	fill('#423324');
	rect(768,537,649,290);
	//// road ////
	fill('#4D5656');
	quad(745,393,792,393,880,560,655,560);
	quad(848,500,1092,500,1092,560,880,560);
	//// rain ////
	for (var i=0;i<rains.length;i++){
    rains[i].drop();
    rains[i].display();
	}
	face.move();
	face.display();
	face.stop();
	face.draw_face();
	fill(0,0,0,100);
	rect(windowwidth/2,windowheight/2,650,650,3); 
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
	quad(windowwidth-443,50,windowwidth-463,80,windowwidth-463,630,windowwidth-443,660); //left bar
	rectMode(CORNER);
	rect(windowwidth-463,50,20,30);
	quad(windowwidth-463,50,windowwidth-535,90,windowwidth-515,100,windowwidth-463,80); //top bar
	quad(windowwidth-535,90,windowwidth-535,620,windowwidth-515,600,windowwidth-515,100); //right bar
	rect(windowwidth-463,630,20,30);
	quad(windowwidth-535,620,windowwidth-463,660,windowwidth-463,630,windowwidth-515,600); //bottom bar 
	rect(windowwidth-530,330,80,15); //middle bar
	rectMode(CENTER);
	//fill(0,0,0,100);
}// end of draw_open_window()


function lightning(){
	//if(!stop){
		fill(r,g,b,70);
		rectMode(CENTER);
		rect(windowwidth/2,windowheight/2,650,650)
	//}
}


function mousePressed(){
	open++;
}


