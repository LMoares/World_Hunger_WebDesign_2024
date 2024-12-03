//Author: Jaehyuk Lim x23271329

function validate(){
	let valid = true;
	let msge = "Incomplete form: ";
	
	if(document.getElementById("fname").value === ""){
		msge += "You need to fill firstname. ";
		valid = false;
	}
	
	else if(document.getElementById("surname").value === ""){
		msge += "You need to fill surname. ";
		valid = false;
	}
	
	else if(document.getElementById("Email").value === ""){
		msge += "You need to fill Email. ";
		valid = false;
	}
	
	else if(document.getElementById("10000").checked == false &&
	document.getElementById("20000").checked == false &&
	document.getElementById("30000").checked == false){
		msge += "You must check first question";
		valid = false;
	}
	
	else if(document.getElementById("1000kg").checked == false &&
	document.getElementById("2000kg").checked == false &&
	document.getElementById("3000kg").checked == false){
		msge += "You must check second question";
		valid = false;
	}
	
	else if(document.getElementById("v_10000").checked == false &&
	document.getElementById("v_20000").checked == false &&
	document.getElementById("v_30000").checked == false){
		msge += "You must check third question";
		valid = false;
	}
	
	
	if(!valid){
		document.getElementById("details").innerHTML = msge;
	}
	return valid;
}