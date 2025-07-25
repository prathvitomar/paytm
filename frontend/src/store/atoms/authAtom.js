export const authState = atom({
    key : "authState",
    default : {
        isAuthenticated : false,
        user : null,
        loading : true
    }
})