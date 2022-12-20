const AuthUser = () => {
    var user = localStorage.getItem('user')
    if(user !== undefined && user !== null && user !== '') {
        return user
    }
    return false
}
export const PutUser = (data) => {
    return localStorage.setItem('user',data)
}

export default AuthUser;