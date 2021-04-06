class Movingobj{
	constructor(){
		this.x = windowwidth/2;
		this.y = 400;
		this.yspeed = 0.1;
		this.sizeX = 30;
		this.sizeY = 40;
		this.addsizeX = 0.15;
		this.addsizeY = 0.2;
		this.accleration = 0.0005;
		this.eyesize = 10;
		this.addeyesize = 0.01;
		this.eye_dist = 5;
		this.add_dist = 0.01;
	}
	move(){
		this.y = this.y + this.yspeed;
		this.yspeed = this.yspeed + this.accleration;
		this.sizeX = this.sizeX + this.addsizeX;
		this.sizeY = this.sizeY + this.addsizeY;
		this.eyesize = this.eyesize + this.addeyesize;
		this.eye_dist = this.eye_dist + this.add_dist;
	}
	display(){
		noStroke();
		fill(0,0,0,200);
		ellipse(this.x, this.y, this.sizeX,this.sizeY);	
		//circle(this.x-this.eye_dist*2,this.y,20);
		//circle(this.x+this.eye_dist*2,this.y,20)
		
		fill(139,0,0);
		circle(this.x-this.eye_dist,this.y-13,this.eyesize);
		circle(this.x+this.eye_dist,this.y-13,this.eyesize);
	}
	stop(){
		if(this.y>610){
			this.yspeed = 0;
			this.addsizeX = 0;
			this.addsizeY = 0;
			
		}
	}
	reset(){
		this.sizeX = 30;
		this.sizeY = 40;
		this.y = 400;
		this.yspeed = 0.1;
		this.addsizeX = 0.2;
		this.addsizeY = 0.23;
		this.eyesize = 10;
		this.eye_dist = 5;
		this.add_dist = 0.01;
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
