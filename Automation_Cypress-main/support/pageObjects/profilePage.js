class profilePage{
    getProfile()
    {
        return cy.get('.text-left > :nth-child(1)')
    }
    getServiceAndDetails()
    {
        return cy.get('#mat-tab-label-2-3 > .mdc-tab__content > .mdc-tab__text-label')
    }
}
export default profilePage