class CheckoutPage {
    constructor() {
        this.firstNameInput = '[data-test="firstName"]'
        this.lastNameInput = '[data-test="lastName"]'
        this.postalCodeInput = '[data-test="postalCode"]'
        this.continueButton = '[data-test="continue"]'
        this.finishButton = 'button[id="finish"]'
        this.headerCheckoutTitle = '[class="header_secondary_container"] span'
        this.itemPrice = '[class="inventory_item_price"]'
        this.summaryTotalLabel = '[class="summary_total_label"]'
    }

    fillCheckoutForm(checkoutInfo) {
        cy.get(this.firstNameInput).type(checkoutInfo.firstName)
        cy.get(this.lastNameInput).type(checkoutInfo.lastName)
        cy.get(this.postalCodeInput).type(checkoutInfo.zipCode)
        cy.get(this.continueButton).click()
        return this
    }

    finishCheckoutOverview() {
        cy.get(this.finishButton).click()
        return this
    }

    assertCheckoutIsComplete() {
        cy.get(this.headerCheckoutTitle).should('have.text', 'Checkout: Complete!')
    }

    calculateTotal() {
        cy.get(this.itemPrice)
            .then(elem => {
                cy.get(this.summaryTotalLabel).then(summaryTotalLabel => {
                    let str
                    const summaryLabel = summaryTotalLabel.toArray().map(el => {
                        return str = Number(el.innerText.replace(/[^0-9,.]/g, ' '));
                    })

                    const filtered = elem.toArray().map(el => {
                        return str = Number(el.innerText.replace(/[^0-9,.]/g, ' '));
                    })

                    function itemsSum(filtered) {
                        let sum = 0;
                        for (var i = 0; i < filtered.length; i++) {
                            sum += filtered[i];
                        }
                        return sum
                    }

                    const itemTotal = itemsSum(filtered);
                    const percentage = 8;
                    let total = itemTotal + (itemTotal / 100 * percentage);
                    total = Number(total.toFixed(2))

                        expect(total).to.equal(summaryLabel[0])
                })
            })
        return this
    }
}

export default new CheckoutPage()