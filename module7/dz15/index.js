const input = document.getElementById('input');
const getPostBtn = document.getElementById('get-post-btn');
const getCommentBtn = document.getElementById('get-comments-btn');
const post = document.getElementById('post');
const comments = document.getElementById('comments');
const error = document.getElementById('error');

getPostBtn.addEventListener('click', getPost);
getCommentBtn.addEventListener('click', getComment);

function getPost(event){
      event.preventDefault();
      if (input.value > 0 && input.value < 101) {
            fetch('https://jsonplaceholder.typicode.com/posts/'+input.value)
            .then(response => response.json())
            .then(json => {
                  //console.log(json);
                  post.innerHTML = '';
                  error.innerHTML = '';
                  post.innerHTML += '<h2>' + json.title + '</h2>';
                  post.innerHTML += '<p>' + json.body + '</p>';
            });
      }
      else {
            errorMessage();
      }  
}
function getComment(event){
      event.preventDefault();
      if (input.value > 0 && input.value < 101) {
            fetch('https://jsonplaceholder.typicode.com/comments/'+input.value)
            .then(response => response.json())
            .then(json => {
                  //console.log(json);
                  comments.innerHTML = '';
                  error.innerHTML = '';
                  comments.innerHTML += '<h4>Author: ' + json.name + '</h2>';
                  comments.innerHTML += '<p>Comment: ' + json.body + '</p>';
            });
      }
      else {
            errorMessage();
      } 
}
function errorMessage(){
      comments.innerHTML = '';
      post.innerHTML = '';
      error.innerHTML = '<p>Please enter the number from 1 to 100</p>'
}