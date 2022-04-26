beforeEach(() => {
    cy.loginRequest();
    cy.visit("/profile");
});   

describe("Profile page", () => {
    it("Load test default email", () => {        
        cy.get("[id=email]").should("be.disabled");
        cy.get("[id=email]").should("have.value", Cypress.env("email"));
    });

    it("Edit full name", () => {        
        cy.get("[id=full_name]").clear().type("John Foo");  
        cy.get("[data-cy=button-save]").click();

        cy.contains("Profile successfully updated");
        cy.url().should("contain", "/mynotes");
    });
})