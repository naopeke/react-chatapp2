import { UserAuth } from "../context/AuthContext"

const Navbar = () => {

  const {currentUser, logout} = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
        <div className="navbar bg-neutral text-neutral-content">
            <div className="containerWrap flex justify-between">
                <button className="btn btn-ghost text-xl">daisyUI</button>
                {currentUser ? <button onClick={handleLogout} className="btn btn-ghost text-md">Logout</button> : ''}
            </div>
        </div>
    </>
  )
}

export default Navbar
