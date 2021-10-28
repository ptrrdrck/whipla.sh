const images = [
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png',
    './img/7.png',
    './img/8.png',
    './img/9.png',
    './img/10.png',
    './img/11.png',
];

const image = new Image();

image.src = images[Math.floor(Math.random() * images.length)];

image.onload = () => {
    const canvas = document.createElement('canvas');
    document.querySelector('.index').append(canvas);
    const multiply = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const count = Math.ceil(Math.random() * 8);
        const slices = [];
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        const width = canvas.width / count;
        const indices = [...Array(count).keys()];
        while (indices.length !== 0) {
            const index = indices.splice(Math.floor(Math.random() * indices.length), 1);
            slices.push(canvas.getContext('2d').getImageData(width * index, 0, width, canvas.height));
        }
        slices.forEach((slice, index) => {
            canvas.getContext('2d').putImageData(slice, width * index, 0);
        });
        setTimeout(multiply, Math.random() * 60);
    }
    multiply();
}