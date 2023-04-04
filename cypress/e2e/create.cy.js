/// <reference types="Cypress" />
import { loginPage } from "../page_object/zavrsniPOM";
const { email, password } = Cypress.env()

let imeBoarda = 'NoviBoard'
let boardId = ''
describe('Create', () => {
    it('Create new board', () => {
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
        }).as("boardCreated");

        loginPage.login(email, password)
        loginPage.xButton.click()
        loginPage.AddNewBtn.click()
        loginPage.AddBoard.click()
        loginPage.nameInputField.type(imeBoarda)
        loginPage.nextBtn.click()
        loginPage.ScrumBtn.click()
        loginPage.nextBtn.click()
        loginPage.nextBtn.click()
        loginPage.nextBtn.click()
        loginPage.nextBtn.click()
        cy.wait('@boardCreated').then((intercept) => {
           let imeBoardaResponse = intercept.response.body.name
            boardId = intercept.response.body.id
            cy.log(boardId)
            cy.log(imeBoardaResponse)
            expect(imeBoarda).eq(imeBoardaResponse)
        })
    })
    it('Delete board', () => {
        loginPage.login(email, password)
        loginPage.xButton.click()
        loginPage.myBoardId(boardId).scrollIntoView().click()
        loginPage.settingsBtn(boardId).click()
        loginPage.deleteboard.click()
        loginPage.saveBtn.click()
    })
})