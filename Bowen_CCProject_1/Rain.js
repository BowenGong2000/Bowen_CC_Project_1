class Rain{
	constructor(){
		this.x = random(windowWidth/2-325,windowWidth/2+323);
		this.y = random(35,100);
		this.drop_speed = random(10,18);
	}
	
	drop(){
		this.y = this.y + this.drop_speed;
		if(this.y > 665){   //reset the rain drop to top 
			this.y = random(35,100);
		}
	}
	
	display(){
		strokeWeight(2);
		stroke('#B0E0E6');  //;ight blue
		line(this.x,this.y,this.x,this.y+15);
	}
}