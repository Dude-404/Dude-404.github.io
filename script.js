const animatedName = document.getElementById("animated-name");
const themeChanger = document.getElementById("theme-changer");

const tags = ["Rudra", "HexDev", "a GameDev", "a Gamer"];
let tagIdx = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typerAnimation(text) {
    animatedName.textContent = "Hi, I am "
    for (let i = 0; i < text.length; i++) {
        animatedName.textContent += text.charAt(i);
        await sleep(100);
    }
    await sleep(3000);
    for (let i = 0; i < text.length; i++) {
        animatedName.textContent = animatedName.textContent.slice(0, -1);
        await sleep(50);
    }
    tagIdx += 1;
    typerAnimation(tags[tagIdx % tags.length]);
}

typerAnimation(tags[tagIdx % tags.length]);

// Theme Change 
themeChanger.addEventListener("click", () => {
    if (themeChanger.getAttribute("data-theme") == "dark") {
        themeChanger.setAttribute("data-theme", "light");
        document.body.setAttribute("data-theme", "light");
        document.getElementById("currentTheme").setAttribute("href", "themes/light.css");
    } else {
        themeChanger.setAttribute("data-theme", "dark");
        document.body.setAttribute("data-theme", "dark");
        document.getElementById("currentTheme").setAttribute("href", "themes/dark.css");
    }
});