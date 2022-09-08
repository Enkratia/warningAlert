// $("button").click(function () {
//   $(".alert").removeClass("hide");
//   $(".alert").addClass("show");
//   $(".alert").addClass("showAlert");
//   setTimeout(function () {
//     $(".alert").addClass("hide");
//     $(".alert").removeClass("show");
//   }, 5000);
// })
// $(".close-btn").click(function () {
//   $(".alert").addClass("hide");
//   $(".alert").removeClass("show");
// })

const button = document.querySelector("button");
const alert = document.querySelector(".alert");
let close = document.querySelector(".close-btn");

button.addEventListener("click", () => {
  alert.classList.remove("hide");
  alert.classList.add("show");
  alert.classList.add("showAlert");

  const timeOut = setTimeout(() => {
    alert.classList.remove("show");
    alert.classList.add("hide");
  }, 4000)

  if (close.classList.contains("preserve")) {
    alert.classList.remove("show");
    alert.classList.add("hide");
    close.classList.remove("preserve");
    clearTimeout(timeOut);
  }
})

close.addEventListener("click", () => {
  alert.classList.remove("show");
  alert.classList.add("hide");
  close.classList.add("preserve");
})
