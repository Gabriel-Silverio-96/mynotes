beforeEach(() => cy.loginRequest());

describe("Mynotes page", () => {    
    it("Create new note and edit note", () => {
        cy.deleteAllNotes();

        cy.get("[data-cy=button-new-note]").click();
        cy.get("[id=title_note]").type("Cypress title");
        cy.get("[id=observation]").type("Cypress observation");
        cy.contains("Save").click();

        cy.contains("Note created successfully");
        cy.get("[data-cy=note-card]").should("have.length", 1);
        
        cy.get("[data-cy=button-edit-note]").wait(1000).click();
        cy.get("[id=title_note]").type(" edit");
        cy.get("[name=observation]").type(" edit");  
        cy.contains("Save").click();

        cy.contains("Note edited successfully");
        cy.contains("Cypress observation edit");
    }); 
})