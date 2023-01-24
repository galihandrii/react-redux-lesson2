const authState = {
    message: false,
    isLogin:false,
    loading: true,
}

export const authReducers = (state = authState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...authState,
                message: action.payload
            }
        case "LOGOUT":
            return{
                ...authState,
                message: action.payload
            }
            case "CHECK_TOKEN":
                return{
                    ...authState,
                    isLogin: action.payload.isLogin,
                    loading:action.payload.loading,
                }
            
        default:
            return state;
    }
}