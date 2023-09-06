import { useNavigate } from "react-router-dom"
import Login from "../../src/pages/Login"


describe('validateForm.cy.jsx', () => {
  it('Validate userid', () => {
    cy.mount(<Login />)
    cy.get(".userid").type("123456789")
    cy.get('.password').type("123456789")
    cy.get('.login_btn').click()
  })
})