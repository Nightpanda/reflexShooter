#pragma strict

var enemyProjectilecolor : String;
var redProjectile : Sprite;
var blueProjectile : Sprite;
var blackProjectile : Sprite;


function OnCollisionEnter2D (col : Collision2D)
{
	var spawnerObject : GameObject;
	spawnerObject = GameObject.Find("spawner");
	var highscore : int; 
	var currentscore : int; 
	highscore = GameObject.Find("spawner").GetComponent(enemySpawner).highScore;
	currentscore = GameObject.Find("spawner").GetComponent(enemySpawner).currentScore;
		
    if(col.gameObject.tag == "Player")
    {
    	if (col.gameObject.GetComponent(colorController).playerColor == enemyProjectilecolor)
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
    	if (col.gameObject.GetComponent(projectileController).projectileColor == enemyProjectilecolor)
    	{
        Destroy(col.gameObject);
        };
    }
    
    else if(col.gameObject.tag == "enemy")
    {
    	if (col.gameObject.GetComponent(enemyController).enemyColor == enemyProjectilecolor)
    	{
        Destroy(col.gameObject);
        spawnerObject.GetComponent(enemySpawner).trianglesCount -= 1;
        };
    }
    
    else if(col.gameObject.tag == "blinker")
    {
    	if (col.gameObject.GetComponent(blinkerController).blinkerColor == enemyProjectilecolor)
    	{
        Destroy(col.gameObject);
        spawnerObject.GetComponent(enemySpawner).blinkerCount -= 1;
        };
    }
    
    else if(col.gameObject.tag == "enemyProjectile")
    {
    	if (col.gameObject.GetComponent(enemyProjectilecontroller).enemyProjectilecolor == enemyProjectilecolor)
    	{
        Destroy(col.gameObject);
        };
    }
}


var lifeTime : float;

function Start () {

    lifeTime = 0;

}

function Update () {



//Track the lifetime of the projectile.

lifeTime += Time.deltaTime;

if (lifeTime > 5){
    Destroy(gameObject);
};

}