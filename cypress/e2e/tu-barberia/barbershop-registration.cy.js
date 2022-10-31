const url = 'https://qa.tubarberia.co/';
const fullName = 'Juana De Arco';
const documentType = 'CC';
const documentNumber = '444533334';
const email = 'test@mail.com';
const cellPhone = '3145265656';
const nameBarbershop = 'El calvo';
const description = 'This is a description test of barbershop';
const address = 'Calle 50 # 25-50';
const departament = 'Antioquia';
const city = 'Medellín';
const service = 'Barba';
const price = '5000';
const hours = '7';
const minutes = '30';

describe('Registration', () => {

    before(() => {
        cy.visit({url});
    });

    it('Basic information', () => {
      cy.get('.title-step').should('have.text','Información básica');
      cy.get('#fullNameUser').type(fullName);
      cy.get('#documentType').select(documentType);
      cy.get('#documentNumber').type(documentNumber);
      cy.get('#emailStaff').type(email);
      cy.get('#cellPhoneStaff').type(cellPhone);
      cy.get('.send-button').click();
    });

    it('Create business', () => {
        cy.get('.title-step').should('have.text','Crear negocio');
        cy.get('#barbershopName').type(nameBarbershop);
        cy.get('#description').type(description);
        cy.get('#address').type(address);
        cy.get('#departament').select(departament);
        cy.get('city').select(city);
        cy.get('cellPhone').type(cellPhone);
        cy.get('email').type(email);
        cy.get('.send-button').click();
    });

    it('Add services', () => {
        cy.get('.title-step').should('have.text','Agregar servicios');
        cy.get('#service').type(service);
        cy.get('#price').type(price);
        cy.get('.bi bi-plus-circle-fill').click();
        cy.get('.send-button').click();
    });

    it('Add schedules', () => {
        cy.get('.title-step').should('have.text','Agregar horarios');
        cy.get('input[aria-label="Hours"]').clear().type(hours);
        cy.get('input[aria-label="Minutes"]').clear().type(minutes);
    });

    it('Customize business', () => {
        cy.get('.title-step').should('have.text','Personalizar negocio');
        
    });



    
});