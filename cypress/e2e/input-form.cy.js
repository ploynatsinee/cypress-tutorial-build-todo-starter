import { ContextExclusionPlugin } from "webpack"

describe('input form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('focuses input on load', () => {

    cy.focused()
      .should('have.class', 'new-todo')
  })

it('accept input', () => {
  const typedText = 'Buy Milk'


  cy.get('.new-todo')
     .type(typedText)
     .should('have.value', typedText)
})

  context('From submission', () => {
    it.only('Add a new todo on submit', () => {
      cy.get('.new-todo')
        .type('Buy eggs')
        .type('{enter}')
    })
  })

})