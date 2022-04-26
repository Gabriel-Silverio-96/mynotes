beforeEach(() => cy.loginRequest());   

describe("Mynotes page", () => {
    it("Create new note and delete note", () => {    
        cy.deleteAllNotes();

        cy.get("[data-cy=button-new-note]").click();
        cy.get("[id=title_note]").type("Cypress title delete");
        cy.get("[id=observation]").type("Cypress observation delete");
        cy.contains("Save").click();

        cy.contains("Note created successfully");
        cy.get("[data-cy=note-card]").should("have.length", 1);

        cy.get("[data-testid=button-open-dialog-delete-this-note]").click();
        cy.contains("Yes").click();

        cy.contains("Note deleted");
        cy.get("[data-cy=note-card]").should("have.length", 0);
    });    
})