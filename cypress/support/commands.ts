Cypress.Commands.add("login", (email, password, success = true) => { 
    cy.visit("/auth/login");

    cy.get("[data-cy=input-email]").type(email);
    cy.get("[data-cy=input-password]").type(password);

    cy.get("[data-cy=button-login]").click();

    if(success) {
        cy.contains("Success");
        cy.url().should("contain", "/mynotes");
        return;
    }
    cy.url().should("contain", "/auth/login");
})