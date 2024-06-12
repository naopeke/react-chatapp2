import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { UserAuth } from "../context/AuthContext";


const PrivateRoute = ({ children }) => {
    const { currentUser } = UserAuth();


    if(!currentUser){
        return <Navigate to='/' replace={true}></Navigate>
    }


    PrivateRoute.propTypes = {
        children: PropTypes.node.isRequired,
    };


  return children;
}

export default PrivateRoute
