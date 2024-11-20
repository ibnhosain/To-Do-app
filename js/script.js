let post_area = document.querySelector(".post_area");
let input_title = document.querySelector(".input_title");
let input_post = document.querySelector(".input_post");
let post_btn = document.querySelector(".post_btn");
let arry = [];

post_btn.addEventListener("click", function () {
  arry.push({
    name: input_title.value,
    post: input_post.value,
  });

  input_title.value = "";
  input_post.value = "";
  post();

  post_area.innerHTML = "";
  post();
});

function post() {
  arry.map((item) => {
    post_area.innerHTML += `
    <div class="post_box">
    <div class="post_title">
      <h1>${item.name}</h1>
    </div>
    <div class="post_post">
      <p>${item.post}</p>
    </div>
    <button type="button" class="btn btn-success">Edite</button>
       <button type="button" class="btn btn-danger">Delet</button>
  </div>
  `;
  });
}
