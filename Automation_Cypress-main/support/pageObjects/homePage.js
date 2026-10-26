export default class homePage{
  
    getuserMigrationAcrossDomainID()
    {
        return cy.get(':nth-child(3) > #Path16')
    }

    getTransferRulesID()
    {
        return cy.get('#P_NW_TRF_RULES_MAIN')
    }

    getChanneltoChannelID()
    {
        return cy.get('#P_C2C_MAIN')
    }

    getAutomaticStockManagementID()
    {
        return cy.get('#P_STOCK_MGMT_MAIN')
    }

    getVoucherDownloadID()
    {
        return cy.get('#P_VCH_DWNLD_ADM_MAIN > span')
    }

    getoperatorToChannelID()
    {
        return cy.get('#P_O2C_MAIN > span')
    }



    getServiceKeywordManagementId()
    {
        return cy.get(':nth-child(2) > #Rectangle8Copy12')
    }

    getProfileManagementId()
    {
        // return cy.get('#P_SU_PROF_MGMT_MAIN')
        return   cy.get('#P_NW_PROF_MGMT_MAIN > .childmenucss')
    }

    getTransferRuleId()
    {
        return cy.get('#P_NW_TRF_RULES_MAIN > .childmenucss')
    }
    getSublookupManagement()
    {
        return cy.get(':nth-child(3) > #Rectangle8Copy12')
    }
    getChannelDomain()
    {
        return cy.get('#P_SU_CHNL_DMN_MAIN')
    }
    getChannelToChannel()
    {
        return cy.get('#P_C2C_MAIN')
    }
    getO2C()
    {
        return cy.get('#P_O2C_MAIN')
    }
    getuserBarringManagement()
    {
        return cy.get(':nth-child(2) > #Path16')
    }
    getc2cTransactionReversal()
    {
        return cy.get(':nth-child(2) > .col > .col-12')
    }
    geto2cTransactionReversal()
    {
        return cy.get(':nth-child(4) > .col > .col-12')
    }
    getc2sTransactionReversal()
    {
        return cy.get(':nth-child(3) > .col > .col-12')
    }
    getrecharge()
    {
        return cy.get('#P_RC_MAIN > .childmenucss')
    }
    getCardGroup()
    {
        return cy.get('#P_NW_CRDGRP_MAIN > .childmenucss')
    }
    getChannelUser()
    {
        return cy.get('#lookup > .ng-select-container > .ng-value-container > .ng-input')
    }
    getMessageGatewayId()
    {
        return cy.get('#P_SU_MSG_GW_MAIN')
    }
    getNetworkStock()
    {
        return cy.get('#P_NW_NW_STOCK_MAIN')
    }
    getC2SReconciliation()
    {
        return cy.get('#P_NW_RECON_MAIN')
    }
    getGatewayMapping()
    {
        return cy.get('#P_SU_MSG_GW_MAPP')
    }
    getApprovalLevel1()
    {
        return cy.get('#P_APPR_L1')
    }
    getNameCard()
    {
        return cy.get('.nav-link > span')
    }
    getUserMigrationAcrossDomain()
    {
        return cy.get(':nth-child(3) > #Rectangle8Copy12')
    }
    getTransferRules()
    {
        return cy.get('#P_NW_TRF_RULES_MAIN')
    }
    getOperatorToChannel()
    {
        return cy.get('#P_O2C_MAIN')
    }
    getApprovalLevel2()
    {
        return cy.get('#P_APPR_L2')
    }
    getApprovalLevel3()
    {
        return cy.get('#P_APPR_L3')
    }
    getOperatorUser()
    {
        return cy.get('#P_SU_OPTUSER_MAIN')
    }
    getChannelToChannel()
    {
        return cy.get('#P_C2C_MAIN')
    }
    getTransactionC2C()
    {
        return cy.get('#P_C2C_TX')
    }
    getApprovalLevel1C2C()
    {
        return cy.get('#P_C2C_AP1')
    }
    getRecharge()
    {
        return cy.get('#P_RC_MAIN')
    }
    getRechargeService()
    {
        return cy.get('#P_RC_RC')
    }
}