import {  faPaperPlane, faPhone, faVideo, faX, faXRay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../ChatBox/ChatBox.module.scss'
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket= io.connect('http://localhost:3000')
 
function ChatBox (){
    const [room, setRoom ] = useState('')
    const [message, setMessage ] = useState('')
    const [name, setName ] = useState('')
    const [messageList, setMessageList ] = useState([])
    const messageData = {
        room:room,
        name:name,
        message:message,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()

    }
    const handleSubmitMessage = (e)=>{
        e.preventDefault(e)   
        socket.emit("send_message", messageData)
        setMessageList(prev =>[...prev, messageData])
        setMessage('')
    }
    const handleSubmitRoom = (e)=>{
        e.preventDefault()  
        socket.emit('join_room',room)
         
    }
    const handleOnchangeMessage =(e)=>{
        setMessage(e.target.value)
         
    }
    useEffect(()=>{
        socket.on('receive_message', (data)=>{
            console.log(data)
            setMessageList(prev =>[...prev, data])
        })
    },[socket])
    console.log(messageList)
    return <div className={styles.chat_room_wrapper}>
        <form>
        <input placeholder="Nhap room ID" value={room} onChange={e=>setRoom(e.target.value)} type="text" required/>
        <input placeholder="Nhap ten" value={name} onChange={e=>setName(e.target.value)} type="text" required/>
        <button onClick={e=>handleSubmitRoom(e)} type='submit'>Enter</button>
        </form>

        <div className={styles.chat_room_container}>
        <div className={styles.chat_room_header} >
        <div className={styles.chat_room_name}>Chat Room</div>
        <div className={styles.chat_room_actions}>
            <span className={styles.chat_room_actions_icon}><FontAwesomeIcon icon={faPhone} /></span>
            <span className={styles.chat_room_actions_icon}><FontAwesomeIcon icon={faVideo} /></span>
            <span className={styles.chat_room_actions_icon}><FontAwesomeIcon icon={faX} /></span>
        </div>
        </div>
        <div className={styles.chat_room_body}>
            {
                messageList?.length >0 && messageList.map((item,index)=>{
                    return (item.name===name ? <p key={index} className={styles.message_outgoing}><span className={styles.message}>{item.message}</span></p> : <p key={index} className={styles.message_incoming}><span className={styles.message}>{item.message}</span></p>)
                })
            }
            {/* <p className={styles.message_outgoing}><span className={styles.message}>Gửi đi ga gaga</span></p>
            <p className={styles.message_incoming}><span className={styles.message}>Nhận ga gaga</span></p> */}
            {/* <p className={styles.message_outgoing}><span className={styles.message}>gaga ga gaga</span></p>
            <p className={styles.message_incoming}><span className={styles.message}>gaga ga gaga</span></p>
            <p className={styles.message_outgoing}><span className={styles.message}>Trong cuộc tiếp tại Trụ sở Trung ương Đảng chiều nay, Tổng bí thư Nguyễn Phú Trọng hoan nghênh Tổng thống Hàn Quốc Yoon Suk-yeol và phu nhân thăm Việt Nam ngay sau khi hai nước nâng cấp quan hệ lên Đối tác chiến lược toàn diện vào cuối năm 2022, theo thông cáo của Ban đối ngoại Trung ương Đảng.</span></p>
            <p className={styles.message_incoming}><span className={styles.message}>gaga ga gaga</span></p>
            <p className={styles.message_outgoing}><span className={styles.message}>gaga ga gaga</span></p>
            <p className={styles.message_incoming}><span className={styles.message}>Trong cuộc tiếp tại Trụ sở Trung ương Đảng chiều nay, Tổng bí thư Nguyễn Phú Trọng hoan nghênh Tổng thống Hàn Quốc Yoon Suk-yeol và phu nhân thăm Việt Nam ngay sau khi hai nước nâng cấp quan hệ lên Đối tác chiến lược toàn diện vào cuối năm 2022, theo thông cáo của Ban đối ngoại Trung ương Đảng.</span></p>
            <p className={styles.message_incoming}><span className={styles.message}>gaga ga gaga</span></p>
            <p className={styles.message_outgoing}><span className={styles.message}>gaga ga gaga</span></p>
            <p className={styles.message_outgoing}><span className={styles.message}>Trong cuộc tiếp tại Trụ sở Trung ương Đảng chiều nay, Tổng bí thư Nguyễn Phú Trọng hoan nghênh Tổng thống Hàn Quốc Yoon Suk-yeol và phu nhân thăm Việt Nam ngay sau khi hai nước nâng cấp quan hệ lên Đối tác chiến lược toàn diện vào cuối năm 2022, theo thông cáo của Ban đối ngoại Trung ương Đảng.</span></p>
            <p className={styles.message_incoming}><span className={styles.message}>gaga ga gaga</span></p>
            <p className={styles.message_outgoing}><span className={styles.message}>gaga ga gaga</span></p>
            <p className={styles.message_outgoing}><span className={styles.message}>Trong cuộc tiếp tại Trụ sở Trung ương Đảng chiều nay, Tổng bí thư Nguyễn Phú Trọng hoan nghênh Tổng thống Hàn Quốc Yoon Suk-yeol và phu nhân thăm Việt Nam ngay sau khi hai nước nâng cấp quan hệ lên Đối tác chiến lược toàn diện vào cuối năm 2022, theo thông cáo của Ban đối ngoại Trung ương Đảng.</span></p>
            <p className={styles.message_incoming}><span className={styles.message}>gaga ga gaga</span></p>
            <p className={styles.message_outgoing}><span className={styles.message}>I love you</span></p> */}

        </div>
        <div className={styles.chat_room_input}>
           <form>
             
           <div className={styles.input_container}>
                <input value={message} onChange={(e)=>handleOnchangeMessage(e)} type="text" required />
                <button onClick={(e)=>handleSubmitMessage(e)} type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
           
           
           </form>
        </div>
    </div>
    </div>
}
export default ChatBox;