import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";

//ReactのコンテキストAPIを使用して、アプリケーション全体で認証情報を共有するためのAuthContextとそのプロバイダAuthProviderを作成


//create context
//createContextを使って新しいコンテキストを作成。これにより、Reactコンポーネントツリー全体で状態や関数を共有できる。
const AuthContext = createContext();


//provider context
//AuthProviderは、コンテキストプロバイダを提供するコンポーネント。childrenプロパティは、このプロバイダ内でラップされる全ての子コンポーネント。
export const AuthProvider = ({ children }) => {

    AuthProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // signin with google
    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }


    // signout 
    const logout = () => signOut(auth);


    //valueオブジェクトにはcurrentUserとその更新関数setCurrentUserが含まれる。AuthContextを利用するコンポーネントは、現在のユーザー情報にアクセスし更新。
    const value = {
        currentUser,
        setCurrentUser,
        signinWithGoogle,
        logout
    }

    // set currentUser
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    return(
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}