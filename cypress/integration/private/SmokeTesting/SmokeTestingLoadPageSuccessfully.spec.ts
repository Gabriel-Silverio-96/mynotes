beforeEach(() => cy.loginRequest());

describe("Smoke testing", () => {
    it("When doing smoke testing over all page, should load them all successfully", () => {
        cy.visit("/mynotes");
        cy.get("[data-cy=title-board]").should("have.length", 1);

        cy.visit("/profile");
        cy.contains("Profile");        
    })
})