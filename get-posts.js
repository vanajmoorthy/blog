const url = "https://vanaj-blog-api.glitch.me/";

fetch(url)
	.then((response) => response.json())
	.then((data) => renderCards(data));

function renderCards(data) {
	let posts = data.data.reverse();

	for (let i = 0; i < posts.length; i++) {
		let title = posts[i].title;
		let id = posts[i].id;
		let author =
			posts[i].author == null || posts[i].author == "null"
				? "anonymous"
				: posts[i].author;
		let description = posts[i].description;

		let post = `<div class="post">
            			<h1 class="title"><span class="id">${id}.</span> ${title}</h1>
            			<p class="author">${author}</p>
						<p class="description">${description}</p>
					</div>`;

		document.getElementById("data").innerHTML += post;
	}
}
