const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const angleInput = document.getElementById('angle');
const powerInput = document.getElementById('power');
const angleVal = document.getElementById('angleVal');
const powerVal = document.getElementById('powerVal');

angleInput.oninput = () => angleVal.textContent = angleInput.value;
powerInput.oninput = () => powerVal.textContent = powerInput.value;

let isFlying = false;
let javelin = { x: 50, y: 350, vx: 0, vy: 0 };
const g = 0.5;

function drawJavelinShape(ctx, x, y, vx, vy) {
    const length = 40;
    const width = 4;
    const angle = Math.atan2(vy, vx);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    
    // 木の部分
    ctx.fillStyle = '#b58b4c';
    ctx.fillRect(-length, -width / 2, length, width);
    
    // 穂先
    ctx.fillStyle = '#7f8c8d';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-10, -width);
    ctx.lineTo(-10, width);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function drawPrediction() {
    const angle = parseFloat(angleInput.value);
    const v = parseFloat(powerInput.value);
    const rad = (angle * Math.PI) / 180;
    let px = 50, py = 350;
    let pvx = v * Math.cos(rad);
    let pvy = -v * Math.sin(rad);

    ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(px, py);
    for (let i = 0; i < 200; i++) {
        px += pvx;
        py += pvy;
        pvy += g;
        ctx.lineTo(px, py);
        if (py > 350) break;
    }
    ctx.stroke();
    ctx.setLineDash([]);
}

function throwJavelin() {
    if (isFlying) return;
    const angle = parseFloat(angleInput.value);
    const v = parseFloat(powerInput.value);
    const rad = (angle * Math.PI) / 180;
    javelin.x = 50;
    javelin.y = 350;
    javelin.vx = v * Math.cos(rad);
    javelin.vy = -v * Math.sin(rad);
    isFlying = true;
    animate();
}

function animate() {
    javelin.x += javelin.vx;
    javelin.y += javelin.vy;
    javelin.vy += g;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, 350); ctx.lineTo(800, 350); ctx.stroke();

    if (isFlying) {
        drawJavelinShape(ctx, javelin.x, javelin.y, javelin.vx, javelin.vy);
        if (javelin.y < 350) {
            requestAnimationFrame(animate);
        } else {
            isFlying = false;
            alert(`飛距離: ${(javelin.x - 50).toFixed(2)}m`);
        }
    } else {
        drawPrediction();
    }
}

document.getElementById('throwBtn').addEventListener('click', throwJavelin);
// 描画ループを開始
requestAnimationFrame(function loop() {
    if (!isFlying) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(0, 350); ctx.lineTo(800, 350); ctx.stroke();
        drawPrediction();
    }
    requestAnimationFrame(loop);
});