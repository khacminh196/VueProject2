import jsonData from './users.json'

let dataUsers = JSON.parse(localStorage.getItem('users')) ?? jsonData.users

export let state = {
    users : dataUsers
}