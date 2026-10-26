class batchFOC{

getCommissionPayout(){
    return cy.get('ng-dropdown-panel').contains('Commission Payout')
}

}export default batchFOC