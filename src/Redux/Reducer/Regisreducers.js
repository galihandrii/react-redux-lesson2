const initialState = {
    message:"",
}

export const regisReducer = ( state = initialState, action) => {
    switch (action.type) {
        case "REGIS":
            return {
                ...initialState,
                message:action.payload
            };

        default:
            return state;
    }
}