declare namespace Cypress {
    interface Chainable {
        /**
         * @example cy.login(email: string, password: string, success?: boolean)
         */
        login(email: string, password: string, success?: boolean): void;
    }
}