const url = "https://vanaj-blog-api.glitch.me/";

fetch(url)
	.then((response) => response.json())
	.then((data) => thisIsATemporaryName(data));

function thisIsATemporaryName(data) {
	let posts;

	posts = data;

	let postData = posts.data.reverse();

	for (let i = 0; i < posts.data.length; i++) {
		let title = postData[i].title;
		let id = postData[i].id;
		let author =
			postData[i].author == null || postData[i].author == "null"
				? "anonymous"
				: postData[i].author;
		let description = postData[i].description;

		let post = `<div class="post">
            <h1 class="title"><span class="id">${id}.</span> ${title}</h1>
            <p class="author">${author}</p>
            <p class="description">${description}</p>
		</div>`;

		document.getElementById("data").innerHTML += post;
	}
}
