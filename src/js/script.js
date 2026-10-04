async function showPosts() {
  let response = await fetch("res/json/posts.json");
  let posts = await response.json();
  let container = document.getElementById("posts");

  for (let post of posts) {
    let article = document.createElement("article");
    article.className = "post";

    article.innerHTML = `
      <header class="post-header">
        <strong>${post.author}</strong>
        <time>${post.date}</time>
      </header>
      ${post.image ? `<img src="${post.image}" alt="post image">` : ""}
      <p>${post.text}</p>
    `;

    container.appendChild(article);
  }
}

showPosts();