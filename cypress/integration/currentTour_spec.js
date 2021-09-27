beforeEach(() => {
  cy.visit('http://localhost:3000/currentTour')
})

it('should display the band-glamp logo in the nav bar', () => {
  cy.get('.logo')
})

it('should have 2 buttons to go to current tour or to add a date', () => {
  cy.get('[href="/currentTour"] > .menu-item')
  .click()
  .url().should('include', '/currentTour')
  cy.get('[href="/addDate"] > .menu-item')
  .click()
  .url().should('include', '/addDate')
})

it('should display dates upon page load', () => {
  cy.get('[href="/currentTour/01"] > section')
})