import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddCar } from "../Redux/Action/listcarAction";
import { useNavigate } from "react-router-dom";

const AddCar = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(rootReducers => rootReducers)

    console.log(state)

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

    const onHandleAddCar = () => {
        const formData = new FormData();
        formData.append("name",name)
        formData.append("category",category)
        formData.append("price",price)
        formData.append("image",image)

        dispatch(handleAddCar(formData))
    }

    const handleRedirect = () => {
        setTimeout(() => {
            if(state.listCar.message !== ""){
                navigate("/Discovery")
            }
        }, 1000);
    }

    useEffect(() => {
        if(state.listCar.message !== ""){
            alert(state.listCar.message)
        }
        handleRedirect()
        // eslint-disable-next-line
    }, [state.listCar.message])
    return (  
        <div>
            <div>
                <div>
                    <p>Add New Car</p>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Nama/Tipe Mobil*</p>
                        </div>
                        <div>
                            <input onChange={handleName} type="text"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Harga*</p>
                        </div>
                        <div>
                            <input onChange={handlePrice} type="number"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Foto*</p>
                        </div>
                        <div>
                            <input onChange={handleImage} type="file"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Kategori*</p>
                        </div>
                        <div>
                            <select onChange={handleCategory}>
                                <option value="small">
                                    2- 4 orang
                                </option>
                                <option value="Medium">
                                    4 -6 orang
                                </option>
                                <option value="large">
                                    6-8 orang
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button onClick={onHandleAddCar}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AddCar;