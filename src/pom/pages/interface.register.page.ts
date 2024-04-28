export interface IRegisterPage {
    fillEmail(email: string);
    fillPassword(password: string);
    fillName(name: string);
    fillConfirmPassword(password: string);
    submitRegistration();
}