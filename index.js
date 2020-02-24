const puppeteer = require("puppeteer"); // Package to run chromium
const fs = require("fs"); // Import FileSystem package

async function main() {
	const browser = await puppeteer.launch({
		headless: false
	});

	// Open browser with a new page
	const page = await browser.newPage();

	// Call my website on chromium
	await page.goto("http://www.bbass.co/services");

	// set asynchronus call to 'xpath' (searched from chrome dev tools)
	let myElements = await page.$x("./html/body/section[1]/div[1]/div[1]/span"); // select element
	let service = await (await myElement[0].getProperty("innerText")).jsonValue(); // define valuable part of element
	await page.screenshot({ path: "./myPage.png" }); // should screenshot
	fs.writeFileSync("./myData.txt", service); // call fs to save services page items
}

main();
