import Message from "./Message"
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState, useRef } from "react";



const ChatBox = () => {
  //messagesEndRefは、チャットボックスの最後のメッセージの位置を指すための参照。useRefを使って、特定のDOM要素への参照を保持。
  const messagesEndRef = useRef();
 
  const [messages, setMessages] = useState([]);

  //scrollToBottom関数は、messagesEndRefに対応するDOM要素がスクロールビューにスムーズに入るようにする。
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behaivor:'smooth'})
  };

  //messagesが更新されるたびにscrollToBottomを呼び出す。[messages]という依存配列を渡すことで、messagesが変更されるたびにscrollToBottomが実行される
  useEffect(scrollToBottom, [messages]);

useEffect(() => {

  const q = query(
    collection(db, "messages"),
    orderBy('createdAt'),
    limit (100),
  );
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
        <div ref={messagesEndRef}></div>
      </div>
    </div>
  )
}

export default ChatBox
