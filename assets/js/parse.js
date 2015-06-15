Parse.initialize("XtZNXXbzP5R99gWlwRM6ZiRjXxrRoKRd8UEy5QoU", "u2GXAp1rs6x7MYKUtL9JJKjL8jK7m2pYMIpsfHg1");

//parse.js

//extend any object that's not user this way
//var User = Parse.Object.extend("User");

//otherwise
var user = new Parse.User();
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var username = document.getElementById('username');
var password = document.getElementById('password');
var confPass = document.getElementById('confirmPassword');
var email = document.getElementById('userEmail');
var school = document.getElementById('school');
var phoneNum = document.getElementById('phoneNum');

function checkUserInfo() {
    if (firstName.value.length > 1) {
        firstName.style.borderColor = "#00FF00";
    }
    if (lastName.value.length > 1) {
        lastName.style.borderColor = "#00FF00";
    }
    if(username.value.length >= 6 && username.value.length <= 20) {
        username.style.borderColor = "#00FF00";
    }
    if(password.value.length >= 6 && password.value.length <= 20 && password.value === confPass.value) {
        password.style.borderColor = "#00FF00";
        confPass.style.borderColor = "#00FF00";
    }
    if (isCorrect(email.value)) {
        email.style.borderColor = "#00FF00";
    }
    if (school.value.length !== 0) {
        school.style.borderColor = "#00FF00";
    }
    if (phoneNum.value.length == 10 || phoneNum.value.length == 11) {
        phoneNum.style.borderColor = "#00FF00";
    }

}

function alertUser() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="btn-lg btn-theme" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function () {
        if (document.getElementById('dialogboxbody').innerHTML == firstName.value + ", thank you for joining uRyde! Please check your email to verify your account.") {
            $('#myModal').modal('hide'); //hides modal - not necessary if refreshing correctly
            window.location.reload(); //refreshes page
        }
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";

    }
}
var Alert = new alertUser();

function setUser() {
    //QA stuff
    if (firstName.value.length <= 1) {
        firstName.style.borderColor = "#FF0000";
        Alert.render('Please fill out your first name correctly.');
    } else if (lastName.value.length <= 1) {
        lastName.style.borderColor = "#FF0000";
        Alert.render('Please fill out your last name correctly.');
    } else if(username.value.length < 6 || username.value.length > 20){
        username.style.borderColor = "#FF0000";
        Alert.render('Username must be between 6 and 20 characters.');
    } else if (password.value.length < 6 || password.value.length > 20) {
        password.style.borderColor = "#FF0000";
        Alert.render('Password must be between 6 and 20 characters.');
    } else if (password.value !== confPass.value) {
        password.style.borderColor = "#FF0000";
        confPass.style.borderColor = "#FF0000";
        Alert.render('Please re-enter your password.');
    } else if (!isCorrect(email.value)) {
        email.style.borderColor = "#FF0000";
        Alert.render('Please use a valid email ending with edu if you have one.');
    } else if (school.value.length == 0) {
        school.style.borderColor = "#FF0000";
        Alert.render('Please enter the school you attend.');
    } else if (phoneNum.value.length !== 10 && phoneNum.value.length !== 11) {
        phoneNum.style.borderColor = "#FF0000";
        Alert.render('Please enter your phone number correctly.');
    } else {
        user.set("firstName", firstName.value);
        user.set("lastName", lastName.value);
        user.set("username", username.value);
        user.set("password", password.value);
        user.set("email", email.value);
        user.set("school", school.value);
        user.set("phoneNum", phoneNum.value);
    }

	user.signUp(null, {
		success: function(user) {
	    	// Hooray! Let them use the app now.
			Alert.render(firstName.value + ", thank you for joining uRyde! Please check your email to verify your account.");
            /*
            signupButton.value = "Welcome!";
            signupButton.style.color = "#FFD700";
            */
		},
		error: function(user, error) {
	    	// Show the error message somewhere and let the user try again.
            //if (error.code !== 200 || error.code !== 201) {
            //Alert.render("Error: " + error.code + " " + error.message);


	 	}
	});

}

function isCorrect(emailInput) {
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.edu$/;
    //same as var pattern = new RegExp("");
    return pattern.test(emailInput);
}

