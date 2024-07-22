const leafNumber = 30;

let upLeafs = [];
let downLeafs = [];
let leafSources = [
    'svgs/leaf-1.svg',
    'svgs/leaf-2.svg',
    'svgs/leaf-3.svg',
    'svgs/leaf-4.svg',
    'svgs/leaf-5.svg'
];

var upContainer = document.getElementById('up-leaf-container');
var downContainer = document.getElementById('down-leaf-container');
for (let i = 0; i < leafNumber; i++) {
    let upSvgTag = document.createElement('img');
    let downSvgTag = document.createElement('img');
    upSvgTag.src = leafSources[i % leafSources.length];
    downSvgTag.src = leafSources[i % leafSources.length];
    upSvgTag.setAttribute('class', 'leafs');
    downSvgTag.setAttribute('class', 'leafs');
    upContainer.appendChild(upSvgTag);
    downContainer.appendChild(downSvgTag);
    upLeafs.push(upSvgTag);
    downLeafs.push(downSvgTag);
}
const startAnimation = () => {
    requestAnimationFrame(animation);
}

const firstTime = Date.now();
const up = true, down = false
    , dirRight = true, dirLeft = false;
const upDuration = 0, downDuration = Math.PI / 2;
const animation = () => {
    let currentTime = Date.now();
    wave(up, dirRight, upDuration, currentTime);
    wave(down, dirLeft, downDuration, currentTime);
    requestAnimationFrame(animation);
}


const wave = (isUp, direction, duration, currentTime) => {
    const container = isUp ? upContainer : downContainer;
    const Leafs = isUp ? upLeafs : downLeafs;
    for (let i = 0; i < leafNumber; i++) {
        const leaf = Leafs[i];
        const xPos = nextX(i, currentTime, direction, leaf);
        const yPos = nextY(duration, leaf, container, xPos);
        leaf.style.transform = `translateX(${xPos}px)`;
        leaf.style.transform += `translateY(${yPos}px)`;
    }
}

const waveSpeed = 0.25;
const nextX = (index, currentTime, direction, leaf) => {
    const leafDestination = leafNumber * leaf.getBoundingClientRect().width;
    const firstPos = leafDestination * index / leafNumber;
    const offset = ((currentTime - firstTime) * waveSpeed);

    if (direction == dirRight) {
        return (firstPos + offset) % (leafDestination) - leaf.getBoundingClientRect().width;
    } else {
        let nextX = (firstPos - offset) % leafDestination;
        if (nextX < 0) nextX += leafDestination;
        return nextX - leaf.getBoundingClientRect().width;
    }
}

const nextY = (duration, leaf, container, xPos) => {
    const xAxis = container.getBoundingClientRect().height / 2 - leaf.getBoundingClientRect().height / 2;
    const radian = (xPos / container.getBoundingClientRect().width) * Math.PI * 2 + duration;
    const offset = Math.sin(radian) * xAxis;
    return xAxis + offset;
}

startAnimation();