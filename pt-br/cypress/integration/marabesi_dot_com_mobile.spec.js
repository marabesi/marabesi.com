describe('marabesi.com - desktop', function () {

  beforeEach(() => {
    cy.viewport('iphone-6')
  })

  it('menu should be hidden', function () {
    cy.visit('/')
    cy.get('#menu-list li').should('not.be.visible')
  })

  it('show ten posts by default', function () {
    cy.visit('/')
    cy.get('.page-container .post-content').should('have.length', 10)
  })
})