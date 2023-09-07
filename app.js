const list = document.getElementById("list");
const button = document.getElementById("btn-show");
const buttonLast = document.getElementById("btn-lastshow");
const text = document.getElementById("text");
fetch("http://localhost:3000/articles")
  .then((data) => {
    return data.json();
  })
  .then((articles) => {
    getData(articles);
  });

function getData(datas) {
  datas.forEach((data) => {
    const item = document.createElement("li");
    console.log(data);
    item.innerHTML = `
    <h3>${data.title}</h3>
    <h4> ${data.author} </h4>
    <button id="btn-show"> Read More</button>
    <button id="btn-lastshow" class="hidden"> Back</button>
    <p id="text" class="hidden">  ${data.body} </p>
    <hr />
    `;
    list.appendChild(item);
  });
}
// function forButton() {
//   text.classList.toggle("hidden");
//   buttonLast.classList.toggle("hidden");
//   button.classList.toggle("hidden");
// }
// button.addEventListener("click", () => {
//   text.classList.remove("hidden");
// });
// buttonLast.addEventListener("click", () => {
//   forButton();
// });
list.addEventListener("click", function (e) {
  if (e.target && e.target.id === "btn-show") {
    const button = e.target;
    const buttonLast = button.nextElementSibling;
    const text = button.nextElementSibling.nextElementSibling;
    button.classList.add("hidden");
    buttonLast.classList.remove("hidden");
    text.classList.remove("hidden");
  } else if (e.target && e.target.id === "btn-lastshow") {
    const buttonLast = e.target;
    const button = buttonLast.previousElementSibling;
    const text = buttonLast.nextElementSibling;
    buttonLast.classList.add("hidden");
    text.classList.add("hidden");
    button.classList.remove("hidden");
  }
});
