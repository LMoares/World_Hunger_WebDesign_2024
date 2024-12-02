//Author: Jaehyuk Lim x23271329

function random_food() {
	let food = ["Chicken", "Beef", "Pasta", "pizza", "Pork", "Curry"]
	
	let ran = Math.floor(Math.random()*food.length);
	document.getElementById("food_result").innerHTML = "how about " + food[ran] + "?";
}