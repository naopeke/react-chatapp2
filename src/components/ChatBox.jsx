import Message from "./Message"

const ChatBox = () => {
    const messages = [{
        id:1,
        text:'hi',
        name: 'Nao'
    },
{
    id:2,
    text:'hoy',
    name:'Nano'
}]

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
