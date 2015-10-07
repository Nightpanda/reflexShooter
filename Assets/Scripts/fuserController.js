#pragma strict


var fuserColor : String;
var spawnerPos : Transform;
var playerObject : GameObject; 
var fuserObject : GameObject;
var fuserPos : Transform;
var speed : float = 0.01;
var fuserPrefab : Rigidbody2D;
var fuserHP : int = 1;
var enemyPrefab : GameObject;
var fuserFreq : int = 40;
var blackTriangle : Sprite;
var blueTriangle : Sprite;
var redTriangle : Sprite;

function OnCollisionStay2D (col : Collision2D)
{
	var spawnerObject : GameObject;
	spawnerObject = GameObject.Find("spawner");
	Debug.Log(col.gameObject.tag);
	if(col.gameObject.tag == "enemy")
    {
        Destroy(col.gameObject);
        Debug.Log("ping");
        	
	};
}


function OnCollisionEnter2D (col : Collision2D)
{
	var spawnerObject : GameObject;
	spawnerObject = GameObject.Find("spawner");
	Debug.Log(col.gameObject.tag);
	//var highscore : int; 
	//var currentscore : int; 
	//highscore = spawner.GetComponent(enemySpawner).highScore;
	//currentscore = spawner.GetComponent(enemySpawner).currentScore;
	//Debug.Log(currentscore);
    if(col.gameObject.tag == "Player")
    {
    	if (col.gameObject.GetComponent(colorController).playerColor == fuserColor)
    	{
    		if (GameObject.Find("spawner").GetComponent(enemySpawner).currentScore > GameObject.Find("spawner").GetComponent(enemySpawner).highScore){
        		//highscore = currentscore;
        		GameObject.Find("spawner").GetComponent(enemySpawner).highScore = GameObject.Find("spawner").GetComponent(enemySpawner).currentScore;
        	};
        	spawnerObject.GetComponent(enemySpawner).playerAlive = false;
        	
        	Destroy(col.gameObject);
        	
        	
        	
        	
        };
    }
    else if(col.gameObject.tag == "enemy")
    {
    	
    	//if (col.gameObject.GetComponent(enemyController).enemyColor == fuserColor)
    	//{
    		
        	//spawnerObject.GetComponent(enemySpawner).bossCounter += 1;
        	fuserHP += 1;
        	
        	Destroy(col.gameObject);
        	spawnerObject.GetComponent(enemySpawner).trianglesCount -= 1;
        	
        	var enemyPrefab : GameObject;
        	//enemyPrefab = spawnerObject.GetComponent(enemyController).enemyPrefab;
        	
        	fuserObject.transform.localScale += Vector3(0.2,0.2,0);
        	
        	
        	
        	
        //};
    }
    
    else if(col.gameObject.tag == "projectile")
    {
    	if (col.gameObject.GetComponent(projectileController).projectileColor == fuserColor)
    	{
        	Destroy(col.gameObject);
        	
        	
        };
    }
    
    else if(col.gameObject.tag == "fuser")
    {
    	
    	if (col.gameObject.GetComponent(fuserController).fuserColor == fuserColor)
    	{
    		/*
    		var enemy : GameObject;
        	spawnerObject.GetComponent(enemySpawner).bossCounter += 1;
        	enemyHP += 1;
        	*/
        	//Destroy(col.gameObject);
        	/*
        	var enemyPrefab : GameObject;
        	//enemyPrefab = spawnerObject.GetComponent(enemyController).enemyPrefab;
        	enemy = Instantiate (enemyPrefab, col.gameObject.transform.position, Quaternion.identity);
        	enemy.transform.localScale += Vector3(3,3,0);
        	Debug.Log("ping");
        	*/
        	
        	
        };
    }
    
    
}

function Start () {
	speed = GameObject.Find("spawner").GetComponent(enemySpawner).enemyStartspeed;	
	fuserHP = 2;
}
var tempInt : int;

function FixedUpdate () {	

var spawnerObject : GameObject;

tempInt += 1;
//Debug.Log(tempRandom);
	
if (tempInt == fuserFreq) {
	fuserColor = "red";
	fuserObject.GetComponent(SpriteRenderer).sprite = redTriangle;
}
	
else if (tempInt == 2*fuserFreq) {
	fuserColor = "black";
	fuserObject.GetComponent(SpriteRenderer).sprite = blackTriangle;

}
	
else if (tempInt == 3*fuserFreq) {
	fuserColor = "blue";
	fuserObject.GetComponent(SpriteRenderer).sprite = blueTriangle;
}

else if (tempInt == 4*fuserFreq) {
	tempInt = fuserFreq;
	fuserColor = "red";
	fuserObject.GetComponent(SpriteRenderer).sprite = redTriangle;
}

//Move towards the player
playerObject = GameObject.Find("player");
spawnerObject = GameObject.Find("spawner");
//Debug.Log(playerObject);
if (spawnerObject.GetComponent(enemySpawner).playerAlive == true){
	fuserPos.position = Vector2.MoveTowards(fuserPos.position, playerObject.transform.position, speed);
	fuserPos.Rotate (0,0,50*Time.deltaTime);
}



}