context('Create a reservation', () => {
    beforeEach(() => {
        // Preserve cookie in every test
        Cypress.Cookies.defaults({
          preserve: (cookie) => {
            return true;
          }
        })
    });
    it('Should login', () => {
        cy.visit('https://www.healthworks.eu/lessen/zeist');
        // Login procedure
        cy.get('#block-user-login > .block__title').click();
        cy.get('#edit-name').click();
        cy.get('#edit-name').type(Cypress.env('USERNAME'));
        cy.get('#edit-pass').click();
        cy.get('#edit-pass').type(Cypress.env('PASSWORD'));
        cy.get('#edit-submit--2').click();
    });
    it('Should make monday reservation', () => {
        cy.get('.view_row_block').contains('maandag').as('monday');
        cy.get('@monday').click();
        cy.get('@monday').parent().find('.node__content').as('mondayLessons')

        cy.get('@mondayLessons').filter(':contains("Low HIIT")').filter(':contains("18:00")').as('lesson')
        cy.get('@lesson').find('input[type="submit"]').as('submitButton')
        cy.get('@submitButton').should('have.value', 'Deelnemen');
        cy.get('@submitButton').click({ force: true });
    });
    it('Should make HWF Core wednesday reservation', () => {
        cy.get('.view_row_block').contains('woensdag').as('wednesday');
        cy.get('@wednesday').click();
        cy.get('@wednesday').parent().find('.node__content').as('wednesdayLessons')

        cy.get('@wednesdayLessons').filter(':contains("HWF Core Stability")').filter(':contains("20:00")').as('lesson')
        cy.get('@lesson').find('input[type="submit"]').as('submitButton')
        cy.get('@submitButton').should('have.value', 'Deelnemen');
        cy.get('@submitButton').click({ force: true });
    });
    it('Should make BodyPump wednesday reservation', () => {
        cy.get('.view_row_block').contains('woensdag').as('wednesday');
        cy.get('@wednesday').click();
        cy.get('@wednesday').parent().find('.node__content').as('wednesdayLessons')

        cy.get('@wednesdayLessons').filter(':contains("BodyPump")').filter(':contains("20:30")').as('lesson')
        cy.get('@lesson').find('input[type="submit"]').as('submitButton')
        cy.get('@submitButton').should('have.value', 'Deelnemen');
        cy.get('@submitButton').click({ force: true });
    });
    it('Should make sunday reservation', () => {
        cy.get('.view_row_block').contains('zondag').as('sunday');
        cy.get('@sunday').click();
        cy.get('@sunday').parent().find('.node__content').as('sundayLessons')

        cy.get('@sundayLessons').filter(':contains("BodyPump")').filter(':contains("10:15")').as('lesson')
        cy.get('@lesson').find('input[type="submit"]').as('submitButton')
        cy.get('@submitButton').should('have.value', 'Deelnemen');
        cy.get('@submitButton').click({ force: true });
    });
});