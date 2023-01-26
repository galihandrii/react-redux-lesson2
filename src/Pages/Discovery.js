import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbarcom from "../components/Navbar";
import { listCar } from "../Redux/Action/listcarAction";
import rootReducer from "../Redux/Reducer";
import "./Discovery.css"


const Discovery= () => {
const dispatch = useDispatch()
const state = useSelector((rootReducer)=>rootReducer);
console.log(state);

const getCar = () => {
    const token = localStorage.getItem('token')
    
    const config = {
        headers : {
            access_token: token,
        }
    }
    dispatch(listCar(config));
}

useEffect(()=>{
    getCar()
},[])



    return (
        <div>
            <div>
            <Navbarcom/>
            <h1>Discovery Nih Bos</h1>
            </div>
            <div className="cards-list">
            {
                     state.listCar.carsData.length && state.listCar.carsData.map(function(item){
                        return (
                            
                                <div className="card-cars">
                                <div className="card-cars-img"><img src={item.image}/></div>
                                <div className="card-cars-desc">
                                    <h3>{item.name}</h3>
                                    <h4>{item.price}</h4>
                                    <p>{item.category}</p>
                                </div>
                            </div>
                            
                            
                        )
                    })
                }
            </div>
           
        </div>
    )
}

export default Discovery;