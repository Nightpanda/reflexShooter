#pragma strict



var crosshair : Rigidbody2D;

function Start () {

}



function Update () {

	GetComponent.<Rigidbody2D>().position = Input.mousePosition;
	Debug.Log(crosshair.position);
	//rigidbody2D.velocity.x = Input.GetAxis("Horizontal") * 10;
	//rigidbody2D.velocity.y = Input.GetAxis("Vertical") * 10;



}