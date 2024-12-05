//Author: Jaehyuk Lim x23271329

function question_result() {
	let valid = true;
	let msge = "Incomplete form: ";
	
	if(document.getElementById("uname").value == ""){
		msge += "You need to fill username. ";
		valid = false;
	}
	
	if(!valid){
		document.getElementById("question").innerHTML = msge;
	}
	return valid;
}