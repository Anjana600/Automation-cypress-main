class transferControlProfilePage{
    getDomainNameDropdown()
    {
        return cy.get('#userDomain > div > div > div.ng-input')
    }

    getselectFromDomainNameDropdown()
    {
        return cy.get("ng-dropdown-panel").contains("09asa")
    }

    getCategoryNameDropdown()
    {
        return cy.get('#userCategory > div > div > div.ng-input')
    }

    getselectFromCategoryNameDropdown()
    {
        return cy.get("ng-dropdown-panel").contains("asad13")
    }
    getProfileName()
    {
        return cy.get('#profileName')

    }
    getProceedButton()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }
    getShortName()
    {
        return cy.get('#shortName')

    }
    getDescription()
    {
        return cy.get('#description')
    }

    getPostETopupMinBalance()
    {
        return cy.get(':nth-child(1) > :nth-child(2) > #minBalance')

    }
    
    getETopupMinBalance()
    {
        return cy.get(':nth-child(2) > :nth-child(2) > #minBalance')

    }
    getPostETopupMaxBalance()
    {
        return cy.get(':nth-child(1) > :nth-child(3) > #maxBalance')

    }
    
    getETopupMaxBalance()
    {
        return cy.get(':nth-child(2) > :nth-child(3) > #maxBalance')

    }
    getPostETopupMinAmount()
    {
        return cy.get(':nth-child(1) > :nth-child(4) > #c2sMinTxnAmt')

    }
    
    getETopupMinAmount()
    {
        return cy.get(':nth-child(2) > :nth-child(4) > #c2sMinTxnAmt')
        // return cy.get('.default.ng-invalid > :nth-child(4) > #c2sMinTxnAmt')
    }
    getPostETopupMaxAmount()
    {
        return cy.get(':nth-child(1) > :nth-child(5) > #c2sMaxTxnAmt')

    }
    
    getETopupMaxAmount()
    {
        return cy.get(':nth-child(2) > :nth-child(5) > #c2sMaxTxnAmt')

    }
    getPostETopupAlertingBal()
    {
        return cy.get(':nth-child(1) > :nth-child(6) > #altBalance')

    }
    
    getETopupAlertingBal()
    {
        return cy.get(':nth-child(2) > :nth-child(6) > #altBalance')

    }
    getPostETopupMaxPercentage()
    {
        return cy.get(':nth-child(1) > :nth-child(7) > #allowedMaxPercentage')

    }
    
    getETopupAlertingMaxPercentage()
    {
        return cy.get(':nth-child(2) > :nth-child(7) > #allowedMaxPercentage')
    }

//Daily
    getChannelTransferInCount()
    {
        return cy.get('#channelTransferInCountD')
    }
    getChannelTransferOutCount()
    {
        return cy.get('#channelTransferOutCountD')
    }
    getSubscriberTransferInCount()
    {
        return cy.get('#subscriberTransferInCountD')
    }
    getSubscriberTransferOutCount()
    {
        return cy.get('#subscriberTransferOutCountD')
    }

    getChannelTransferInAlertingCount()
    {
        return cy.get('#channelTransferInAltCountD')
    }
    getChannelTransferOutAlertingCount()
    {
        return cy.get('#channelTransferOutAltCountD')
    }
    getSubscriberTransferInAlertingCount()
    {
        return cy.get('#subscriberTransferInAltCountD')
    }
    getSubscriberTransferOutAlertingCount()
    {
        return cy.get('#subscriberTransferOutAltCountD')
    }

    getChannelTransferInValue()
    {
        return cy.get('#channelTransferInValD')

    }
    getChannelTransferOutValue()
    {
        return cy.get('#channelTransferOutValD')

    }
    getSubscriberTransferValue()
    {
        return cy.get('#subscriberTransferInValD')

    }
    getSubscriberTransferOutValue()
    {
        return cy.get('#subscriberTransferOutValD')

    }

    getChannelTransferInAlertingValue()
    {
        return cy.get('#channelTransferInAltValD')
    }
    getChannelTransferOutAlertingValue()
    {
        return cy.get('#channelTransferOutAltValD')
    }
    getSubscriberTransferAlertingValue()
    {
        return cy.get('#subscriberTransferInAltValD')
    }
    getSubscriberTransferOutAlertingValue()
    {
        return cy.get('#subscriberTransferOutAltValD')
    }

