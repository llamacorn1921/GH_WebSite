const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch({ devtools: true });
	const page = await browser.newPage();
	await page.goto("https://llamacorn1921.github.io/GH_WebSite/debug.html");
	await page.once("load", () => console.log("Page loaded!"));
	await page.on("pageerror", (msg) => {
		console.log("d");
	});
})();
