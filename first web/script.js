function changeVibe() {
    const text = document.getElementById("text");
    const body = document.body;

    if (text.innerHTML === "lowkey vibe code") {
        text.innerHTML = "highkey energy ⚡";
        body.style.background = "linear-gradient(135deg, #ff4d4d, #1a1a1a)";
    } else {
        text.innerHTML = "lowkey vibe code";
        body.style.background = "linear-gradient(135deg, #111, #1f1f1f)";
    }
}
