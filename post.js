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
		method: "post",
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};

	// fetch(url, options).then((data) => console.log(data));

	fetch(url, options)
		.then((res) => res.json())
		.then((res) => console.log(res));
}
