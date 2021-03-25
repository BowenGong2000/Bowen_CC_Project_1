class Rain{
	constructor(){
		this.x = random(windowWidth/2-322,windowWidth/2+323);
		this.y = random(30,100);
		this.drop_speed = random(10,18);
		this.z = random(0,20);     //used to control the rain thickness, so rain drop far away will look thinner and rain drop coser will look thicker
	}
	
	drop(){
		this.y = this.y + this.drop_speed;
		if(this.y > 665){   //reset the rain drop to top 
			this.y = random(30,100);
		}
	}
	display(){
		var thickness = map(this.z,0,20,0.5,3);
		strokeWeight(thickness);
		stroke('#5F9EA0');  //;light blue
		line(this.x,this.y,this.x,this.y+15);
	}
}