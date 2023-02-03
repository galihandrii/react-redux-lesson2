import axios from "axios";


export const listCar = (config) => (dispatch) => {
    console.log(config);
    axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car",config)
    .then((res)=>{
        //console.log(res.data.cars)
        dispatch({
            type:"LISTCAR",
            payload: res.data.cars,
        })
    })
    .catch((err)=> console.log(err.message));
}

export const handleFilter = (category) => dispatch => {
    const token = localStorage.getItem('token')
    const config = {
        headers : {
            access_token : token,
        },
    }

    axios.get(`https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=${category}`, config)
    .then((res)=>{
        //console.log(res.data.cars);
        dispatch({
            type:'FILTER',
            payload: res.data.cars
        })
    })
    .catch((err)=>console.log(err.message));
}

export const handleDelete = (id) => dispatch => {
    const token = localStorage.getItem('token')
    const config = {
        headers : {
            access_token : token,
        }
    }

    axios.delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,config)
    .then((res)=>{
        console.log(res.data.name);
        dispatch({
            type:'DELETE',
            payload:res.data.name,
        })
        alert(res.data.name)
        listCar(config)
       

    })
    .catch((err)=>console.log(err.message));

}

export const handleEditCar = (id, formdata) => dispatch => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            access_token: token,
        },
    }
    axios
        .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formdata, config)
        .then((ress) => {
            console.log(ress.statusText);
            dispatch({
                type: "EDIT_CAR",
                payload: ress.statusText,
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

export const handleAddCar = (formData) => dispatch => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            access_token: token,
        },
    }
    axios
        .post("https://bootcamp-rent-cars.herokuapp.com/admin/car",formData, config)
        .then((res) => {
            console.log(res)
            dispatch({
                type: "ADD_CAR",
                payload: res.statusText,
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

 export const getDataEdit = (id) => dispatch => {
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            access_token : token
        },
    }

    axios.get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,config)
    .then((res)=>{
        console.log(res.data)
        dispatch({
            type:'GET_EDIT_CAR',
            payload:res.data.name
        })
    })
    .catch((err)=>console.log(err.message))

}
