import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { handleCheckToken } from "../Redux/Action/authAction";
import rootReducer from "../Redux/Reducer";

const ProtectedRoute = () => {
const dispatch = useDispatch();
const state = useSelector((rootReducer)=>rootReducer)
//console.log(state);

useEffect(()=>{
    dispatch(handleCheckToken())
}, [state.auth.isLogin]);

//console.log('loading');
if (state.auth.loading) {
    return
} else {
    return state.auth.isLogin ? <Outlet/> : <Navigate to={'/Login'}/>
}

}

export default ProtectedRoute;