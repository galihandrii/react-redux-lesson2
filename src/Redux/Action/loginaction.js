import axios from "axios"


export const loginAction = (payload) => dispatch => {
    axios
        .post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/login", payload)
        .then((ress) => {
            dispatch({
                type: "LOGIN",
                payload: ress.data.email
            })
            console.log(ress)
            localStorage.setItem("token", ress.data.access_token)
            //window.location.reload(false)
        })
        .catch((err) => console.log(err.message))
}