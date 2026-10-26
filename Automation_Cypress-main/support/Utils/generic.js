// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 
import loginPage from "../pageObjects/loginPage";
import 'cypress-wait-until';
import 'cypress-file-upload';
 
 
// ------------------OBJECT DECLARATION--------------------
const loginScreen = new loginPage();
 
 
Cypress.Commands.add('launchURL', (URL) => {
    cy.visit(URL);
})
 
 
Cypress.Commands.add('login', (Username, Password) => {
    loginScreen.getLoginID().type(Username)
    loginScreen.getPassword().type(Password)
    loginScreen.getLoginBtn().click()
    cy.wait(2000)
})
 
Cypress.Commands.add('randomName',()=>{
    let randName = 'AUT'+ Math.floor(Math.random() * 10000)
    return randName
})

Cypress.Commands.add('generateRandomNumber', (len) => {
    let randNum = ''; // Initialize randNum as an empty string
    const possible = "0123456789";
    for (let i = 0; i < len; i++) {
      randNum += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randNum;
  });
Cypress.Commands.add('generateRandomLetters', (len) => {
    let randLetters = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < len; i++) {
        randLetters += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randLetters;
});
Cypress.Commands.add('selectExcel', { prevSubject: true }, (subject, fileName) => {
    cy.fixture(fileName, 'base64').then(fileContent => {
        cy.get(subject).then($input => {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(new File([fileContent], fileName));
            $input[0].files = dataTransfer.files;
            cy.wrap($input).trigger('change', { force: true });
        });
    });
});
Cypress.Commands.add('uploadFile', { prevSubject: true }, (subject, fileName) => {
    cy.fixture(fileName, 'base64').then(fileContent => {
        cy.get(subject).then($input => {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(new File([fileContent], fileName));
            $input[0].files = dataTransfer.files;
            cy.wrap($input).trigger('change', { force: true });
        });
    });
});

Cypress.Commands.add('getLastDownloadFilePath',() => {
    const dirPath = 'cypress/downloads';
    const filesOrdered = readdirSync(dirPath)
      .map(entry => path.join(dirPath, entry))
      .filter(entryWithPath => lstatSync(entryWithPath).isFile())
      .map(fileName => ({ fileName, mtime: lstatSync(fileName).mtime }))
      .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
  
    return filesOrdered.length ? filesOrdered[0].fileName : false;
  })

  Cypress.Commands.add('randomIpAddress',()=>{
    let ipParts = [];
    for (let i = 0; i < 4; i++) {
      ipParts.push(getRandomInt(0, 255));
    }
    randomIpAddress = ipParts.join('.');
  return randomIpAddress
})

  
 