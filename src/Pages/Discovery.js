import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import Navbarcom from "../components/Navbar";
import { listCar } from "../Redux/Action/listcarAction";
import { handleFilter } from "../Redux/Action/listcarAction";
import { handleDelete } from "../Redux/Action/listcarAction";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Discovery.css"
import { Link } from "react-router-dom";


const Discovery= () => {
const dispatch = useDispatch()
const state = useSelector((rootReducer)=>rootReducer);
//console.log(state);

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



const handleAllCar = () => {
    const category = ""
    dispatch(handleFilter(category))
}

const handleSFilter = () => {
    const category = "small"
    dispatch(handleFilter(category))
}

const handleMFilter = () => {
    const category = "Medium"
    dispatch(handleFilter(category))
}

const handleLFilter = () => {
    const category = "large"
    dispatch(handleFilter(category))

}

const handleDeletes = (id) => {
    // get id from API, use this function like example bellow
    dispatch(handleDelete(id))
}


    return (
        <div>
            <div>
            <Navbarcom/>
            </div>
            <div className="discovery">
            <h1>Discovery Nih Bos</h1>
            <div className="discovery-filter">
                <div>
                    <Link to={'/add-car'}>
                    <Button variant="outline-primary">Add Car</Button>
                    </Link>
                </div>
                <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                        Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleAllCar}>All Car</Dropdown.Item>
                        <Dropdown.Item onClick={handleSFilter}>2-4 people</Dropdown.Item>
                        <Dropdown.Item onClick={handleMFilter}>4-6 people</Dropdown.Item>
                        <Dropdown.Item onClick={handleLFilter}>6-8 people</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
                </div>
            </div>
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
                                <div className="card-button">
                                    <div>
                                    <Button variant="outline-danger" onClick={() => handleDeletes(item.id)}>Delete</Button>
                                    </div>
                                    <div>
                                        <Link to={`/edit-car/${item.id}`}>
                                        <Button variant="outline-info">edit</Button>
                                        </Link>
                                    </div> 
                                    <div>
                                    <Link to={`/detail-car/${item.id}`}>
                                    <Button variant="outline-warning">Detail</Button> 
                                    </Link>
                                    </div>

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