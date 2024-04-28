import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../src/pom/pages/register.page";

test.describe("Registration Process", () => {
    test("User should be able to register", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.navigate();

      
        const { email, password, name } = require('../../testData/userData.json');
        
        await registerPage.fillEmail(email);
        await registerPage.fillPassword(password);
        await registerPage.fillName(name);
        await registerPage.fillConfirmPassword(password);
        await registerPage.submitRegistration();

        await expect(page).toHaveURL(/.*app\/register/);
        await expect(page.locator('h1')).toHaveText('Register');
    });
});
