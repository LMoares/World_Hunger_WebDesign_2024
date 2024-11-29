//Author: Lorenzo Moares Nunez x23378441

//creating donation array for comment section, including premade messages
let donation = ["Lorenzo","","Wow! Great job!","Jean","","Glad to help!","Jeahyuk","","Every little bit helps!"];

//initializes default currency as euro
let currency = "€";
let currencyTag = "EUR";

function setCurrency(x)
{
	//default currency is EURO. currency changes depending on user selection
	currency = x;
	//sets Pledge input field placeholder as chosen currency
	document.getElementById("donatePledge").placeholder = currency;
	if (currency == "$")
	{
		currencyTag = "USD";
	}else if (currency == "€")
	{
		currencyTag = "EUR";
	}else
	{
		currencyTag = "GBP";
	}
}

function donoPrint(x,y,z)
{
	//prints donation page information into message section
	let print = document.getElementById("commentSection");
	
	//saves previous print value to new variable
	let prepend = print.innerHTML; 
	
	//prints specified index of array to message section and ensures previous messages will display afterward
	print.innerHTML = "<b>Name:</b> " + donation[x] + "<br><b>Pledged Amount:</b> " + donation[y] + "<br><br><b>Comment:</b> " + donation[z] + "<hr>" + prepend;
}

function donoSubmit()
{
	
	let userName = document.getElementById("donateName").value;
	
	//userPledge input is converted from a string to a numeric(float) value, toLocaleString takes the new value and returns a string that is a currency sensitive representation of that number. 
	//ie: float 10000.00 & currency is USD, is converted to $10,000.00, float 1234.567 & currency is EUR, is converted to €1234.57, etc.
	let userPledge = parseFloat(document.getElementById("donatePledge").value).toLocaleString(undefined,{minimumFractionDigits: 2, style: "currency", currency: currencyTag});
	
	let userComment = document.getElementById("donateComment").value;
	
	//prepends donation array with values from donation page form. takes those elements and adds them to the start of the array, shifting all other elements.
	donation.unshift(userName,userPledge,userComment);
	donoPrint(0,1,2);
	
	if (document.getElementById("newsletterOptIn").checked)
	{
		//checks if newsletter checkbox is checked for user wanting to sign up to newsletter
		document.getElementById("newsletterActive").innerHTML = "Your email: <b>" + document.getElementById("donateEmail").value + "</b><br> has been added to our Newsletter.<br>Thank You.";
		document.getElementById("newsletterActive").style.backgroundColor = "#F0F5F9";
	}else
	{
		//ensures that if another form is sent without checkbox being filled the newletter message will not display
		document.getElementById("newsletterActive").innerHTML = "";
		document.getElementById("newsletterActive").style.backgroundColor = "";
	}
	
	//resets pledge field after form is used to fill message section
	document.getElementById("donateName").value = "";
	document.getElementById("donatePledge").value = "";
	document.getElementById("donateEmail").value = "";
	document.getElementById("donateComment").value = "";
	document.getElementById("newsletterOptIn").checked = false;
}


function validate()
{	
	let valid = false;
	let msg = "";
	//ensures that all form fields are filled before allowing user to submit information
    if (document.getElementById("donateName").value !== "" && document.getElementById("donateEmail").value !== "" && document.getElementById("donatePledge").value !== "" && document.getElementById("donateComment").value !== "") 
	{
        valid = true;
    }
    else {
        msg += "Fill in all form fields ";
    }
	
	//checks if email input contains an @ symbol
	if(!document.getElementById("donateEmail").value.includes("@"))
	{
		if(valid)
		{
			//if all form sections are filled the alert message will begin with the following
			msg += "Use a valid Email. ";			
		}else
		{
			//if not all form sections are not filled this message will concadenate to msg
			msg += "and use a valid Email. "
		}
		valid = false;
	}
	
	//checks if pledge field is a positive number
	if (document.getElementById("donatePledge").value < 0)
	{
		msg += "Enter a valid number into the Pledged Amount section (Must be a positive number). ";
		valid = false;
	}
	
	
	if(valid)
	{
		//calls for donoSubmit function to add form values to message section
		donoSubmit();
	}else
	{
		//informs user of form errors
		alert(msg + "Then submit Donation Pledge Form.");
	}
}

function randomPledge(i)
{
	//generates a random number between 0.0 and 1.0, times that number by 25, rounds it to the nearest hundredth's decimal place
	let ranNum = (Math.random()*25).toFixed(2);
	//prepends ranNum with the EURO icon and sets the i-th index of the donation array to that string
	donation[i] = "€" + ranNum;
}

function premadeDonations()
{
	//set currency for premade donations
	setCurrency(currency);
	
	//adds premade messages to comment section on page load
	for (let i = 0; i < donation.length; i+=3)
	{
		//calls randomPledge to make i+1 a random number
		randomPledge(i+1);
		//calls for index 0,1,2 of the donation array to be printed, then 3,4,5, etc
		donoPrint(i,i+1,i+2);
	}
}

//listens for HTML document information to be loaded, runs premadeDonations() function before page content
document.addEventListener("DOMContentLoaded",premadeDonations,false);