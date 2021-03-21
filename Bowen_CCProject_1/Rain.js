class Rain{
	constructor(){
		this.x = random(windowWidth);
		this.y = random(0,100);
		this.drop_speed = random(10,20);
	}
	
	drop(){
		this.y = this.y + this.drop_speed;
		if(this.y > windowHeight){
			this.y = random(0,100);
		}
	}
	
	display(){
		strokeWeight(2);
		stroke('#B0E0E6');
		line(this.x,this.y,this.x,this.y+15);
	}
}