describe("Login Spec", () => {
    beforeEach(() => {
        cy.visit("/login");
    })

    it("should display the login form", () => {
        cy.get("form").should("be.visible");
        cy.get("input[name=email]").should("be.visible");
        cy.get("input[name=password]").should("be.visible");
        cy.get("button[type=submit]").should("be.visible");
    })

    it("should redirect to the dashboard on successful login", () => {
        cy.get("input[name=email]").type("admin@example.com");
        cy.get("input[name=password]").type("password");
        cy.get("button[type=submit]").click();
        cy.url().should("include", "/feed");
    });
});

