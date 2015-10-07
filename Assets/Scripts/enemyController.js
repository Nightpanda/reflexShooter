#pragma strict


var enemyColor : String;
var spawnerPos : Transform;
var playerObject : GameObject; 
var fuserObject : GameObject;
var enemyPos : Transform;
var speed : float = 0.01;
var fuserPrefab : Rigidbody2D;
var enemyHP : int = 2;
var enemyPrefab : GameObject;
var enemyAlive : boolean;


/*
function OnCollisionStay2D (col : Collision2D)
{
	var spawnerObject : GameObject;
	spawnerObject = GameObject.Find("spawner");
	Debug.Log(col.gameObject.tag);
	if(col.gameObject.tag == "enemy")
    {
        Destroy(col.gameObject);

        	
	};
}
*/

function OnCollisionEnter2D (col : Collision2D)
{
	var spawnerObject : GameObject;
	spawnerObject = GameObject.Find("spawner");
	//Debug.Log(col.gameObject.tag);
	//var highscore : int; 
	//var currentscore : int; 
	//highscore = spawner.GetComponent(enemySpawner).highScore;
	//currentscore = spawner.GetComponent(enemySpawner).currentScore;
	//Debug.Log(currentscore);
    if(col.gameObject.tag == "Player")
    {
    	if (col.gameObject.GetComponent(colorController).playerColor == enemyColor)
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
    	if (col.gameObject.GetComponent(enemyController).enemyColor == enemyColor)
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
    
    else if(col.gameObject.tag == "projectile")
    {
    	if (col.gameObject.GetComponent(projectileController).projectileColor == enemyColor)
    	{
    		gameObject.GetComponent(Animator).SetBool("alive", false);
        	Destroy(col.gameObject);
        	gameObject.GetComponent(PolygonCollider2D).enabled = false;
        	enemyAlive = false;
        	Destroy(gameObject, 0);
        	GameObject.Find("spawner").GetComponent(enemySpawner).currentScore += 1;
        	
        };
    }
    
    else if(col.gameObject.tag == "fuser")
    {
    	Debug.Log(col.gameObject.GetComponent(enemyController).enemyColor);
    	Debug.Log(enemyColor);
    	if (col.gameObject.GetComponent(fuserController).fuserColor == enemyColor)
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

	enemyAlive = true;
	gameObject.GetComponent(Animator).SetTrigger("spawning");
	speed = GameObject.Find("spawner").GetComponent(enemySpawner).enemyStartspeed;	
	enemyHP = 1;
}

function FixedUpdate () {	

var spawnerObject : GameObject;

//Move towards the player
playerObject = GameObject.Find("player");
spawnerObject = GameObject.Find("spawner");
fuserObject = GameObject.FindGameObjectWithTag("fuser");
//Debug.Log(playerObject);
if (spawnerObject.GetComponent(enemySpawner).playerAlive == true && spawnerObject.GetComponent(enemySpawner).fuserCount == 0 
	&& enemyAlive == true){

	enemyPos.position = Vector2.MoveTowards(enemyPos.position, playerObject.transform.position, speed);
	enemyPos.Rotate (0,0,50*Time.deltaTime);
}
else {
	enemyPos.position = Vector2.MoveTowards(enemyPos.position, fuserObject.transform.position, speed);
	enemyPos.Rotate (0,0,50*Time.deltaTime);
}


}