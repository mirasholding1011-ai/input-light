const root = document.documentElement;
const eye = document.getElementById("eyeball");
const beam = document.getElementById("beam");
const passwordInput = document.getElementById("password");

root.addEventListener("mousemove", (e) => {
  const rect = beam.getBoundingClientRect();

  const mouseX = rect.right + rect.width / 2;
  const mouseY = rect.top + rect.height / 2;

  const rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
  const degrees = rad * (20 / Math.PI) * -1 - 350;

  root.style.setProperty("--beamDegrees", `${degrees}deg`);
});

eye.addEventListener("click", (e) => {
  e.preventDefault();

  document.body.classList.toggle("show-password");

  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.focus();
});
