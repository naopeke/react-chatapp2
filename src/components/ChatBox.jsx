import Message from "./Message"
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";



const ChatBox = () => {
  const [messages, setMessages] = useState([]);

useEffect(() => {

  const q = query(collection(db, "messages"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ ...doc.data(), id: doc.id });
      console.log('chatbox', { ...doc.data(), id: doc.id });
  });
  console.log(messages);
  setMessages(messages);
});
  return () => unsubscribe;
}, []);

  return (
    <div>
      <div className="pb-44 pt-20 containerWrap">
        {messages.map(message =>(
            <Message key={message.id} message={message}/>
        ))}
      </div>
    </div>
  )
}

export default ChatBox
