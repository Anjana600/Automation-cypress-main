export default class C2CWithdrawal{

    getWithdrawalIcon()
    {
        return cy.get('.iconList > :nth-child(3) > .ng-star-inserted')
    }

    getAmountforWithdrawal()
    {
        return cy.get(':nth-child(4) > .row > .amountP > #amoutnId')
    }

    getRemarksforwithdraw()
    {
        return cy.get('#textBox')
    }

    getWithdrawButton()
    {
        return cy.get('#withdrawButton > .mdc-button__label')
    }

    getWithdrawButtoninPinPage()
    {
        return cy.get('#withdrawButton1 > span.mdc-button__label')
    }

    getWithdrawSuccessfulText()
    {
        return cy.get('#successfultitle') // Withdrawal Successful 
    }

    getDoneButton()
    {
        return cy.get('#doneButton > span.mdc-button__label')
    }



    

}