import {  faPaperPlane, faPhone, faVideo, faX, faXRay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../ChatboxNhap/ChatboxNhap.module.scss'
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket= io.connect('http://localhost:3000')
 
function ChatboxNhap (){
    
    const [room, setRoom ] = useState('')
    const [message, setMessage ] = useState('')
    const [messageList, setMessageList ] = useState([])
    const [name, setName ] = useState('')
    const handleSubmitMessage = async (e)=>{
        e.preventDefault(e)  
        const messageData = {
            room:room,
            name:name,
            message:message,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        }
        await socket.emit("send_message", messageData)
        setMessageList((messageList)=>[...messageList,messageData]) 
        setMessage("")
         
    }
    const handleSubmitRoom = (e)=>{
        e.preventDefault() 
        socket.emit('join_room',room)  
    }
 
    useEffect(()=>{
        socket.on("receive_message",(data)=>{ 
            setMessageList((messageList)=>[...messageList,data])  
        })
    },[socket])
    return <div className={styles.chat_room_wrapper}>

    <div className={styles.chat_room_container}>
    
    <form>
    <input placeholder="Chat room" value={room} onChange={e=>setRoom(e.target.value)} type="text" required/>
    <input placeholder="name" value={name} onChange={e=>setName(e.target.value)} type="text" required/> 
    <button onClick={e=>handleSubmitRoom(e)} type='submit'>Enter</button>
    </form> 
    
    
    <form> 
        <input placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} type="text" required />
        <button onClick={(e)=>handleSubmitMessage(e)} type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button> 
    </form>
        
    </div>
    <div className={styles.message_list}>
        {messageList?.length > 0 &&<ul>
            {
                messageList.map((item, index)=>{
                    return <li key={index}>{`${item.name}: ${item.message}`}</li>
                })
            }
        </ul>}
    </div>
    </div>
}
export default ChatboxNhap;