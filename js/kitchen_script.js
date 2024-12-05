function navigate_to_page_html() {
	
	window.location.assign("kitchen_signup.html");// this functions changes the window to the location specified keeping the current page in the session history (having the ability to go back using the back button)
}


        
function validate_form() {
    // Variables
	//assigning variables to the values of id's within HTML documents 
    let first_name = document.getElementById("first_name_input").value;
    let last_name = document.getElementById("last_name_input").value;
    let address = document.getElementById("address_input").value;
    let user_input_county = document.getElementById("counties").value;
    let user_input_city = document.getElementById("town_cities").value;
    let email_user_input = document.getElementById("email_input").value;
    let user_input_password = document.getElementById("user_password").value;
    let user_input_password_re_entered = document.getElementById("user_re_enter_password").value;
	
	//verify first name input
	if (first_name === "") {
		alert("First name is required");
		return false;
	}
	
	//verify last name input
	if (last_name === "") {
		alert("Last name is required");
		return false;
	}
	
    // Gender Validation
	// using an inline query to get the value of selected input 
    let gender_selected = document.querySelector('input[name="inlineRadioOptions"]:checked');
    if (!gender_selected) {// if gender_selected variable has no value 
        alert("Please select a gender preference.");// user is informed to select a gender
        return false; // stop form submission
    }
    

    // Address Validation
    if (address === "") { // if address variable has a value of an empty string
        alert("Address is required."); // informing the user to fill in address
        return false; // stop form submission
    }
	// Address City/town Validation
	if (user_input_city === "") {
		alert("A Town or City is required");
		return false;
	}
	// Address County Validation
	if (user_input_county === "") {
		alert("A County is required");
		return false;
	}

    // Email Validation
	//const variable being assign these characters, this is the measurement to measure the inputs of the email input field whether valid or not
    const email_reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // this is new to me... the test is a method used to verify input char. email_reg [a.....-] is the char that can be used infront of the @ symbol + @[a......-] . char before the dot and finaly [a...Z] after the . {2,} is at least 2 letters long for the domain extenstion.
   
    if (email_user_input === "") { //check if it's a empty string
        alert("Email must be filled in."); // alert user to fill in.
        return false; // stop form submission
    }
	//if email does not past the .test conditions with content in variable email_reg
    if (!email_reg.test(email_user_input)) {
        alert("Email is invalid."); // alert user that email is invalid
        return false; // stop form submission
    }

    // Password Validation
    if (user_input_password === "") {// if password input is an empty string 
        alert("Password is required."); // alert user that a password must be filled in
        return false; // stop form submission
    }
    if (user_input_password_re_entered === "") {// if re-entered password is a empty string to inform user to fill in 
        alert("Please re-enter your password.");
        return false; // stop form submission
    }
    if (user_input_password !== user_input_password_re_entered) { //if password and re-entered password do not match
        alert("Passwords do not match!");						// user is alerted  passwords do not match 
        return false; // stop form submission
    }

    // Show user details (for demonstration purposes) this is the content that would of been processed to back end
    alert("These are the details that would have been logged if there were a backend to this website:\n" +
        "First Name: " + first_name + "\n" +
        "Last Name: " + last_name + "\n" +
        "Gender: " + gender_selected.value + "\n" +
        "Address: " + address + "\n" +
        "City/Town: " + user_input_city + "\n" +
        "County: " + user_input_county + "\n" +
        "Email: " + email_user_input + "\n" +
        "Password: (this would go through a hash algorithm): " + user_input_password);
		
	// everything must return true to submit form
    return true; // If all checks pass, allow form submission
}

//function to reset form kitchen_signup.html by refreshing page
function reset_form(){
	location.reload();
}	


//Modal functions
//Modal change()
// kitchen staff/member/leader one infomation and video 
function kitchen_greeting_chef_one(){
	
	let cooking_student = document.getElementById("staticBackdrop");
	
	let label = document.getElementById("staticBackdropLabel");
	
	let video = document.getElementById("modal_video");
	
	if (label.innerText != "Greetings and Welcome!") {
		label.innerText = "Greetings and Welcome! My name is Jeán, and I'm proud to lead this incredible team. As a passionate chef, my mission is to teach and inspire others to cook and manage kitchens with confidence. When I'm not working as a full-time chef, I dedicate my spare time to running kitchens across Ireland, sharing my knowledge, and creating opportunities for others to grow. We're always in need of enthusiastic volunteers to join us in making a difference. Whether you can spare a few hours or a full day your support can help us serve the community one meal at a time. Come join out team and Sign up!";
		
	}else{
		console.error("Label element not found");
	}	
	
	if (video.getAttribute("src") != "img/team_work_kitchen.mp4"){
		
		video.setAttribute("src", "img/team_work_kitchen.mp4");
		
	}else{
		console.error("Video element not found");
	}
}

