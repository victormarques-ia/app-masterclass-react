describe("Sign In", () => {
  it("should sign in", () => {
    cy.visit("/sign-in");

    cy.get('[data-cy="email"]').type("victor@capyba.com");
    cy.get('[data-cy="password"]').type("Test@123");
    cy.get('[data-cy="submit-button"]').click();

    cy.get('a[href="/home/my-posts"]').should("exist");
  });

  it("should not sign in", () => {
    cy.visit("/sign-in");
    cy.getDataCy("email").type("victor@gmai.com");
    cy.getDataCy("password").type("Test@123");
    cy.getDataCy("submit-button").click();

    cy.wait(1000);

    cy.get('a[href="/home/my-posts"]').should("not.exist");
  });
});
