/// <reference types="@citizenfx/server" />
/// <reference types="image-js" />

const imagejs = require('image-js');
const fs = require('fs');

const resName = GetCurrentResourceName();
const mainSavePath = `resources/${resName}/images`;

try {
	if (!fs.existsSync(mainSavePath)) {
		fs.mkdirSync(mainSavePath);
	}

	onNet('takeScreenshot', async (filename, type) => {
		const savePath = `${mainSavePath}/${type}`;
		if (!fs.existsSync(savePath)) {
			fs.mkdirSync(savePath);
		}
		exports['screenshot-basic'].requestClientScreenshot(
			source,
			{
				fileName: savePath + '/' + filename + '.webp',
				encoding: 'webp',
				quality: 0.7,
			},
			async (err, fileName) => {
				let image = await imagejs.Image.load(fileName);
				const croppedImage = image.crop({ x: image.width / 4.5, width: image.height });

				const resizedImage = croppedImage.resize({ width: 1080, height: 1080 });

				for (let x = 0; x < resizedImage.width; x++) {
					for (let y = 0; y < resizedImage.height; y++) {
						const pixelArr = resizedImage.getPixelXY(x, y);
						const r = pixelArr[0];
						const g = pixelArr[1];
						const b = pixelArr[2];

						if (g > r + b) {
							resizedImage.setPixelXY(x, y, [255, 255, 255, 0]);
						}
					}
				}

				await resizedImage.save(fileName);
			}
		);
	});
} catch (error) {
	console.error(error.message);
}
