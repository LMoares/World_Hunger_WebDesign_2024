//Author: Lorenzo Moares Nunez

//creating donation array for comment section, including premade messages
let donation = ["Lorenzo","10","Wow! Great job!","Jean","45","Glad to help!","Jeahyuk","50","Every little bit helps!"];

function donoPrint(x,y,z)
{
	//prints donation page information into comment section
	let print = document.getElementById("commentSection");
	let prepend = print.innerHTML; //allows for new comments to be added at the top of the comment section
	print.innerHTML = "<b>Name:</b> " + donation[x] + "<br><b>Pledged Amount:</b> €" + donation[y] + "<br><br><b>Comment:</b> " + donation[z] + "<hr>" + prepend;
}

function donoSubmit()
{
	//prepends donation array with values from donation page form. takes those elements and adds them to the start of the array, shifting all other elements.
	donation.unshift(document.getElementById("donateName").value,document.getElementById("donatePledge").value,document.getElementById("donateComment").value);
	
	donoPrint(0,1,2);
}

function premadeDonations()
{
	//adds premade messages to comment section on load, prepending values to the start of the donation array
	for (let i = 0; i < donation.length; i+=3)
	{
		//calls for index 0,1,2 of the donation array to be printed, then 3,4,5, etc
		donoPrint(i,i+1,i+2);
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

function init()
{
	premadeDonations();
}



document.addEventListener("DOMContentLoaded",init,false);