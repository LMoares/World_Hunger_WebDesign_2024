//Author: Lorenzo Moares Nunez x23378441

//creating donation array for comment section, including premade messages
let donation = ["Lorenzo","10.00","Wow! Great job!","Jean","45.00","Glad to help!","Jeahyuk","50.00","Every little bit helps!"];
let currency = "€";

function setCurrency(x)
{
	//default currency is EURO. currency changes depending on user selection
	currency = x;
	//sets Pledge input box's placeholder as chosen currency
	document.getElementById("donatePledge").placeholder = currency;
}

function donoPrint(x,y,z)
{
	//prints donation page information into comment section
	let print = document.getElementById("commentSection");
	let prepend = print.innerHTML; //allows for new comments to be added at the top of the comment section
	print.innerHTML = "<b>Name:</b> " + donation[x] + "<br><b>Pledged Amount:</b> "+ currency + donation[y] + "<br><br><b>Comment:</b> " + donation[z] + "<hr>" + prepend;
}

function donoSubmit()
{
	
	let userName = document.getElementById("donateName").value;
	//userPledge input is converted from a string to a numeric(float) value, rounded to nearest hundredths decimal place and uses toLocaleString to take the new value and return a string that is a currency sensitive representation of that number. ie: float 10000.00 is converted to 10,000.00, float 1234.567 is converted to 1234.57, etc.
	let userPledge = parseFloat(document.getElementById("donatePledge").value).toFixed(2).toLocaleString(undefined,{minimumFractionDigits: 2, style: "currency", currency: "GBP"});
	let userComment = document.getElementById("donateComment").value;
	
	//prepends donation array with values from donation page form. takes those elements and adds them to the start of the array, shifting all other elements.
	donation.unshift(userName,userPledge,userComment);
	donoPrint(0,1,2);
	
	if (document.getElementById("newsletterOptIn").checked)
	{
		document.getElementById("newsletterActive").innerHTML = "Your email: <b>" + document.getElementById("donateEmail").value + "</b><br> has been added to our Newsletter.<br>Thank You.";
		document.getElementById("newsletterActive").style.backgroundColor = "#F0F5F9";
	}else
	{
		document.getElementById("newsletterActive").innerHTML = "";
		document.getElementById("newsletterActive").style.backgroundColor = "";
	}
}


function validate()
{	
	let valid = false;
	
	//ensures that all form fields are filled before allowing user to submit information
    if (document.getElementById("donateName").value !== "" && document.getElementById("donateEmail").value !== "" && document.getElementById("donatePledge").value !== "" && document.getElementById("donateComment").value !== "") 
	{
        valid = true;
    }
    else {
        alert("Please fill in all form fields before submitting Donation Pledge");
    }
	
	//checks if pledge field is a positive number
	if (document.getElementById("donatePledge").value < 0)
	{
		alert("Please enter a valid number into the Pledged Amount section before submitting form. (Must be a positive number)");
		valid = false;
	}
	
	
	if(valid)
	{
		donoSubmit();
	}
}

function premadeDonations()
{
	//set currency for premade donations
	setCurrency(currency);
	
	//adds premade messages to comment section on page load
	for (let i = 0; i < donation.length; i+=3)
	{
		//calls for index 0,1,2 of the donation array to be printed, then 3,4,5, etc
		donoPrint(i,i+1,i+2);
	}
}

document.addEventListener("DOMContentLoaded",premadeDonations,false);