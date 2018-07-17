$(document).ready(function() {
	$(".main-cloth").flickity({
		// options
		cellAlign: "left",
		contain: true,
		autoPlay: true
	});

	// $("#email-form").on("submit", function(event) {
	// 	event.preventDefault();

	// 	if ($("#email-content").val() == "") {
	// 		alert("You missed your email.");
	// 	} else {
	// 		alert("Thank you for subscribing.");
	// 	}
	// });

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	function validate() {
		var $result = $("#result");
		var email = $("#email-content").val();
		$result.text("");

		if (validateEmail(email)) {
			$result.text(email + " is valid :)");
			$result.css("color", "green");
		} else {
			$result.text(email + " is not valid :(");
			$result.css("color", "red");
		}
		return false;
	}

	$("#subscribe").bind("click", validate);
});
