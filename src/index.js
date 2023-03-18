import generateJoke from "./generateJoke.js";
import "./styles/main.scss";
import me from "./assets/me-sm.jpg";

const myImage = document.getElementById("myImage");
myImage.src = me;

document.getElementById("jokeBtn").addEventListener("click", async () => {
    document.getElementById("joke").textContent = await generateJoke();
});
