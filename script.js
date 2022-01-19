var VAR_1, VAR_2, VAR_3, VAR_4 ;

var NB_S, NB_BH;

var ALPHA, R;

var CYCLE;


function setup() {
	
	createCanvas(windowWidth, windowHeight);
	
  background('black');
  strokeWeight(2);
	colorMode(HSB,360);
	
	frameRate(60);	//speed
	CYCLE = 0;
	
	NB_S = 100;								// Number of Lines
	ALPHA = TWO_PI / NB_S;
	R = windowHeight / 4;
	
	
	NB_BH = 5;								// 0 = circle shape higher # = less like circle
			
	
	VAR_1 = new VAR();
	VAR_2 = new VAR();
	VAR_3 = new VAR();
	VAR_4 = new VAR();
		
}
	

function draw() {	
	
	CYCLE = CYCLE + 1.5;
	stroke(CYCLE, 360, 360);
	
	translate(windowWidth/2, windowHeight/2);
	
  VAR_1.nebulae_life ();
	VAR_2.nebulae_life ();
  VAR_3.nebulae_life ();
	VAR_4.nebulae_life ();

			
	if ( CYCLE > 500 ) { setup() }; //cycle time
	
	if ( mouseIsPressed == true ) { setup() } //reset

}
class VAR {					
				
		constructor () {
			
			this.S = [];
			this.BH = [];
				
			//create initial position 
					
			for ( var s = 0; s < NB_S; s++) { this.S[s] = createVector( R * cos(ALPHA * s), R * sin(ALPHA *s) ) }
			
	
			var ALPHA_0 = random(TWO_PI);
		
			var R_0 = random(R);
			var CENTRE_0 = createVector( R_0 * cos(ALPHA_0), R_0 * sin(ALPHA_0) );

			var ALPHA_1 = random(TWO_PI); 
			var BETA = TWO_PI / NB_BH;
		
			for ( var bh = 0; bh < NB_BH; bh++) {
				
					var MOON = createVector(R, 0);
					MOON.rotate(ALPHA_1 + BETA * bh);
					this.BH[bh] = CENTRE_0.copy();						
					this.BH[bh].add(MOON);						
			}
		}
	nebulae_life () {
					
		for ( var s = 0; s < NB_S; s++) {	
				
			var S_X = this.S[s].x;					// Initial position 
			var S_Y = this.S[s].y;
		
			var direction = 0.0;
			for ( var bh = 0; bh < NB_BH; bh++) { direction += atan2( this.BH[bh].y - S_Y, this.BH[bh].x - S_X ) }
		
			var MOVE = createVector(4, 0);
			MOVE.rotate(direction);
			this.S[s] = this.S[s].add(MOVE);				// New position 								 
			
			line(S_X, S_Y, this.S[s].x, this.S[s].y);	
		}
				
	}
}		

// https://wallpaperaccess.com/cool-designs 

// https://www.youtube.com/watch?v=o0ElGkQzqLw

//https://www.google.com/search?q=nebula&rlz=1C5CHFA_enUS819US819&sxsrf=AOaemvLX_v9J3Xzov-4EwOwUpCQbvAFc0Q:1635864210173&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiBjJeJ9fnzAhV4p3IEHVC1B4gQ_AUoAXoECAEQAw&biw=1280&bih=696&dpr=2#imgrc=XD-Oy0ALLee-GM