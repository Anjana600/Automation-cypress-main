class c2sTransactionReversalPage
{
    getTxnIdField()
    {
        return cy.get('#transactionId')
    }
    getChannelUserMobileNo()
    {
        return cy.get('#chnlUserMsisdn')
    }
    getProceedButton()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }
    getreversAmountButton()
    {
        return cy.get('.reversalClass')
    }
    getreverseAmountButton2()
    {
        return cy.get('#reverseRecharge > span.mdc-button__label')
    }
     getSuccessMsgForC2SReversalTransaction()
    {
        return cy.get('.recharge-successful')
   
    }
    
}
export default c2sTransactionReversalPage