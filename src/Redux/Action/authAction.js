import axios from "axios"


export const handleLoginAction = (payload) => dispatch => {
    axios
        .post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/login", payload)
        .then((ress) => {
            dispatch({
                type: "LOGIN",
                payload: true,
            })
            console.log(ress)
            localStorage.setItem("token", ress.data.access_token)
            //window.location.reload(false)
        })
        .catch((err) => console.log(err.message))
}

export const handleLogout = () => dispatch => {
    localStorage.removeItem("token")
    window.location.reload(false)
    dispatch({
        type: "LOGOUT",
        payload: false
    })
}

export const handleCheckToken = () => dispatch => {
    const token = localStorage.getItem('token')
    if (!token){
        dispatch({
            type:"CHECK_TOKEN",
            payload:{
                isLogin:false,
                loading:false,
            },
        })
    } else {
        dispatch({
            type:"CHECK_TOKEN",
            payload:{
                isLogin:true,
                loading:false,
            },
        })
    }
}
