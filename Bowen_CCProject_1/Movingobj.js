class Movingobj{
	constructor(){
		this.x = windowwidth/2;
		this.y = 400;
		this.yspeed = 0.1
		this.sizeX = 10;
		this.sizeY = 10;
		this.addsizeX = 0.08;
		this.addsizeY = 0.08;
	}
	move(){
		this.y = this.y + this.yspeed;
		this.sizeX = this.sizeX + this.addsizeX;
		this.sizeY = this.sizeY + this.addsizeY;
	}
	display(){
		noStroke();
		fill(0,0,0,200);
		ellipse(this.x, this.y, this.sizeX,this.sizeY);
	}
	stop(){
		if(this.y>610){
			this.yspeed = 0;
			this.addsizeX = 0;
			this.addsizeY = 0;
		}
	}
	reset(){
		this.sizeX = 10;
		this.sizeY = 10;
		this.y = 400;
		this.yspeed = 0.1;
		this.addsizeX = 0.06;
		this.addsizeY = 0.06;
	}
	draw_face(){
		if(this.y>610){
					
		fill(255, 215, 0);
		strokeWeight(15);
		circle(this.x, this.y, 200);

		fill('white');
		circle(this.x-45,this.y-30,60);
		circle(this.x+45,this.y-30,60);
		fill('black');
		circle(this.x-30,this.y-40,20);
		circle(this.x+60,this.y-40,20);
		rectMode('CENTER');
		fill(255, 215, 0); 
		rect(windowwidth/2,this.y,160,30 );

		fill('#B22222');
		circle(windowwidth/2,this.y+50,90);
		fill(255,215,0);
		rect(windowwidth/2,this.y+15,160,40);
	
		}
	}
	
}
