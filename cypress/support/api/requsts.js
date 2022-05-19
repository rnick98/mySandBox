import UserController from "./controllers/userController"

class RequestApi {
    createUser(user) {
      UserController.createUser(user)  
    }

    deleteUser(user) {
      UserController.getUsers(user).then(response => {
        const userId = response.body.find(req => req.name === user.name).id

        UserController.deleteUser(userId)
      })
    }
}

export default new RequestApi()