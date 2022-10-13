let btn = document.getElementById("button");
let backGround = document.getElementById("canvas");

const myFunction = () => {
  backGround.style.backgroundColor = "yellow";
  backGround.style.color = "black";
};

btn.addEventListener("click", myFunction);
