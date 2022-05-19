const envUrl = Cypress.env('apiUrl')

class UserController {
    getUsers() {
        return cy.request({
            url: `${envUrl}/public/v2/users`,
            method: 'GET',
            headers: {
                Accept: 'application/json',
                ContentType: 'application/json',
                Authorization: `${Cypress.env('apiToken')}`,
            }
        })
            .should(response => {
                expect(response.status).to.eq(200, 'Get Users')
            })
    }

    createUser(user) {
        return cy.request({
            url: `${envUrl}/public/v2/users`,
            method: 'POST',
            headers: {
                Accept: 'application/json',
                ContentType: 'application/json',
                Authorization: `${Cypress.env('apiToken')}`,
            },
            body: {
                name: `${user.name}`,
                gender: "male",
                email: `${user.email}`,
                status: "active"
            },
        })
            .should(response => {
                expect(response.status).to.eq(201, 'User is Created')
            })
    }

    deleteUser(id) {
        return cy.request({
            url: `${envUrl}/public/v2/users/${id}`,
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                ContentType: 'application/json',
                Authorization: `${Cypress.env('apiToken')}`,
            }
        })
            .should(response => {
                expect(response.status).to.eq(204, `User ${id} was Deleted`)
            })
    }
}

export default new UserController()