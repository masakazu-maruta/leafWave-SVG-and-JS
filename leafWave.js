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
for (let i = 0; i < 30; i++) {
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

const wave = () => {

}

setInterval(wave, 30);

