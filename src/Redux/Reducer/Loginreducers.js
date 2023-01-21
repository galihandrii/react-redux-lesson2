const loginState = {
    message:"nice",
}

export const loginReducer = ( state = loginState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...loginState,
                message:action.payload
            };
               
        default:
            return state;
       }
}