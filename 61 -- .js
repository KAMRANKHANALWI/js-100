// Get Dimensions of an Image

const img = new Image();

img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Red_Fort_in_Delhi_03-2016_img3.jpg/476px-Red_Fort_in_Delhi_03-2016_img3.jpg';

img.onload = function() {
    console.log('width' + this.width)
    console.log('height' + this.heigth)
}