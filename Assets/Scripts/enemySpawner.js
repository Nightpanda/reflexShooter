#pragma strict

var blackTriangle : Sprite;
var blueTriangle : Sprite;
var redTriangle : Sprite;
var enemyPrefab : Rigidbody2D;
var blinkerPrefab : Rigidbody2D;
var shooterPrefab : Rigidbody2D;
var fuserPrefab : Rigidbody2D;
var enemyObject : GameObject;
var fuserObject : GameObject;
var shooterObject : GameObject;
var blinkerObject : GameObject;
var playerPosition : Transform;
var highScore : int;
static var currentScore : int = 0;
var scoreString : String;
var highString : String;
var playerObject : GameObject;
var playerAlive : boolean = true;
var waveSize : float;
var closeToplayer : boolean = true;
var InstantiationTimer : float;
var blinkerCount : int;
var increaseTimer : float;
var increaseFreq : float;
var blinkerStartspeed : float;
var enemyStartspeed : float;
var trianglesCount : int;
var fuserCount : int;
var bossCounter : int = 0;

function Awake () {
	enemyStartspeed = 0.01;
	currentScore = 0;
	bossCounter = 0;
	trianglesCount = 0;
	
	
}

function Update () {

var xPos : float; 
var yPos : float; 
var spawnPosition : Vector2;
var enemy : Rigidbody2D;
var shooterEnemy : Rigidbody2D;
var fuserEnemy : Rigidbody2D;
var blinker : Rigidbody2D;
var tempRandom : int;
var playerTemp : Vector2;
var i : int = 0;
var playerX : float;
var playerY : float;
var playerXmin : float;
var playerXmax : float;
var playerYmin : float;
var playerYmax : float;
var randSpeed : float;
var tempSize : float;


//Debug.Log(Time.deltaTime);
InstantiationTimer = InstantiationTimer - Time.deltaTime;
//Debug.Log(InstantiationTimer);
if (InstantiationTimer <= 0 && playerAlive == true)

{
//Random position for the enemy spawn

if (playerAlive == true){
i = 0;
//How many triangles to spawn.
var maxSpawn : int;

if (waveSize < 3){
	maxSpawn = 1;
}
else if (waveSize >= 3 && waveSize < 7){
	maxSpawn = 2;
}
else if (waveSize >= 7 && waveSize < 18){
	maxSpawn = 3;
}
else {
	maxSpawn = 4;
}


while (i < maxSpawn){//waveSize){
closeToplayer = true;

while (closeToplayer == true){	
	//playerTemp = Vector2(playerPosition.position.x, playerPosition.position.y);
	playerX = playerPosition.position.x;
	playerY = playerPosition.position.y;
	playerXmin = playerX - 1.0;
	playerXmax = playerX + 1.0;
	playerYmin = playerY - 1.0;
	playerYmax = playerY + 1.0;
	
	xPos = Random.Range(-3.5,3.5);
	yPos = Random.Range(-3.5,3.5);
	if (xPos < playerXmin || xPos > playerXmax){
		if (yPos < playerYmin || yPos > playerYmax){
		closeToplayer = false;		
		};
	};
};

spawnPosition = Vector2(xPos,yPos);

	

		
//Random color for the enemy
if (waveSize > 3){
tempSize = 3;
}
else {
tempSize = waveSize;
}
tempRandom = Random.Range(0,tempSize);
//Debug.Log(tempRandom);
	
if (tempRandom == 0) {
	enemyObject.GetComponent(enemyController).enemyColor = "red";
	enemyObject.GetComponent(SpriteRenderer).sprite = redTriangle;
}
	
else if (tempRandom == 1) {
	enemyObject.GetComponent(enemyController).enemyColor = "black";
	enemyObject.GetComponent(SpriteRenderer).sprite = blackTriangle;

}
	
else if (tempRandom == 2) {
	enemyObject.GetComponent(enemyController).enemyColor = "blue";
	enemyObject.GetComponent(SpriteRenderer).sprite = blueTriangle;
};

enemy = Instantiate (enemyPrefab, spawnPosition, Quaternion.identity) as Rigidbody2D;
trianglesCount += 1;

i += 1;
}
}


//Blinker Spawner
//Random position for the enemy spawn

if (waveSize > 5){ //&& blinkerCount < 5){
i = 0;
//tempSize = waveSize - 5.0;
while (i < 1){//tempSize){
closeToplayer = true;

//Prevent the enemies from spawning too close to the player
while (closeToplayer == true){	
	//playerTemp = Vector2(playerPosition.position.x, playerPosition.position.y);
	playerX = playerPosition.position.x;
	playerY = playerPosition.position.y;
	playerXmin = playerX - 1.0;
	playerXmax = playerX + 1.0;
	playerYmin = playerY - 1.0;
	playerYmax = playerY + 1.0;
	
	xPos = Random.Range(-3.5,3.5);
	yPos = Random.Range(-3.5,3.5);
	if (xPos < playerXmin || xPos > playerXmax){
		if (yPos < playerYmin || yPos > playerYmax){
		closeToplayer = false;	
		};
	};	
};

spawnPosition = Vector2(xPos,yPos);

//Spawn a Blinker

//Set random speed for the Blinker

randSpeed = Random.Range(0.01, 0.04);
blinkerStartspeed = randSpeed;
blinker = Instantiate (blinkerPrefab, spawnPosition, Quaternion.identity);
blinkerCount += 1;


i += 1;
}
}

//Spawn shooter units
if (currentScore > 50 || waveSize > 12){
	//shooterTriangle
	i = 0;

while (i < 1){
closeToplayer = true;

while (closeToplayer == true){	
	playerX = playerPosition.position.x;
	playerY = playerPosition.position.y;
	playerXmin = playerX - 1.0;
	playerXmax = playerX + 1.0;
	playerYmin = playerY - 1.0;
	playerYmax = playerY + 1.0;
	
	xPos = Random.Range(-3.5,3.5);
	yPos = Random.Range(-3.5,3.5);
	if (xPos < playerXmin || xPos > playerXmax){
		if (yPos < playerYmin || yPos > playerYmax){
		closeToplayer = false;		
		};
	};
};

spawnPosition = Vector2(xPos,yPos);

shooterEnemy = Instantiate (shooterPrefab, spawnPosition, Quaternion.identity);


i += 1;
};

};

//Spawn fuser units
if (trianglesCount > 10 || waveSize > 15 && fuserCount == 0){

	i = 0;

while (i < 1){
closeToplayer = true;

while (closeToplayer == true){	
	playerX = playerPosition.position.x;
	playerY = playerPosition.position.y;
	playerXmin = playerX - 1.0;
	playerXmax = playerX + 1.0;
	playerYmin = playerY - 1.0;
	playerYmax = playerY + 1.0;
	
	xPos = Random.Range(-3.5,3.5);
	yPos = Random.Range(-3.5,3.5);
	if (xPos < playerXmin || xPos > playerXmax){
		if (yPos < playerYmin || yPos > playerYmax){
		closeToplayer = false;		
		};
	};
};

spawnPosition = Vector2(xPos,yPos);

tempRandom = Random.Range(0,3);

	
if (tempRandom == 0) {
	fuserObject.GetComponent(fuserController).fuserColor = "red";
	fuserObject.GetComponent(SpriteRenderer).sprite = redTriangle;
}
	
else if (tempRandom == 1) {
	fuserObject.GetComponent(fuserController).fuserColor = "black";
	fuserObject.GetComponent(SpriteRenderer).sprite = blackTriangle;

}
	
else if (tempRandom == 2) {
	fuserObject.GetComponent(fuserController).fuserColor = "blue";
	fuserObject.GetComponent(SpriteRenderer).sprite = blueTriangle;
};

fuserEnemy = Instantiate (fuserPrefab, spawnPosition, Quaternion.identity);
fuserCount += 1;

i += 1;
};

};


increaseTimer += increaseFreq;
InstantiationTimer += increaseTimer;	
i = 0;
enemyStartspeed += 0.0005;
waveSize += 0.25;

};
	
if (Input.GetKeyDown ("r")) 
	{  
    Application.LoadLevel (0);
    enemyStartspeed = 0.01;
    currentScore = 0;  
    blinkerCount = 0;
    };

scoreString = currentScore.ToString();
//highString = highScore.ToString();
GameObject.Find("scoreText").GetComponent(UI.Text).text = "Score:"  + scoreString; // + " " + "--" + " " + "High Score:" + highString;



}