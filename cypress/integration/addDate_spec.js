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

it('should load camps when a state is selected', () => {
  cy.getCampSites('OK')
  cy.get('select')
  .select('OK')
  cy.get('.camp-list')
})

it('it should add a show when filled out and submitted', () => {
  cy.getCampSites('OK')
  cy.get('[type="date"]')
  .type('2021-10-12')
  cy.get('[placeholder="Venue"]')
  .type('The Cains Ballroom')
  cy.get('[placeholder="City"]')
  .type('Tulsa')
  cy.get('select')
  .select('OK')
  cy.get('.camp-list')
  .select('Buckhorn Campground Loop A')
  cy.get('.notes')
  .type('Historic ballroom - Home of Bob Wills, super fun show')
  cy.get('.submit-date')
  .click()
})

it('it should display the added show after properly submitting it', () => {
  cy.getCampSites('OK')
  cy.get('[type="date"]')
  .type('2021-10-12')
  cy.get('[placeholder="Venue"]')
  .type('The Cains Ballroom')
  cy.get('[placeholder="City"]')
  .type('Tulsa')
  cy.get('select')
  .select('OK')
  cy.get('.camp-list')
  .select('Buckhorn Campground Loop A')
  cy.get('.notes')
  .type('Historic ballroom - Home of Bob Wills, super fun show')
  cy.get('.submit-date')
  .click()
  
  cy.get('section')
  .contains('The Cains Ballroom')
  cy.get('section')
  .contains('Tulsa')
})