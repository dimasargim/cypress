describe('Add Card Scenario', () => {
    it('Success Add to cart', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      //cy.get('.shopping_cart_badge').should('be.visible')
    })

})