export default class loginPage{
    getLoginID()
    {
        return cy.get('#login_id')
    }

    getPassword()
    {
        return cy.get('#pwd')
    }

    getLoginBtn()
    {
        return cy.get('.btn')
    }
}
 