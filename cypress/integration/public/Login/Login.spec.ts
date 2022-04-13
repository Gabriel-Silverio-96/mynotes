describe("Login page", () => {      
    it("Should show main title Login", () => {
        cy.visit("/auth/login");
        cy.get("h1").contains("Login");        
    });     

    it("Incorrect email or password", () => {
        cy.login("xuxu@mozej.com", "123456789", false);
        cy.contains("Incorrect email or password");
    });

    it("User unregistered", () => {
        cy.login("xuxu1@mozej.com", "123456789", false);
        cy.contains("Unregistered user, create an account");
    });

    it("Success login", () => {
        cy.login("xuxu@mozej.com", "12345678")
        cy.contains("Loading");
    });
})