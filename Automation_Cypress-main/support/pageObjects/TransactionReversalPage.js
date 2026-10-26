class TransactionReversalPage
{
    getTxnIdField()
    {
        return cy.get('#transactionId')
    }
    getProceedButton()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }
    getreversalButton()
    {
        return cy.get('.reversalClass')
    }
    geto2creversalButton()
    {
        return cy.get('#user_Name')
    }
    getRemarksField()
    {
        return cy.get('#basic-info-container > div:nth-child(10) > form > div > div')
    }
    getRemarksFieldforO2C()
    {
        return cy.get('#remarksID')
    }
    getReversalTransaction()
    {
        return cy.get('#reverseButton')
   
    }
    getReversalTransactionforO2c()
    {
        return cy.get('#reject > .mdc-button__label')
   
    }
    getYesForReversalTransaction()
    {
        return cy.get('#confirmApproval2 > .mat-mdc-button-touch-target')
   
    }
    getSuccessMsgForReversalTransaction()
    {
        return cy.get('#reverseButton')
   
    }
    getSuccessMsgForO2cReversalTransaction()
    {
        return cy.get('#fixed-message')
   
    }
    
}
export default TransactionReversalPage