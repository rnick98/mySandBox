class Header {
    constructor() {
        this.basket = '[class="shopping_cart_link"]'
        this.shoppingCartBadge = '[class="shopping_cart_badge"]'
    }

    /**
     * Assertion shows quantity
     * @param {number} quantity - number of added products
     */
    assertBasketQuantity(quantity) {
        cy.get(this.shoppingCartBadge).should('have.text', quantity)
        return this
    }

    navigateToBasket() {
        cy.get(this.basket).click()
    }
}

export default new Header()