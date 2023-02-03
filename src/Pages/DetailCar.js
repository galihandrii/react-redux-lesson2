import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { getDataEdit } from "../Redux/Action/listcarAction";
import rootReducer from "../Redux/Reducer";


const DetailCar = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const state = useSelector((rootReducer)=> rootReducer)
    console.log(state.listCar.detailCar);
    const detailData = state.listCar.detailCar

    const getDetailCar = () => {
        dispatch(getDataEdit(id))
    }

    useEffect(()=>{
        getDetailCar()
    },[])




    return (
        <div>
             <div className="cardesc-right">
            {
            Object.entries(detailData).length ? (
            <div className="car-cards">
                <div className="car-cards-img"><img src={detailData.image} alt={detailData.name}/></div>
                <div className="car-cards-name">
                    <h3>{detailData.name}</h3>
                    <p>Total:<span>Rp.{detailData.price}</span></p>
                </div>
            </div>) : <h1 className="loading">Loading....</h1>

            }
            </div>

        </div>
    )
}

export default DetailCar;