//modal change()
// kitchen staff/member/leader two infomation and video
function kitchen_greeting_chef_two(){
	let cooking_student = document.getElementById("staticBackdrop");
	
	let label = document.getElementById("staticBackdropLabel");
	
	let video = document.getElementById("modal_video");
	
	if (label.innerText != "Greetings and Welcome!") {
    label.innerText = `Greetings and Welcome!
    My name is Jeff. I volunteer in the kitchen whenever I’m needed during my spare time. I absolutely love serving, it’s been such a rewarding experience where I’ve learned new skills and made many wonderful friends.

    From Monday to Friday, I work as an electrician on various sites. On weekends, I dedicate my spare time to helping in the kitchen.

    We’re always in need of enthusiastic volunteers to join us in making a difference. Whether you can spare a few hours or a full day, your support can help us serve the community one meal at a time. Come join our team, you’ll gain more than you give.`;


	}else{
		console.error("Label element not found");
	}	
	
	if (video.getAttribute("src") != "img/kitchen_clip_frypan.mp4"){
		
		video.setAttribute("src", "img/kitchen_clip_frypan.mp4");
		
	}else{
		console.error("Video element not found");
	}
}

//modal change()
// kitchen staff/member/leader three infomation and video
function kitchen_greeting_chef_three(){
	
	let cooking_student = document.getElementById("staticBackdrop");
	
	let label = document.getElementById("staticBackdropLabel");
	
	let video = document.getElementById("modal_video");
	
	if (label.innerText != "Greetings and Welcome!") {
    label.innerText = `Greetings and Welcome!

    My name is Mary. I’m a primary school teacher by profession, but in my spare time, I volunteer in the kitchen. Through this experience, I’ve not only had the joy of serving the community but also learned valuable cooking skills. Now, I can prepare delicious meals for my family, which has brought us even closer together.

    Volunteering has been a deeply rewarding journey, helping me connect with wonderful people and giving back to those in need.

    We’re always in need of enthusiastic volunteers to join us in making a difference. Whether you can spare a few hours or a full day, your support can help us serve the community one meal at a time. Come join our team!`;

	}else{
		console.error("Label element not found");
	}	
	
	if (video.getAttribute("src") != "img/multiple_chef_cooking.mp4"){
		
		video.setAttribute("src", "img/multiple_chef_cooking.mp4");
		
	}else{
		console.error("Video element not found");
	}
}

// modal change()
// kitchen staff/member/leader four infomation and video
function kitchen_greeting_chef_four(){
	
	let cooking_student = document.getElementById("staticBackdrop");
	
	let label = document.getElementById("staticBackdropLabel");
	
	let video = document.getElementById("modal_video");
	
	if (label.innerText != "Greetings and Welcome!") {
    label.innerText = `"Greetings and Welcome!

	My name is Sarah, and I’m a student studying to become a doctor. While my studies keep me busy, I volunteer in the kitchen whenever I can. I love people so much and find great joy in serving them. Every time I volunteer, I’m reminded of how important it is to give back to the community.

	Volunteering has been a fulfilling part of my journey, helping me connect with people and contribute to something meaningful.

	We’re always in need of enthusiastic volunteers to join us in making a difference. Whether you can spare a few hours or a full day, your support can help us serve the community one meal at a time. Come join our team!`;

	}else{
		console.error("Label element not found");
	}	
	
	if (video.getAttribute("src") != "img/flame_pan_kitchen.mp4"){
		
		video.setAttribute("src", "img/flame_pan_kitchen.mp4");
		
	}else{
		console.error("Video element not found");
	}
}


//implementation of a array with a random number function that will alert user who is avaliable and input name and contact information not logged or saved at the moment as there is no backend.
function leader_avaliable() {
	
	
	
	let leader_avaliable_array = new Array("Jean", "Jeff Team Leader Two", "Mary Team Leader Three", "Sarah Team Leader Four");
	
	let randIndex = Math.floor(Math.random()*4);
	
	let leader_response = leader_avaliable_array[randIndex];

	if (leader_response === "Jean") {
		
		prompt("Hi my is " + leader_response + ", please leave your name and contact information and I will get back to you as soon as possible.", "Name:          Email:");
	
	}else{
		
		prompt ("Hi there I am currently unavaliable, please leave your name and contact information and " + leader_response + " will get back to you as soon as possible.", "Name:             Email:"); 
	}
}

