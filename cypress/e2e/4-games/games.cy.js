describe("Login Spec", () => {
    beforeEach(() => {
        cy.visit("/login");

        cy.get('[name="email"]').click();
        cy.get('[name="email"]').type('admin@example.com');
        cy.get('[name="password"]').type('password');
        cy.get('button.btn').click();
    })

    it('should create a new game', function () {
        cy.intercept('POST', '/games').as('createGame');

        cy.get('[name="name"]').click();
        cy.get('[name="name"]').type('Carcasonne 2' + Math.random().toString(36).substring(7));
        cy.get('[name="description"]').click();
        cy.get('[name="description"]').type('Un juego muy divertido pero en su versión 2');
        cy.get('[name="minPlayers"]').type('2');
        cy.get('[name="maxPlayers"]').type('4');
        cy.get('[name="category"]').type('strategy');
        cy.get('[name="createdBy"]').type('1');
        cy.get('div.justify-end button.btn').click();
        cy.wait('@createGame').its('response.statusCode').should('eq', 201);
        cy.get('.alert').should('contain', 'Juego creado correctamente.');
    });

    it("should display the list of games", () => {
        cy.get('section.card > .card-body').should('be.visible');
        cy.get('section.card > .card-body').should('have.length.greaterThan', 0);
    });

    it("should push notifications", () => {
        cy.get('input[placeholder="Título de notificación"]').click();
        cy.get('input[placeholder="Título de notificación"]').type('Ejemplo de titulo');
        cy.get('input[placeholder="Cuerpo (opcional)"]').click();
        cy.get('input[placeholder="Cuerpo (opcional)"]').type('Cuerpo de notificacion');
        cy.get('form.items-start button.btn').click();

        cy.get('.relative > .btn').should('be.visible');
        cy.get('.relative > .btn').click();
        cy.get('.absolute > .card-body').should('be.visible');
        cy.get('.absolute > .card-body').should('contain', 'Ejemplo de titulo');
        cy.get('.absolute > .card-body').should('contain', 'Cuerpo de notificacion');
    });

});

