fetch("res/json/posts.json")
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById("posts");

    posts.forEach(post => {
      const div = document.createElement("div");
      div.className = "post";

      div.innerHTML = `
        <div class="post-header">
          <strong>${post.author}</strong>
          <span>${post.date}</span>
        </div>
        ${post.image ? `<img src="${post.image}" alt="post image">` : ""}
        <p>${post.text}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.error("Could not load posts:", err));