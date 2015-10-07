#pragma strict

//var crosshair : GameObject;
var projectilePrefab : Rigidbody2D;
//var projectileRed : Rigidbody2D;
//var projectileBlue : Rigidbody2D;
var shotForce : float = 2000;
var playerPos : Transform;
//var playerTop : Transform;
//var playerRight : Transform;
//var playerLeft : Transform;
//var playerBottom : Transform;
var player : Rigidbody2D;
var playerObject : GameObject;
var firing : boolean = false;
var redBox : Sprite;
var blueBox : Sprite;
var blackBox : Sprite;
//var redProjectile : Sprite;
//var blueProjectile : Sprite;
var colorint : int;



function Start () {
colorint = 1;

}




function Shoot (i1,i2) {

var h1 : float = i1;
var h2 : float = i2;

var k1 : float;
var k2 : float;

var projectileTemp : Rigidbody2D;
if (h1 == 1 && h2 == 0){
	k1 = h1 - 0.5;
}
else if (h1 == 1 && h2 == 1){
	k1 = h1 - 0.5;
	k2 = h2 - 0.5;
}
else if (h1 == -1 && h2 == 0){
	k1 = h1 + 0.5;
}
else if (h1 == -1 && h2 == -1){
	k1 = h1 + 0.5;
	k2 = h2 + 0.5;
}
else if (h1 == -1 && h2 == 1){
	k1 = h1 + 0.5;
	k2 = h2 - 0.5;
}
else if (h1 == 1 && h2 == -1){
	k1 = h1 - 0.5;
	k2 = h2 + 0.5;
}

else if (h1 == 0 && h2 == 1){
	k2 = h2 - 0.5;	
}
else if (h1 == 0 && h2 == -1) {
	k2 = h2 + 0.5;
}


projectileTemp = Instantiate (projectilePrefab, playerPos.position + Vector2(k1,k2), Quaternion.identity);

projectileTemp.AddForce(Vector2(h1,h2) * shotForce);

}

