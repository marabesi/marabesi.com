describe('marabesi.com - features', function () {
  it('assert that <title> is correct', function () {
    cy.visit('/')
    cy.title().should('include', 'Marabesi')
  })

  it('show ten posts by default', function () {
    cy.visit('/')
    cy.get('.page-container .post-content').should('have.length', 10)
  })

  it('should show up fiendly message when searching for something that does not exists', () => {
    cy.visit('/')
    cy.get('#search-input').type('post does not exists');
    cy.get('#results-container').should('have.text', 'No results found 😞')
  })

  const searchProvider = [
    { type: 'PHP import checker - VScode extension to support PHP developers', expected: 1 },
    { type: 'php import checker - vscode extension to support php developers', expected: 1 },
    { type: 'PHP IMPORT CHECKER - VSCODE EXTENSION TO SUPPORT PHP DEVELOPERS', expected: 1 },
    { type: 'pHp iMpOrT ChEcKeR - VsCoDe eXtEnSiOn tO SuPpOrT PhP DeVeLoPeRs', expected: 1 },
  ]

  for (const testCase of searchProvider) {
    it(`should search by post title - ${testCase.type}`, () => {
      cy.visit('/')
      cy.get('#search-input').type(testCase.type);
      cy.get('#results-container > li').should('have.length', testCase.expected)
    })
  }
})