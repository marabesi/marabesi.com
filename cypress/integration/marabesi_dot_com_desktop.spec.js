describe('marabesi.com - desktop', function () {

  it('menu has seven items', function () {
    cy.visit('/')
    cy.get('#menu-list li').should('be.visible')
  })
})