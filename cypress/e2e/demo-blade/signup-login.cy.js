const url = "https://www.demoblaze.com/index.html";
const username = "juanita3";
const password = "123456";

describe("Sign up and login", () => {
  before(() => {
    cy.viewport(1920, 1080);
    cy.visit({ url });
    cy.get("#nava").should("have.text", "\n      PRODUCT STORE");
  });

  it("Sign up", () => {
    cy.get("#signin2").click();
    cy.get("#signInModalLabel").should("have.text", "Sign up");
    cy.wait(2000);
    cy.get("#sign-username").type(username);
    cy.get("#sign-password").type(password);
    cy.get('[onclick="register()"]').contains("Sign up").click();
  });

  it("Log in", () => {
    cy.get("#login2").click();
    cy.get("#logInModalLabel").should("have.text", "Log in");
    cy.wait(2000);
    cy.get("#loginusername").type(username);
    cy.get("#loginpassword").type(password);
    cy.get('[onclick="logIn()"]').contains("Log in").click();
    cy.wait(2000);
    cy.get("#nameofuser").should("have.text", `Welcome ${username}`);
  });
});
