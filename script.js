let text = document.getElementById('text')
let layer1 = document.getElementById('layer1')
let layer2 = document.getElementById('layer2')
let layer3 = document.getElementById('layer3')
let layer4 = document.getElementById('layer4')
let layer5 = document.getElementById('layer5')

function updatePositions() {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    layer1.style.bottom = value * -0.90 + 'px';
    layer2.style.bottom = value * -1 + 'px';
    layer3.style.bottom = value * -0.75 + 'px';
    layer4.style.bottom = value * -0.5 + 'px';
    layer5.style.bottom = value * -0.35 + 'px';
    requestAnimationFrame(updatePositions);
}

requestAnimationFrame(updatePositions);
