class YourCartPage {
    constructor() {
        this.cartItem = '[class="cart_item"]'
        this.inventoryItemName = '[class="inventory_item_name"]'
        this.checkoutButton = 'button[id="checkout"]'
    }

    assertQuantityOfAddedProducts(number) {
        cy.get(this.cartItem).should('have.length', number)
        return this
    }

    veifyProductNames(products) {
        cy.get(this.inventoryItemName).then(name => {
            const filtered = name.toArray().map(el => {
                return el.innerText
            })
            const newElements = products

            expect(filtered).to.deep.equal(newElements)
        })

        return this
    }

    clickCheckoutButton() {
        cy.get(this.checkoutButton).click()
    }
}

export default new YourCartPage()