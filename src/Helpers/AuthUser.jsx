const AuthUser = () => {
    var user = localStorage.getItem('user')
    if(user !== undefined && user !== null && user !== '') {
        return JSON.parse(user)
    }
    return false
}
export const PutUser = (data) => {
    return localStorage.setItem('user',JSON.stringify(data))
}

export default AuthUser;