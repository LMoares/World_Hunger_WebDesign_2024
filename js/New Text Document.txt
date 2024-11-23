//Author: Lorenzo Moares Nunez x23378441

function validate()
{
	let valid = false;
	let msg = "";
	
	//ensures that all form fields are filled before allowing user to submit information
    if (document.getElementById("contactName").value !== "" && document.getElementById("contactEmail").value !== "" && document.getElementById("contactComment").value !== "") 
	{
        valid = true;
    }
    else {
        msg += "Fill in all form fields ";
    }
	
	//checks if email input contains an @ symbol
	if(!document.getElementById("contactEmail").value.includes("@"))
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
		alert(msg + "Then submit Contact Form.");
	}
}