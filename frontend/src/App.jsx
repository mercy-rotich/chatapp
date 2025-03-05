import React, { useEffect, useState } from 'react';
import {  io } from "socket.io-client";

const App = () => {
  const [message,setMessage]= useState("");
  const [receiveMessage, setReceiveMessage]=useState("");
  const socket=io.connect(`http://localhost:4000`);
  const sendMessage =()=>{
    socket.emit("send_message" ,{ message})
  };
 useEffect(()=>{
  socket.on("receive_message", (data)=>{
    setReceiveMessage(data.message);
  });
 },[]);
   
    return(
    <div>
    <input type="text" placeholder="type message" onChange={(e)=>setMessage(e.target.value)}
    />
    <button onClick={sendMessage}>Send message</button> 
    <div>
      <h4>{receiveMessage}</h4>
      
    </div>
    </div>
   
  );
};

export default App