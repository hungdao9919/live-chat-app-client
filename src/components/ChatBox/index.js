import {  faPaperPlane, faPhone, faVideo, faX, faXRay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../ChatBox/ChatBox.module.scss'

 
function ChatBox (){
    return <div className={styles.chat_room_wrapper}>
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
            <p className={styles.message_outgoing}><span className={styles.message}>Gửi đi ga gaga</span></p>
            <p className={styles.message_incoming}><span className={styles.message}>Nhận ga gaga</span></p>
            <p className={styles.message_outgoing}><span className={styles.message}>gaga ga gaga</span></p>
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
            <p className={styles.message_outgoing}><span className={styles.message}>I love you</span></p>

        </div>
        <div className={styles.chat_room_input}>
           <form>
            

           <div className={styles.input_container}>
                <input type="text" required />
                <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
           
           
           </form>
        </div>
    </div>
    </div>
}
export default ChatBox;