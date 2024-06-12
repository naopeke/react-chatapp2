//rafce
import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const { currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser);

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(currentUser){
      navigate('/chat');
    }
  }, [currentUser, navigate])


  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Chit Chat Corner</h1>
            <p className="py-6">
                Chat with your friends and family from anywhere in the world.
                Make connections in one shared room!!
            </p>
            <button onClick={handleLogin} className="btn btn-neutral uppercase">log in with google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
