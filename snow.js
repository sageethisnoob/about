// Snow Canvas
const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create snowflake array
const snowflakes = [];

// Function to create a snowflake
function createSnowflake() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
    };
}

// Populate initial snowflakes
for (let i = 0; i < 100; i++) {
    snowflakes.push(createSnowflake());
}

// Function to draw a snowflake
function drawSnowflake(flake) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
}

// Function to update snowflake positions
function updateSnowflake(flake) {
    flake.y += flake.speed;

    // Reset snowflake to the top when it goes off-screen
    if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
    }
}

// Animate snowflakes
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const flake of snowflakes) {
        updateSnowflake(flake);
        drawSnowflake(flake);
    }

    requestAnimationFrame(animate);
}

animate();

// Adjust canvas size when the window resizes
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
