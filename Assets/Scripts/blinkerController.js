#pragma strict

var blinkerColor : String;
var spawnerPos : Transform;
var playerObject : GameObject; 
var blinkerObject : GameObject;
var blinkerPos : Transform;
var blinkerSpeed : float = 0.01;
var blackBlinker : Sprite;
var blueBlinker : Sprite;
var redBlinker : Sprite;
var blinkFreq : int = 40;


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
    	if (col.gameObject.GetComponent(colorController).playerColor == blinkerColor)
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
    	if (col.gameObject.GetComponent(projectileController).projectileColor == blinkerColor)
    	{
        	Destroy(col.gameObject);
        	GameObject.Find("spawner").GetComponent(enemySpawner).currentScore += 2;
        	
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

var tempInt : int;

function Start () {

	var tempRandom : int;
	tempInt = 0;
	blinkerSpeed = GameObject.Find("spawner").GetComponent(enemySpawner).blinkerStartspeed;
	blinkerColor = "black";
	tempRandom = Random.Range(0,3);
	if (tempRandom == 0) {
		blinkerColor = "red";
		blinkerObject.GetComponent(SpriteRenderer).sprite = redBlinker;
	}
	
	else if (tempRandom == 1) {
		blinkerColor = "black";
		blinkerObject.GetComponent(SpriteRenderer).sprite = blackBlinker;

	}
	
	else if (tempRandom == 2) {
		blinkerColor = "blue";
		blinkerObject.GetComponent(SpriteRenderer).sprite = blueBlinker;
	};
	
								
}

function FixedUpdate () {	

var spawnerObject : GameObject;

tempInt += 1;
//Debug.Log(tempRandom);
	
if (tempInt == blinkFreq && blinkerColor == "black") {
	blinkerColor = "red";
	blinkerObject.GetComponent(SpriteRenderer).sprite = redBlinker;
	tempInt = 0;
}
	
else if (tempInt == blinkFreq && blinkerColor == "red") {
	blinkerColor = "blue";
	blinkerObject.GetComponent(SpriteRenderer).sprite = blueBlinker;
	tempInt = 0;
}
	
else if (tempInt == blinkFreq && blinkerColor == "blue") {
	blinkerColor = "black";
	blinkerObject.GetComponent(SpriteRenderer).sprite = blackBlinker;
	tempInt = 0;
}


//Move towards the player
playerObject = GameObject.Find("player");
spawnerObject = GameObject.Find("spawner");
//Debug.Log(playerObject);
if (spawnerObject.GetComponent(enemySpawner).playerAlive == true){
	blinkerPos.position = Vector2.MoveTowards(blinkerPos.position, playerObject.transform.position, blinkerSpeed);
};
}