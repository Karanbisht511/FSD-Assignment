import Login from "../../src/pages/Login"
import Authstate from "../../src/context/AuthState"
import LoginPage from "../support/pageObjects/loginPage"

const loginPage = new LoginPage()

describe('validateForm.cy.jsx', () => {
  beforeEach(() => {
    const authContextWrapper = <Authstate> <Login /></Authstate>
    cy.mount(authContextWrapper)
  })

  it('Validate invalid user', () => {
    cy.get(loginPage.userid).type("12345678")
    cy.get(loginPage.password).type("12345678")
    cy.get(loginPage.btnLogin).click()
    cy.get(loginPage.errAuth).invoke('text').then((value) => {
      expect(value.trim()).to.equal("Invalid User Credentials!")
    })
  })

  it('Validate invalid form data', () => {
    cy.get(loginPage.userid).type("123")
    cy.get(loginPage.password).type("abcd")
    cy.get(loginPage.btnLogin).click()
    cy.fixture('errors.json').then(data => {
      const { formError, userIDError, pwdError } = data
      cy.get(loginPage.errForm).invoke('text').then((value) => {
        expect(value.trim()).to.equal(formError)
      })
      cy.get(loginPage.errUser).invoke('text').then((value) => {
        expect(value.trim()).to.equal(userIDError)
      })
      cy.get(loginPage.errPwd).invoke('text').then((value) => {
        expect(value.trim()).to.equal(pwdError)
      })
    })
  })

  it("Validate valid user", () => {
    cy.fixture("credentials.json").then(credentials=>{
      const {users}=credentials
      cy.get(loginPage.userid).type(users[0].id)
      cy.get(loginPage.password).type(users[0].password)
    })
    cy.get(loginPage.btnLogin).click()
  })
})