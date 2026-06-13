const Jimp = require('jimp');

async function crop() {
    try {
        const image = await Jimp.read('src/assets/images/logo-v2.png');
        image.autocrop();
        await image.writeAsync('src/assets/images/favicon.png');
        console.log("Successfully cropped and saved favicon.png");
    } catch (e) {
        console.error("Error cropping image", e);
    }
}

crop();
