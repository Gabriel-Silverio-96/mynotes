describe("Login page", () => {      
    it("Should show main title Login", () => {
        cy.visit("/auth/login");
        cy.get("h1").contains("Login");        
    });     

    it("Incorrect email or password", () => {
        cy.login(Cypress.env("email"), "password123", false);
        cy.contains("Incorrect email or password");
    });

    it("User unregistered", () => {
        cy.login("email-unregistered@email.com", "password123", false);
        cy.contains("Unregistered user, create an account");
    });

    it("Success login", () => {
        cy.login(Cypress.env("email"), Cypress.env("password"));
        cy.contains("Loading");
    });
})