function Update () {
		
var tempColor : String;
var cloneProjectile : Rigidbody2D;


//Debug.Log(projectilePrefab.GetComponent(projectileController).projectileColor);

var shootVer : float = 0;
var shootHor : float = 0;
shootHor = Input.GetAxisRaw("shootHorizontal");
shootVer = Input.GetAxisRaw("shootVertical");
var i1 : int;
var i2 : int;

//What color to shoot
projectilePrefab.GetComponent(projectileController).projectileColor = playerObject.GetComponent(colorController).playerColor;

if (firing == false){
//Shooting logic
if (shootHor > 0 && shootVer > 0){
		i1 = 1;
		i2 = 1;
		firing = true;
		Shoot(i1,i2);
}
else if (shootHor > 0 && shootVer < 0){
		i1 = 1;
		i2 = -1;
		firing = true;
		Shoot(i1,i2);
}
else if (shootHor > 0 && shootVer == 0){
		i1 = 1;
		i2 = 0;
		firing = true;
		Shoot(i1,i2);
}
else if (shootHor < 0 && shootVer > 0){
		i1 = -1;
		i2 = 1;
		firing = true;
		Shoot(i1,i2);
}
else if (shootHor < 0 && shootVer < 0){
		i1 = -1;
		i2 = -1;
		firing = true;
		Shoot(i1,i2);
}
else if (shootHor < 0 && shootVer == 0){
		i1 = -1;
		i2 = 0;
		firing = true;
		Shoot(i1,i2);
}
else if (shootHor == 0 && shootVer > 0){
		i1 = 0;
		i2 = 1;
		firing = true;
		Shoot(i1,i2);	
}
else if (shootHor == 0 && shootVer < 0){
		i1 = 0;
		i2 = -1;
		firing = true;
		Shoot(i1,i2);
}
}

if (firing == true && shootHor == 0 && shootVer == 0){
	firing = false;
}

//Change your color
if (Input.GetAxis ("colorBlack")) {
			playerObject.GetComponent(SpriteRenderer).sprite = blackBox;
			playerObject.GetComponent(colorController).playerColor = "black";
			colorint = 1;
			
			
			
		};
		
		if (Input.GetAxis ("colorRed")) {
		
			playerObject.GetComponent(SpriteRenderer).sprite = redBox;
			playerObject.GetComponent(colorController).playerColor = "red";
			colorint = 2;
		
		};
		
		
		if (Input.GetAxis ("colorBlue")) {
		
			playerObject.GetComponent(SpriteRenderer).sprite = blueBox;
			playerObject.GetComponent(colorController).playerColor = "blue";
			colorint = 3;
		
		};
		
		
		if (Input.GetAxis ("changeColor")){
			colorint = colorint + 1;
			
			if (colorint == 4){
				colorint = 1;
				playerObject.GetComponent(SpriteRenderer).sprite = blackBox;
				playerObject.GetComponent(colorController).playerColor = "black";
			}
			
			else if (colorint == 1){
				playerObject.GetComponent(SpriteRenderer).sprite = blackBox;
				playerObject.GetComponent(colorController).playerColor = "black";
			}
			else if (colorint == 2){
				playerObject.GetComponent(SpriteRenderer).sprite = redBox;
				playerObject.GetComponent(colorController).playerColor = "red";
			}; 
			else if (colorint == 3){
				playerObject.GetComponent(SpriteRenderer).sprite = blueBox;
				playerObject.GetComponent(colorController).playerColor = "blue";
			}
		};


/*
		if (Input.GetKeyDown ("left")) {
		var projectileLeft : Rigidbody2D;
		projectilePrefab.GetComponent(projectileController).projectileColor = playerObject.GetComponent(colorController).playerColor;
		tempColor = projectilePrefab.GetComponent(projectileController).projectileColor;
		if (tempColor == "red")
			{
			projectileLeft = Instantiate (projectileRed, playerLeft.position, Quaternion.identity);
			}
		else if (tempColor == "blue")
			{
			projectileLeft = Instantiate (projectileBlue, playerLeft.position, Quaternion.identity);
			}
		else if (tempColor == "black")
			{
			projectileLeft = Instantiate (projectilePrefab, playerLeft.position, Quaternion.identity);
			}
			
		projectileLeft.AddForce(Vector2(-1,0) * shotForce);
		//Physics.IgnoreCollision(projectileLeft.collider, player.collider);
		firing = true;
		//Debug.Log(projectilePrefab.GetComponent(projectileController).projectileColor);
		};
		
		
		if (Input.GetKeyDown ("right")) {
		
		var projectileRight : Rigidbody2D;
		projectilePrefab.GetComponent(projectileController).projectileColor = playerObject.GetComponent(colorController).playerColor;
		tempColor = projectilePrefab.GetComponent(projectileController).projectileColor;
		
		if (tempColor == "red")
			{
			projectileRight = Instantiate (projectileRed, playerRight.position, Quaternion.identity);
			}
		else if (tempColor == "blue")
			{
			projectileRight = Instantiate (projectileBlue, playerRight.position, Quaternion.identity);
			}
		else if (tempColor == "black")
			{
			projectileRight = Instantiate (projectilePrefab, playerRight.position, Quaternion.identity);
			}
		
		projectileRight.AddForce(Vector2.right * shotForce);
		//Physics.IgnoreCollision(projectileLeft.collider, player.collider);
		firing = true;
		//Debug.Log(projectilePrefab.GetComponent(projectileController).projectileColor);
		};
		
		if (Input.GetKeyDown ("up")) {
		
		var projectileUp : Rigidbody2D;
		projectilePrefab.GetComponent(projectileController).projectileColor = playerObject.GetComponent(colorController).playerColor;
		tempColor = projectilePrefab.GetComponent(projectileController).projectileColor;
		
		if (tempColor == "red")
			{
			projectileUp = Instantiate (projectileRed, playerTop.position, Quaternion.identity);
			}
		else if (tempColor == "blue")
			{
			projectileUp = Instantiate (projectileBlue, playerTop.position, Quaternion.identity);
			}
		else if (tempColor == "black")
			{
			projectileUp = Instantiate (projectilePrefab, playerTop.position, Quaternion.identity);
			}
		
		projectileUp.AddForce(Vector2(0,1) * shotForce);
		//Physics.IgnoreCollision(projectileLeft.collider, player.collider);
		firing = true;
		//Debug.Log(tempColor);
		};
		
		if (Input.GetKeyDown ("down")) {
		
		var projectileDown : Rigidbody2D;
		projectilePrefab.GetComponent(projectileController).projectileColor = playerObject.GetComponent(colorController).playerColor;
		
		tempColor = projectilePrefab.GetComponent(projectileController).projectileColor;
		
		
		if (tempColor == "red")
			{
			projectileDown = Instantiate (projectileRed, playerBottom.position, Quaternion.identity);
			}
		else if (tempColor == "blue")
			{
			projectileDown = Instantiate (projectileBlue, playerBottom.position, Quaternion.identity);

			}
		else if (tempColor == "black")
			{
			projectileDown = Instantiate (projectilePrefab, playerBottom.position, Quaternion.identity);
			}
		
		projectileDown.AddForce(Vector2(0,-1) * shotForce);
		//Physics.IgnoreCollision(projectileLeft.collider, player.collider);
		firing = true;
		
		};
		
		if (Input.GetKeyDown ("1")) {
			playerObject.GetComponent(SpriteRenderer).sprite = blackBox;
			playerObject.GetComponent(colorController).playerColor = "black";
			colorint = 1;
			
			
			
		};
		
		if (Input.GetKeyDown ("2")) {
		
			playerObject.GetComponent(SpriteRenderer).sprite = redBox;
			playerObject.GetComponent(colorController).playerColor = "red";
			colorint = 2;
		
		};
		
		
		if (Input.GetKeyDown ("3")) {
		
			playerObject.GetComponent(SpriteRenderer).sprite = blueBox;
			playerObject.GetComponent(colorController).playerColor = "blue";
			colorint = 3;
		
		};
		
		
		if (Input.GetKeyDown ("space") || Input.GetKeyDown(KeyCode.Tab) || Input.GetKeyDown ("q")) {
			colorint = colorint + 1;
			Debug.Log(colorint);
			if (colorint == 4){
				colorint = 1;
				playerObject.GetComponent(SpriteRenderer).sprite = blackBox;
				playerObject.GetComponent(colorController).playerColor = "black";
			}
			
			else if (colorint == 1){
				playerObject.GetComponent(SpriteRenderer).sprite = blackBox;
				playerObject.GetComponent(colorController).playerColor = "black";
			}
			else if (colorint == 2){
				playerObject.GetComponent(SpriteRenderer).sprite = redBox;
				playerObject.GetComponent(colorController).playerColor = "red";
			}; 
			else if (colorint == 3){
				playerObject.GetComponent(SpriteRenderer).sprite = blueBox;
				playerObject.GetComponent(colorController).playerColor = "blue";
			}
		};
		

	//var mousePosition = Input.mousePosition;

	//var objectPos = Camera.current.ScreenToWorldPoint(mousePosition);	

	//var ballTemp : Rigidbody2D = Instantiate(ballPrefab, objectPos, Quaternion.identity) as 	Rigidbody2D;
	//ballTemp.AddForce(objectPos.forward * shotForce);

*/



	GetComponent.<Rigidbody2D>().velocity.x = Input.GetAxis("moveHorizontal") * 6;
	GetComponent.<Rigidbody2D>().velocity.y = Input.GetAxis("moveVertical") * 6;
	

	
	

	//Input.GetAxis("Mouse X");
	//Input.GetAxis("Mouse Y");

	//Debug.Log(Input.mousePosition);
}