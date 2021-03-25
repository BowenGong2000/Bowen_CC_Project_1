function emoji(x, y) {
	fill(255, 215, 0);
	strokeWeight(15);
	circle(x, y, 200);
	
	fill('white');
	circle(x-45,y-30,60);
	circle(x+45,y-30,60);
	fill('black');
	circle(x-30,y-40,20);
	circle(x+60,y-40,20);
	rectMode('CENTER');
	fill(255, 215, 0); 
	rect(windowwidth/2,y,160,30 );
	
	fill('#B22222');
	circle(windowwidth/2,windowheight/2-60,90);
	fill(255,215,0);
	rect(windowwidth/2,y+15,160,40);
}