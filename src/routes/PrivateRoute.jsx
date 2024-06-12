import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const currentUser = true;

    if(!currentUser){
        return <Navigate to='/' replace={true}></Navigate>
    }


    PrivateRoute.propTypes = {
        children: PropTypes.node.isRequired,
    };


  return children;
}

export default PrivateRoute
