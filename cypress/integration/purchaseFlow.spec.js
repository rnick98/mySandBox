import Products from "../pages/productsPage"
import Header from '../pages/mainPage/header'
import YourCart from '../pages/yourCartPage'
import Checkout from '../pages/checkoutPage'

const user = {
    name: `${Cypress.env('userName')}`,
    password: `${Cypress.env('password')}`
}

const checkoutInfo = {
    firstName: 'first_name',
    lastName: 'last_name',
    zipCode: '0200'
}
const productName = ['Sauce Labs Bike Light', 'Sauce Labs Onesie']

describe('Purchase Flow', () => {
    beforeEach(() => {
        cy.login(user)
    })

    it('User is able to purchase product(s)', () => {
        Products.addSingleProductToBasket(productName)

        Header.assertBasketQuantity(productName.length)
            .navigateToBasket()

        YourCart.assertQuantityOfAddedProducts(productName.length)
            .veifyProductNames(productName)
            .clickCheckoutButton()

        Checkout.fillCheckoutForm(checkoutInfo)
            .calculateTotal()
            .finishCheckoutOverview()
            .assertCheckoutIsComplete()
    })
})