describe("Sign In", () => {
  it("should sign in", () => {
    cy.visit("/sign-in");
    cy.log(Cypress.env("VITE_API_URL"));
    cy.get('[data-cy="identifier"]').type("victor@capyba.com");
    cy.get('[data-cy="password"]').type("Test@123");
    cy.get('[data-cy="submit-button"]').click();

    cy.get('a[href="/my-posts"]').should("exist");
  });

  it("should not sign in", () => {
    cy.visit("/sign-in");
    cy.getDataCy("identifier").type("victor@gmai.com");
    cy.getDataCy("password").type("Test@123");
    cy.getDataCy("submit-button").click();

    cy.wait(1000);

    cy.get('a[href="/my-posts"]').should("not.exist");
  });
});
