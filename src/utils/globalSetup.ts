import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const context = await browser.newContext();
    await page.goto('https://practice.expandtesting.com/notes/app');
    const overlay = page.locator('text=Accept Cookies');
    if (await overlay.isVisible()) {
        await overlay.click();
    }
    await context.storageState({ path: 'state.json' });
    await browser.close();
}

export default globalSetup;

