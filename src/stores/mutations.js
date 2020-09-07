export default {
    addUser (state, user) {
        state.users.push(user)
        localStorage.setItem('users', JSON.stringify(state.users));
    }
}