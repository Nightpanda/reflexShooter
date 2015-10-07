#pragma strict

var projectileColor : String;
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
    	if (col.gameObject.GetComponent(colorController).playerColor == projectileColor)
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
    	if (col.gameObject.GetComponent(projectileController).projectileColor == projectileColor)
    	{
        Destroy(col.gameObject);
        };
    }
    
    else if(col.gameObject.tag == "enemy")
    {
    	if (col.gameObject.GetComponent(enemyController).enemyColor == projectileColor)
    	{
    	col.gameObject.GetComponent(enemyController).enemyHP -= 1;
    	if (col.gameObject.GetComponent(enemyController).enemyHP == 0){

        //Destroy(col.gameObject);
        spawnerObject.GetComponent(enemySpawner).trianglesCount -= 1;
        
        
        }
        
        };
    }
    
    else if(col.gameObject.tag == "fuser")
    {
    	if (col.gameObject.GetComponent(fuserController).fuserColor == projectileColor)
    	{
    	col.gameObject.GetComponent(fuserController).fuserHP -= 1;
    	if (col.gameObject.GetComponent(fuserController).fuserHP == 0){
        Destroy(col.gameObject);
        GameObject.Find("spawner").GetComponent(enemySpawner).currentScore += 4;
        spawnerObject.GetComponent(enemySpawner).fuserCount -= 1;
        
        
        
        }
        
        };
    }
    
    else if(col.gameObject.tag == "blinker")
    {
    	if (col.gameObject.GetComponent(blinkerController).blinkerColor == projectileColor)
    	{
        Destroy(col.gameObject);
        spawnerObject.GetComponent(enemySpawner).blinkerCount -= 1;
        };
    }
    
    else if(col.gameObject.tag == "shooter")
    {
    	if (col.gameObject.GetComponent(shooterController).shooterColor == projectileColor)
    	{
        Destroy(col.gameObject);
        };
    }
    
    else if(col.gameObject.tag == "enemyProjectile")
    {
    	if (col.gameObject.GetComponent(enemyProjectilecontroller).enemyProjectilecolor == projectileColor)
    	{
        Destroy(col.gameObject);
        };
    }
    
}


function Start () {

if (projectileColor == "red") {

    gameObject.GetComponent(SpriteRenderer).sprite = redProjectile;

}
    
else if (projectileColor == "black") {
    
    gameObject.GetComponent(SpriteRenderer).sprite = blackProjectile;


}
    
else if (projectileColor == "blue") {
    
    gameObject.GetComponent(SpriteRenderer).sprite = blueProjectile;

};

}

function Update () {

}