//Weekly
getChannelTransferInCountW()
{
    return cy.get('#channelTransferInCountW')
}
getChannelTransferOutCountW()
{
    return cy.get('#channelTransferOutCountW')
}
getSubscriberTransferInCountW()
{
    return cy.get('#subscriberTransferInCountW')
}
getSubscriberTransferOutCountW()
{
    return cy.get('#subscriberTransferOutCountW')
}

getChannelTransferInAlertingCountW()
{
    return cy.get('#channelTransferInAltCountW')
}
getChannelTransferOutAlertingCountW()
{
    return cy.get('#channelTransferOutAltCountW')
}
getSubscriberTransferInAlertingCountW()
{
    return cy.get('#subscriberTransferInAltCountW')
}
getSubscriberTransferOutAlertingCountW()
{
    return cy.get('#subscriberTransferOutAltCountW')
}

getChannelTransferInValueW()
{
    return cy.get('#channelTransferInValW')

}
getChannelTransferOutValueW()
{
    return cy.get('#channelTransferOutValW')

}
getSubscriberTransferValueW()
{
    return cy.get('#subscriberTransferInValW')

}
getSubscriberTransferOutValueW()
{
    return cy.get('#subscriberTransferOutValW')

}

getChannelTransferInAlertingValueW()
{
    return cy.get('#channelTransferInAltValW')
}
getChannelTransferOutAlertingValueW()
{
    return cy.get('#channelTransferOutAltValW')
}
getSubscriberTransferAlertingValueW()
{
    return cy.get('#subscriberTransferInAltValW')
}
getSubscriberTransferOutAlertingValueW()
{
    return cy.get('#subscriberTransferOutAltValW')
}



//Monthly
getChannelTransferInCountM()
{
    return cy.get('#channelTransferInCountM')
}
getChannelTransferOutCountM()
{
    return cy.get('#channelTransferOutCountM')
}
getSubscriberTransferInCountM()
{
    return cy.get('#subscriberTransferInCountM')
}
getSubscriberTransferOutCountM()
{
    return cy.get('#subscriberTransferOutCountM')
}

getChannelTransferInAlertingCountM()
{
    return cy.get('#channelTransferInAltCountM')
}
getChannelTransferOutAlertingCountM()
{
    return cy.get('#channelTransferOutAltCountM')
}
getSubscriberTransferInAlertingCountM()
{
    return cy.get('#subscriberTransferInAltCountM')
}
getSubscriberTransferOutAlertingCountM()
{
    return cy.get('#subscriberTransferOutAltCountM')
}

getChannelTransferInValueM()
{
    return cy.get('#channelTransferInValM')

}
getChannelTransferOutValueM()
{
    return cy.get('#channelTransferOutValM')

}
getSubscriberTransferValueM()
{
    return cy.get('#subscriberTransferInValM')

}
getSubscriberTransferOutValueM()
{
    return cy.get('#subscriberTransferOutValM')

}

getChannelTransferInAlertingValueM()
{
    return cy.get('#channelTransferInAltValM')
}
getChannelTransferOutAlertingValueM()
{
    return cy.get('#channelTransferOutAltValM')
}
getSubscriberTransferAlertingValueM()
{
    return cy.get('#subscriberTransferInAltValM')
}
getSubscriberTransferOutAlertingValueM()
{
    return cy.get('#subscriberTransferOutAltValM')
}


getMonthOption()
{
    // return cy.get('#ng-select-box-default > div:nth-child(2) > div > table > thead > tr > th:nth-child(3)')
    return  cy.get(':nth-child(3) > :nth-child(2) > .table-responsive-sm > .table > thead.ng-tns-c1274174480-8 > .rectangle2 > :nth-child(3)')
}

getWeekOption()
{
    return cy.get('#ng-select-box-default > div:nth-child(2) > div > table > thead > tr > th:nth-child(2) > a')
}

getSaveButton()
    {
        return cy.get('#rechargeGift > .mdc-button__label')
    }
}
export default transferControlProfilePage

