export default () => {
  const users = {}
  return {
    userSignUp: (id, password) => {
      if (users[id]) {
        return Promise.reject(new Error())
      }
      users[id] = password
      return Promise.resolve({id: id})
    },
    userSignIn: (id, password) => {
      if (users[id] !== password) { return Promise.reject(new Error()) }
      return Promise.resolve({id: id})
    }
  }
}
