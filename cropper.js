let lightmode = true;

for (let item of a) {
  console.log(item);
  item.classList.add("dark");
}

// toggle.onclick = function () {
//     lightmode = !lightmode
//   wrapper.classList.toggle("active");
//   toggle.classList.toggle("active");
//   checkbox.classList.toggle("active");
//   link.classList.toggle("active");
// };

// if (lightmode) {

// } else {
//     for (let item of a) {
//         console.log(item);
//         item.removeAttribute("class")
//       }
//     for (let item of a) {
//         console.log(item);
//         item.classList.toggle("active");
//       }
// }

function toggleMode() {
  lightmode = !lightmode;
  if (lightmode) {
    wrapper.classList.add("dark-mode");

  } else {
    wrapper.classList.remove("dark-mode");
  
  }
}
