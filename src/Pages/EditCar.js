//import './EditCar.css'
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getDataEdit, handleEditCar } from "../Redux/Action/listcarAction"
import "./EditCar.css"

const EditCar = () => {
 const [name, setName] = useState("")
 const [price, setPrice] = useState("")
 const [image, setImage] = useState(null)
 const [category, setCategory] = useState("")

 const handleName = (e) => {
    setName(e.target.value)
}

const handlePrice = (e) => {
    setPrice(e.target.value)
}

const handleImage = (e) => {
    setImage(e.target.files[0])
}

const handleCategory = (e) => {
    setCategory(e.target.value)
}

const state = useSelector((rootReducers) => rootReducers)
    //console.log(state)

const dispatch = useDispatch()
const {id} = useParams()
const navigate = useNavigate()

const onHandleEditCar = () => {
    const formData = new FormData();
    formData.append("name",name)
    formData.append("category",category)
    formData.append("price",price)
    formData.append("image",image)

    dispatch(handleEditCar(id, formData))
    navigate('/Discovery')
}

useEffect(()=>{
    dispatch(getDataEdit(id))
},[])

    return(
        <div className="editcars">
        <h2>Edit Car</h2>
        <h2>ini id {id}</h2>    
        <div><input onChange={handleName}  value={name} /></div>
        <div><input onChange={handlePrice}  value={price}/></div>
        <div><input onChange={handleImage} type="file"/></div>
        <div><input onChange={handleCategory} placeholder="kategori"/></div>
        <div><Link to="/Discovery"><button>Cancel</button></Link></div>
        <div><button onClick={onHandleEditCar}>Save</button></div>
    </div>
    )
}

export default EditCar