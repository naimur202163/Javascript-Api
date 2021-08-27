function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Response) => Response.json())
    .then((Data) => DisplayPost(Data));
}

function DisplayPost(Posts) {
  const postContainer = document.getElementById("post");
  for (const post of Posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `<h3>${post.title}</h3>
    <p>${post.body} </p>`;
    postContainer.appendChild(div);
    console.log(post);
  }
}

loadPost();
