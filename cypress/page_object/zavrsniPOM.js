class LoginPage {
    get emailInputField () {
        return cy.get("input[type='email']")
    }
    get passwordInputField () {
        return cy.get("input[type='password']")
    }
    get SubmitBtn () {
        return cy.get("button[type='submit']")
    }
    get AddNewBtn (){
        return cy.contains('Add New')
    }
    get AddBoard (){
        return cy.contains('Add Board')
    }
    get nameInputField (){
        return cy.get("input[name='name']")
    }
    get nextBtn (){
        return cy.get("button[name='next_btn']")
    }
    get ScrumBtn (){
        return cy.get("span[name='type_scrum']")
    }
    get xButton (){
       return cy.get('.vs-c-modal__body > .el-button')
    }
    myBoardId (boardId) {
        return cy.get(`a[href="/boards/${boardId}"]`)
    }
    settingsBtn (boardId){
        return cy.get(`a[href="/boards/${boardId}/settings"]`)
    }
    get deleteboard (){
        return cy.get (':nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn')
    }
    get saveBtn (){
        return cy.get ("button[name='save-btn']")
    }
    login (email, password) {
        cy.visit('/login')
        this.emailInputField.type(email)
        this.passwordInputField.type(password)
        this.SubmitBtn.click()
    }
}
export const loginPage = new LoginPage