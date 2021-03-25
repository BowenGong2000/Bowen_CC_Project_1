class Movingobj{
	constructor(){
		this.x = windowWidth/2;
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
		fill('red');
		ellipse(this.x, this.y, this.sizeX,this.sizeY);
	}
	stop(){
		if(this.y>570){
			this.yspeed = 0;
			this.addsizeX = 0;
			this.addsizeY = 0;
		}
	}
	reset(){
		this.y = 400;
		this.yspeed = 0.1;
		this.addsizeX = 0.06;
		this.addsizeY = 0.06;
	}
}
