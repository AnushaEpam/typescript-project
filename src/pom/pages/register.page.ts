import { BasePage } from "./base.page";
import { IRegisterPage } from "./interface.register.page";
import { FormControlNames } from "../../utils/formControls";

export class RegisterPage extends BasePage implements IRegisterPage {
    async navigate(path: string = "app/register") {
        await this.page.goto(path);
    }

    async fillEmail(email: string) {
        await this.page.fill(`input[name=${FormControlNames.Email}]`, email);
    }

    async fillPassword(password: string) {
        await this.page.fill(`input[name=${FormControlNames.Password}]`, password);
    }

    async fillName(name: string) {
        await this.page.fill(`input[name=${FormControlNames.Name}]`, name);
    }

    async fillConfirmPassword(password: string) {
        await this.page.fill(`input[name=${FormControlNames.ConfirmPassword}]`, password);
    }

    async submitRegistration() {
        await this.page.click('button[data-testid="register-submit"]');
    }
}
