#pragma strict

var shooterColor : String;
var spawnerPos : Transform;
var playerObject : GameObject; 
var shooterObject : GameObject;
var shooterPos : Transform;
var shooterSpeed : float = 0.01;
var blackShooter : Sprite;
var blueShooter : Sprite;
var redShooter : Sprite;
var blinkFreq : int = 40;
var enemyProjectileprefab : GameObject;
var enemyProjectile : Rigidbody2D;
var shooterRight : Transform;
var shooterLeft : Transform;
var shooterBottom : Transform;
var redEnemyprojectile : Sprite;
var blueEnemyprojectile : Sprite;
var blackEnemyprojectile : Sprite;



function OnCollisionEnter2D (col : Collision2D)
{
	var spawnerObject : GameObject;
	spawnerObject = GameObject.Find("spawner");
	//var highscore : int; 
	//var currentscore : int; 
	//highscore = spawner.GetComponent(enemySpawner).highScore;
	//currentscore = spawner.GetComponent(enemySpawner).currentScore;
	//Debug.Log(currentscore);
    if(col.gameObject.tag == "Player")
    {
    	if (col.gameObject.GetComponent(colorController).playerColor == shooterColor)
    	{
    		if (GameObject.Find("spawner").GetComponent(enemySpawner).currentScore > GameObject.Find("spawner").GetComponent(enemySpawner).highScore){
        		//highscore = currentscore;
        		GameObject.Find("spawner").GetComponent(enemySpawner).highScore = GameObject.Find("spawner").GetComponent(enemySpawner).currentScore;
        	};
        	spawnerObject.GetComponent(enemySpawner).playerAlive = false;
        	Destroy(col.gameObject);
        	
        	
        	
        };
    }
    else if(col.gameObject.tag == "projectile")
    {
    	if (col.gameObject.GetComponent(projectileController).projectileColor == shooterColor)
    	{
        	Destroy(col.gameObject);
        	GameObject.Find("spawner").GetComponent(enemySpawner).currentScore += 3;
        	
        };
    }
    /*
    else if(col.gameObject.tag == "enemy")
    {
    	if (col.gameObject.GetComponent(enemyController).enemyColor == blinkerColor)
    	{
        	Destroy(col.gameObject);
        	
        	
        };
    }*/
}

function Start () {
	var tempRandom : int;
	tempInt = 0;
	shooterSpeed = 0.01;
	tempRandom = Random.Range(0,3);
//Debug.Log(tempRandom);
	
if (tempRandom == 0) {
	shooterColor = "red";
	shooterObject.GetComponent(SpriteRenderer).sprite = redShooter;
}
	
else if (tempRandom == 1) {
	shooterColor = "black";
	shooterObject.GetComponent(SpriteRenderer).sprite = blackShooter;

}
	
else if (tempRandom == 2) {
	shooterColor = "blue";
	shooterObject.GetComponent(SpriteRenderer).sprite = blueShooter;
};
								
}


var tempInt : int = 0;
var i : int = 0;
function FixedUpdate () {


var spawnerObject : GameObject;
playerObject = GameObject.Find("player");
spawnerObject = GameObject.Find("spawner");

//Debug.Log(shooterColor);
var shooterBlinkfreq : int = 40;

var shotForce : int = 800;
var tempColor : String;

var shootFreq : int = 100;

tempInt += 1;
//Debug.Log(tempInt);

//To blink or not to blink

if (spawnerObject.GetComponent(enemySpawner).currentScore > 100)
	
if (tempInt == shooterBlinkfreq && shooterColor == "black") {
	shooterColor = "red";
	shooterObject.GetComponent(SpriteRenderer).sprite = redShooter;
	tempInt = 0;
}
	
else if (tempInt == shooterBlinkfreq && shooterColor == "red") {
	shooterColor = "blue";
	shooterObject.GetComponent(SpriteRenderer).sprite = blueShooter;
	tempInt = 0;

}
	
else if (tempInt == shooterBlinkfreq && shooterColor == "blue") {
	shooterColor = "black";
	shooterObject.GetComponent(SpriteRenderer).sprite = blackShooter;
	tempInt = 0;
}



//The shooter should shoot
if (i == shootFreq){
	//projectilePrefab.GetComponent(projectileController).projectileColor = shooterColor;
		
	tempColor = shooterColor;
	var projectileTemp : Rigidbody2D;	
		
	if (tempColor == "red")
	{	
		enemyProjectileprefab.GetComponent(enemyProjectilecontroller).enemyProjectilecolor = tempColor;
		enemyProjectileprefab.GetComponent(SpriteRenderer).sprite = redEnemyprojectile;
		projectileTemp = Instantiate (enemyProjectile, shooterBottom.position, Quaternion.identity);
		projectileTemp.AddForce(Vector2(0,-1) * shotForce);	
		projectileTemp = Instantiate (enemyProjectile, shooterLeft.position, Quaternion.identity);
		projectileTemp.AddForce(Vector2(-1,0) * shotForce);	
		projectileTemp = Instantiate (enemyProjectile, shooterRight.position, Quaternion.identity);
		projectileTemp.AddForce(Vector2(1,0) * shotForce);	
	}
	else if (tempColor == "blue")
	{
		enemyProjectileprefab.GetComponent(enemyProjectilecontroller).enemyProjectilecolor = tempColor;
		enemyProjectileprefab.GetComponent(SpriteRenderer).sprite = blueEnemyprojectile;
		projectileTemp = Instantiate (enemyProjectile, shooterBottom.position, Quaternion.identity);
		projectileTemp.AddForce(Vector2(0,-1) * shotForce);	
		projectileTemp = Instantiate (enemyProjectile, shooterLeft.position, Quaternion.identity);
		projectileTemp.AddForce(Vector2(-1,0) * shotForce);	
		projectileTemp = Instantiate (enemyProjectile, shooterRight.position, Quaternion.identity);
		projectileTemp.AddForce(Vector2(1,0) * shotForce);	
	}
	else if (tempColor == "black")
	{
		enemyProjectileprefab.GetComponent(enemyProjectilecontroller).enemyProjectilecolor = tempColor;
		enemyProjectileprefab.GetComponent(SpriteRenderer).sprite = blackEnemyprojectile;
		projectileTemp = Instantiate (enemyProjectile, shooterBottom.position, Quaternion.identity);
		projectileTemp.AddForce(Vector2(0,-1) * shotForce);	
		projectileTemp = Instantiate (enemyProjectile, shooterLeft.position, Quaternion.identity);
		projectileTemp.AddForce(Vector2(-1,0) * shotForce);	
		projectileTemp = Instantiate (enemyProjectile, shooterRight.position, Quaternion.identity);
		projectileTemp.AddForce(Vector2(1,0) * shotForce);	
	}
		
	
		
}
else if (i > shootFreq){
	i = 0;
}

i += 1;




//Move towards the player

//Debug.Log(playerObject);
if (spawnerObject.GetComponent(enemySpawner).playerAlive == true){
	shooterPos.position = Vector2.MoveTowards(shooterPos.position, playerObject.transform.position, shooterSpeed);
	//Rotating shooter
	shooterPos.Rotate (0,0,50*Time.deltaTime); //rotates 50 degrees per second around z axis

};

/*
var newRotation = Quaternion.LookRotation(transform.position - shooterPos.position, Vector3.forward);
    newRotation.x = 0.0;
    newRotation.y = 0.0;
    transform.rotation = Quaternion.Slerp(transform.rotation, newRotation, Time.deltaTime * 8);
*/
}