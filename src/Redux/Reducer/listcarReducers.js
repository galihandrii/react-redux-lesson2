const initialState = {
    carsData : [] ,
    carData : {},
}

export const listcarReducer = (state = initialState,action) => {
switch (action.type) {
    case 'LISTCAR':
        return{
            ...initialState,
            carsData : action.payload,
        }
    case 'GET_SINGLE_CAR':
        return {
            ...initialState,
            carData:action.payload,
        }

    default:
        return state;
}
}