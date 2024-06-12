import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../firebase";

const SendMessage = () => {
    const [value, setValue] = useState('');
    console.log(value);
    const {currentUser} = UserAuth();

    const handleSendMessage = async  (event) => {
        event.preventDefault();

        if (value.trim() === ''){
          alert('Enter valid message');
          return;
        }
        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"),{
              text: value,
              name: displayName,
              avatar: photoURL,
              createdAt: serverTimestamp(),
              uid
            });
        } catch (err) {
          console.log(err);
        }
        console.log('handle', value);
        setValue('');
    }

  return (
    <div>
      <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
        <form onSubmit={handleSendMessage} className="containerWrap flex px-10">
            <input value={value} onChange={event => setValue(event.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
            <button type="submit" className="btn btn-neutral rounded-l-none">Send</button>
        </form>
      </div>
    </div>
  )
}

export default SendMessage
