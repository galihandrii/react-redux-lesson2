const loginState = {
    message:"",
}

export const regisReducer = ( state = loginState, action) => {
    switch (action.type) {
        case "REGIS":
            return {
                ...loginState,
                message:action.payload
            };

        default:
            return state;
    }
}