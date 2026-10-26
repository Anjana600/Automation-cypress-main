 /// <reference types="Cypress" />
  
import { Before } from "@badeball/cypress-cucumber-preprocessor"
 
//BDD HOOKS
 
Before(()=>{
 
    cy.fixture('example.json').then(function (loginData){
        this.loginData = loginData
    })
 
    cy.fixture('usersData.json').then(function (userData){
        this.userData = userData
    })
 
    cy.fixture('messages.json').then(function (message){
        this.message = message
    })

    cy.fixture('C2CTransfer.json').then(function (C2CData){
        this.C2CData=C2CData
    })

    cy.fixture('C2CReturn.json').then(function (C2CReturn){
        this.C2CReturn=C2CReturn
    })

    cy.fixture('automaticStockManagement.json').then(function (asmData){
        this.asmData=asmData
    })

    cy.fixture('operatorToChannel.json').then(function (O2CData){
        this.O2CData=O2CData
    })

    cy.fixture('C2CPurchase.json').then(function (purchase){
        this.purchase=purchase
    })

    cy.fixture('serviceKeywordManagement.json').then(function (serviceKeyword){
        this.serviceKeyword = serviceKeyword
    })
 
    cy.fixture('transferControlProfile.json').then(function (tcp){
        this.tcp = tcp
    })
    cy.fixture('domainManagement.json').then(function (domainManagement){
        this.domainManagement = domainManagement
    })
    cy.fixture('channelToChannelWithdraw.json').then(function (CTCW){
        this.CTCW = CTCW
    })
    cy.fixture('TransactionReversal.json').then(function (CTCTR){
        this.CTCTR = CTCTR
    })
    cy.fixture('c2sTransactionReversal.json').then(function (CTSTR){
        this.CTSTR = CTSTR
    })
    cy.fixture('rechargeReversal.json').then(function (rechargeReversal){
        this.rechargeReversal = rechargeReversal
    })
   
    cy.fixture('postPaidRecharge.json').then(function (postPaidRecharge){
        this.postPaidRecharge = postPaidRecharge
    })
 
    cy.fixture('messageGateway.json').then(function (messageGateway){
        this.messageGateway = messageGateway
    })
    cy.fixture('initiateStockDeduction.json').then(function (initiateStockDeduction){
        this.initiateStockDeduction = initiateStockDeduction
    })
 
})