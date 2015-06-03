Parse.initialize("XtZNXXbzP5R99gWlwRM6ZiRjXxrRoKRd8UEy5QoU", "u2GXAp1rs6x7MYKUtL9JJKjL8jK7m2pYMIpsfHg1");

//parse.js

//test object
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
	success: function() {
		alert("yay! it worked");
	},
	error: function(error) {
		console.log("Didn't work");
	}
});