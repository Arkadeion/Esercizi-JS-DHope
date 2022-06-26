let fetchedPost;

function fetchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => { return data })
}

const fetchPost = document.querySelector("#fetch-post");
const savePost = document.querySelector("#save-post");

fetchPost.addEventListener("click", fetchAPost());
savePost.addEventListener("click", console.log(fetchedPost));

