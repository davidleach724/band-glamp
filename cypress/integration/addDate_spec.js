beforeEach(() => {
  cy.visit('http://localhost:3000/addDate')
})

it('should load a default picture upon load', () => {
  cy.get('.tent')
})

it('should have inputs to enter gig details' ,() => {
  cy.get('[type="date"]')
  cy.get('[placeholder="Venue"]')
  cy.get('[placeholder="City"]')
  cy.get('select')
  cy.get('.notes')
})