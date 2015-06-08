Parse.initialize("XtZNXXbzP5R99gWlwRM6ZiRjXxrRoKRd8UEy5QoU", "u2GXAp1rs6x7MYKUtL9JJKjL8jK7m2pYMIpsfHg1");

//parse.js

//extend any object that's not user this way
//var User = Parse.Object.extend("User");

//otherwise
var user = new Parse.User();
function getUser() {
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var confPass = document.getElementById('confirmPassword');
    var email = document.getElementById('userEmail');
    var school = document.getElementById('school');
    var phoneNum = document.getElementById('phoneNum');

    //QA stuff
    /*
        if (username.validity.tooLong || username.value.length < 6) {
            username.setCustomValidity("Username must be between 6 and 20 characters");
        }
        else {
        }
    */

    if (password.value === confPass.value) {
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
			alert("Thank you for ");
            $('#myModal').modal('hide'); //hides modal - not necessary if refreshing correctly
            window.location.reload(); //refreshes page
		},
		error: function(user, error) {
	    	// Show the error message somewhere and let the user try again.
	    	alert("Error: " + error.code + " " + error.message);
	 	}
	});

}

