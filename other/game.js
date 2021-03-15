var Speed = 1;
var ii = 0;
var travel = 0;
var stamina = 50;
var MAXstamina = stamina;
var a = 0;
var xl=millis();

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    //fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    //fill(0, 0, 0);
    // textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var btn1 = new Button({
        x:92,
        y:200,
        label: "Press To restart",
        onClick: function() {
            Program.restart();
        }
    });











var Beaver = function(x, y) {
    this.x = x-150;
    this.y = y;
    this.img = getImage("creatures/Hopper-Happy");
    this.sticks = 0;
};

Beaver.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-90);
    image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function() {
    this.img = getImage("creatures/Hopper-Jumping");
    this.y -= 5;
    if (stamina<=0) {stamina=0;}else {stamina=stamina-1;}
};

Beaver.prototype.fall = function() {
    this.img = getImage("creatures/Hopper-Happy");
    this.y += 5;
    if (stamina>=MAXstamina) {stamina=MAXstamina;}else {stamina=stamina+0.50;}
};

Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y = -400;
        this.sticks=this.sticks+5+10*floor(Speed/4)+floor(stamina/2);
        if (stamina>=MAXstamina) {stamina=MAXstamina;}else {stamina=stamina+25;}
    }
};

var Stick = function(x, y) {
    this.x = x+40;
    this.y = y;
};

Stick.prototype.draw = function() {
    noStroke();
    fill(89, 71, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
    fill(34, 212, 194);
    rectMode(CORNER);
    rect(this.x-0-Speed*8, this.y, 0+Speed*8, 1);
};

var beaver = new Beaver(200, 300);

var sticks = [];
for (var i = 0; i < 200; i++) {  
    sticks.push(new Stick(i*(40+i*1.5)+300,random(100, 250)));//  6800 /7480
    this.x = i*(40+i*2)+300;
}

var grassXs = [];
for (var i = 0; i < 50; i++) { 
    grassXs.push(i*20);
}

var treeXs = [];
for (var i = 0; i < 21; i++) { 
    treeXs.push(i*20);
}
//beaver.sticks=7481;
draw = function() {           //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    if (sticks[sticks.length-1].x <20){
        
        background(64, 64, 61);
            textSize(30);
            fill(34, 212, 194);
        
        textSize(30);
        text("You've Reached the end!",40,64);
        
        //while (beaver.sticks>=0) {
            
            //for(var i=0;i<100000000;i++)
            //{}
            
            
            
            //println(a+","+a/7480*100);
            text("Score: " + beaver.sticks, 137, 100);
            
            if (beaver.sticks>=1){
                if (beaver.sticks>=1000) {beaver.sticks=beaver.sticks-100;
                a=a+100;}else if (beaver.sticks>=100){beaver.sticks=beaver.sticks-10;
                a=a+10;}else {
                beaver.sticks=beaver.sticks-1;
                a++;}
            }
            
            if (a/7480*100>100){
            image(getImage("cute/Star"),150,80);    
            }
            
            if (a/7480*100>=80){
            image(getImage("cute/Star"),290,150);    
            }
            if (a/7480*100>=60) {
                image(getImage("cute/Star"),150,160);
            }
            if (a/7480*100>=25) {
                image(getImage("cute/Star"),10,150);
            }
            
        //}               //stamina/MAXstamina*100/ 7480
        //a=a-1;
        return;
    }
//println(sticks.length);
    
    if (stamina<=0) {
        noFill();
        textSize(30);
        noStroke();
        btn1.draw();
      
        stroke(0, 0, 0);
        rect(100,215,215,27);
        
        
        
        fill(255, 0, 0);
        text("You've Failed!",110,160);
        
        
        /*
        text("Press To restart",98,240);
        noFill();
        
        
        
        if (mouseX<=96 && mouseX>=215+96 && mouseY<=215 && mouseY>=27+215) {
            stroke(26, 217, 80);
        rect(96,215,215,27);
        }
        
        println(mouseX + "," + mouseY);*/
        }
    
    if (stamina>0){
    // static
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 30, 20);
        grassXs[i] -= Speed+1;
        
        travel=travel+Speed;
        if (grassXs[i] < -20-Speed) {
            grassXs[i] = width;
        }
        
            //println(grassXs[i]);
    }
    
    for (var i = 0; i < treeXs.length; i++) {
        if (ii===3){
            image(getImage("cute/TreeTall"), treeXs[i], height*0.74, 30, 55);
            ii=0;
        }
    
    treeXs[i] -= Speed+0;
        if (treeXs[i] < -25) {
            treeXs[i] = width;
            Speed=Speed+0.00625;
            
        }ii++;
    }
    
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -= Speed/2+0.5;
    }
    
    textSize(18);
    text("Score: " + beaver.sticks, 20, 30);
    //text(stamina, 168, 50);
    noFill();
    stroke(0, 0, 0);
    rect(149,18,101,11);
    noStroke();
    fill(187, 255, 0);
    rect(150,19,stamina/MAXstamina*100,10);
    
    
    /*if (beaver.sticks/sticks.length >= 0.95) {
        textSize(36);
        text("YOU WIN!!!!", 100, 200);
    }*/
    
    if (keyIsPressed && keyCode === 0 && stamina>0) {
        beaver.hop();
    } else {
        /*if (stamina>0){*/beaver.fall();//}
    }
    beaver.draw();}
};
mouseClicked = function() {
    if (stamina<=0) {
        btn1.handleMouseClick();} 
    
};
