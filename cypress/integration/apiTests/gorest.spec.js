import RequestApi from '../../support/api/requsts'

const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()

const user = {
    name: `testname${id}`,
    gender: "male",
    email: `email${id}@15ce.com`,
    status: "active"
}

describe('Go Rest Users', () => {
    it('Create User', () => {
        RequestApi.createUser(user)
    })

    it('Delete User', () => {
        RequestApi.deleteUser(user)
    })
})