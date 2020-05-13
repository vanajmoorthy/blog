function send() {
	let title = document.getElementById("title").value;
	let description = document.getElementById("description").value;
	let author =
		document.getElementById("author").value == ""
			? "null"
			: document.getElementById("author").value;

	let data = {
		title: title,
		description: description,
		author: author,
	};

	const url = "https://vanaj-blog-api.glitch.me/";

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: data,
	};

	fetch(url, options).then((data) => console.log(data));
}
