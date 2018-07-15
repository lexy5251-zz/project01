console.log("hello~~~~~~~~~~~~~~~");
$(".list-editor").on("click", "button", function() {
	$(".my-list").append(
		"<li>" +
			"<span>" +
			$("input[name='new-item']").val() +
			"</span>" +
			'<a href="#" class="delete">[done]</a><button>remove</button>' +
			"</li>"
	);
});

$(".my-list").on("click", "button", function(event) {
	event.preventDefault();
	$(this)
		.parent()
		.remove();
});

$(".my-list").on("click", "a", function(event) {
	event.preventDefault();
	$(this)
		.siblings("span")
		.css("text-decoration", "line-through");
});
