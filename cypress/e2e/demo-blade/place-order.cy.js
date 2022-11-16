const url = "https://www.demoblaze.com/index.html";
const username = "Daniel B";
const password = "123456";
const nameOrder = "Daniel";
const country = "Colombia";
const city = "Medellín"
const card = "123456789"
const month = "05"
const year = "2024"


describe('Place order with login and without login and validation of products in the cart', () => {
  before(() => {
    cy.viewport(1920, 1080);
    cy.visit({ url });
    cy.get("#nava").should("have.text", "\n      PRODUCT STORE");
  });

  it('Place order whitout login', () => {
    cy.get('.card-title').first().then(($cardTitle) => {
      const title = $cardTitle.text();
    cy.get('.hrefch').first().click()
    cy.get('.name').should('have.text', title);
    cy.get('[onclick="addToCart(1)"]').click().type('{enter}')
    cy.wait(2000);
    cy.get('#cartur').click()
    cy.wait(2000)
    cy.get('.success > :nth-child(2)').should('have.text', title)
    })
  })

  it('Place order form', () => {
    cy.get('button').contains('Place Order').click()
    cy.get('#orderModalLabel').should('have.text', 'Place order');
    cy.get('#name').type(nameOrder)
    cy.get('#country').type(country)
    cy.get('#city').type(city)
    cy.get('#card').type(card)
    cy.get('#month').type(month)
    cy.get('#year').type(year)
    cy.get('[onclick="purchaseOrder()"]').click()
    cy.get('.confirm').click()
  })



  // it('Order with login', () => {
  //   cy.get("#login").click();

  // })


});