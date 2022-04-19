Cypress.Commands.add("login",
    (email = Cypress.env("email"), password = Cypress.env("password"), success = true) => {
        cy.visit("/auth/login");

        cy.get("[data-cy=input-email]").type(email);
        cy.get("[data-cy=input-password]").type(password);

        cy.get("[data-cy=button-login]").click();

        if (success) {
            cy.contains("Success");
            cy.url().should("contain", "/mynotes");
            return;
        }
        cy.url().should("contain", "/auth/login");
    });    
    
Cypress.Commands.add("loginRequest", () => {    
    let storageToken;
    let userData;

    const dataAuthenticate = {
        email: Cypress.env("email"),
        password: Cypress.env("password"),
    };
    cy.request("POST", "http://localhost:4041/auth/login", dataAuthenticate)
        .its("body")
        .then(({ token, user_data }) => {
            storageToken = token
            userData = user_data
        })

    cy.visit("/mynotes", {
        onBeforeLoad(win) {
            win.localStorage.setItem("token", storageToken);
            win.localStorage.setItem("userData", JSON.stringify(userData));
        }
    })
})

Cypress.Commands.add("deleteAllNotes", () => {
    cy.get("[data-cy=button-delete-all-notes]").then(jquery => {
        const [button] = jquery as any;
        if (button.disabled === false) {
            cy.get("[data-cy=button-delete-all-notes]").click();
            cy.contains("Yes").click();
            cy.get("[data-cy=note-card]").should("have.length", 0);
        }
    });
});