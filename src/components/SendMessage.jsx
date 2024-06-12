import { useState } from "react";

const SendMessage = () => {
    const [value, setValue] = useState('');
    console.log(value);

    const handleSendMessage = (event) => {
        event.preventDefault();
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
