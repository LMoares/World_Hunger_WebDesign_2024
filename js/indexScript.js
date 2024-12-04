//Author: Lorenzo Moares Nunez x23378441

function validate()
{
	let valid = false;
	let msg = "";
	
	//ensures that form fields is filled before allowing user to submit information
    if (document.getElementById("signUpEmail").value !== "")
	{
        valid = true;
    }
    else {
        msg += "Fill in all form fields ";
    }
	
	//checks if email input contains an @ symbol
	if(!document.getElementById("signUpEmail").value.includes("@"))
	{
		if(valid)
		{
			msg += "Use a valid Email. ";			
		}else
		{
			msg += "and use a valid Email. "
		}
		valid = false;
	}
	
	if(!valid)
	{
		//informs user of form errors
		alert(msg + "Then submit Newsletter Form.");
		//sets successful newsletter submit to an empty string
		document.getElementById("validSubmit").innerHTML = "";
	}
	
	if(valid)
	{
		//informs the user that they have successfully signed up to the newsletter
		document.getElementById("validSubmit").innerHTML = document.getElementById("signUpEmail").value + "<br>has been added to our Newsletter";
		
		//resets email field on successful submission
		document.getElementById("signUpEmail").value = "";
	}
}