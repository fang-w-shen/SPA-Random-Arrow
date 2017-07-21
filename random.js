
window.onclick = displayimg;

function displayimg() {
	var x = Math.floor((Math.random() * 2)+1);
	if(x===1) {
		document.getElementById("img").setAttribute("src", "left.png");
		document.getElementsByClassName("one")[0].classList.toggle("hidden");
			
	}
	else{
		document.getElementById("img").setAttribute("src", "right.png");
		document.getElementsByClassName("two")[0].classList.toggle("hidden");
	}
	setTimeout(function() {
		document.getElementById("img").setAttribute("src", "");
		document.getElementsByClassName("one")[0].classList.remove("hidden");
		document.getElementsByClassName("two")[0].classList.remove("hidden");
			
			
	}, 1000);
}