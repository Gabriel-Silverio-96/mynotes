describe("Smoke testing pages public", () => {
    it("When doing smoke testing over all page, should load them all successfully", () => {
        cy.visit("/");
        cy.contains("Get started");

        cy.visit("/auth/login");
        cy.contains("Login");

        cy.visit("/auth/create-account");
        cy.contains("Create account");

        cy.visit("/auth/forgot-password");
        cy.contains("Forgot password");    

        cy.visit("/auth/reset-password/token=123");
        cy.contains("Reset password");    

        cy.visit("/page-404");
        cy.contains("404");    
    })
})