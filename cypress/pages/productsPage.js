class ProductsPage {
    constructor() {
        this.inventoryItemButton = productName => `[class="inventory_item"]:contains(${productName}) button`
    }

    addSingleProductToBasket(productName) {
        if (productName.length === 1) {
            cy.get(this.inventoryItemButton(productName)).click()
        } else {
            productName.forEach(product =>
                cy.get(this.inventoryItemButton(product)).click())
        }
    }
}

export default new ProductsPage()