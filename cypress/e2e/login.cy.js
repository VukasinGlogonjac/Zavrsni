/// <reference types="Cypress" />
import { loginPage } from "../page_object/zavrsniPOM";
const { email, password } = Cypress.env()

describe('Login', () => {

    it('Successful login ', () => {
        loginPage.login(email, password)
        cy.url().should('not.contain', 'login')
        loginPage.emailInputField.should('not.to.exist')
        loginPage.passwordInputField.should('not.to.exist')
        loginPage.SubmitBtn.should('not.to.exist')
       
    })
    it('Unsuccessful login - invalid email input', () => {
        loginPage.login('nesto', password)
        cy.url().should('contain', 'login')
        loginPage.emailInputField.should('be.visible')
        loginPage.passwordInputField.should('be.visible')
        loginPage.SubmitBtn.should('be.visible')
    })
    it('Unsuccessful login - wrong password', () => {
        loginPage.login(email, 'nesto123')
        cy.url().should('contain', 'login')
        loginPage.emailInputField.should('be.visible')
        loginPage.passwordInputField.should('be.visible')
        loginPage.SubmitBtn.should('be.visible')
    })
    it('Unsuccessful login - wrong email adress', () => {
        loginPage.login('vuleglogonjac@gmail', password)
        cy.url().should('contain', 'login')
        loginPage.emailInputField.should('be.visible')
        loginPage.passwordInputField.should('be.visible')
        loginPage.SubmitBtn.should('be.visible')
    })

})