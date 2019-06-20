const moonPath =
  "M56 78.5C56 121.854 79.5 157 79.5 157C35.5934 157 0 121.854 0 78.5C0 35.1456 35.5934 0 79.5 0C79.5 0 56 35.1456 56 78.5Z";
const sunPath =
  "M159 78.5C159 121.854 123.407 157 79.5 157C35.5934 157 0 121.854 0 78.5C0 35.1456 35.5934 0 79.5 0C123.407 0 159 35.1456 159 78.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;
darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }]
    })
    .add(
      {
        targets: "#darkMode",
        rotate: toggle ? 0 : 320
      },
      "-=350"
    )
    .add(
      {
        targets: "section",
        color: toggle ? "rgb(22,22,22)" : "rgb(255, 255, 255)",
        backgroundColor: toggle ? "rgb(74, 204, 238)" : "rgb(22,22,22)"
      },
      "-=300"
    );
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
function showButton() {
  document.getElementById("hiddenButton").style.visibility = "visible";
}
