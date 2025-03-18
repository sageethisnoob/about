// Snow Canvas
const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflake() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
    };
}

for (let i = 0; i < 100; i++) {
    snowflakes.push(createSnowflake());
}

function drawSnowflake(flake) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
}

function updateSnowflake(flake) {
    flake.y += flake.speed;

    if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const flake of snowflakes) {
        updateSnowflake(flake);
        drawSnowflake(flake);
    }

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
