import styles from './chat.module.scss';
import img from '../../img';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { addMessage, getChatById } from '../../redux/slices/chat';
import { useDispatch, useSelector } from 'react-redux';
import { StyledSearch2 } from '../../muiStyles/MainPageStyledUi/UiElement';
const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.access) {
      console.log(user.access)
    }
export const ChatDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    let myChat = useSelector(state => state.chat.chatList).find(i => +i.id === +id);
    const status = useSelector(state=>state.chat.status);
    const chatBrowser = useRef(null);

    const [text, setText] = useState('');
    const [socket, setSocket] = useState(new WebSocket(`ws://192.168.0.136:8000/ws/chat/${id}/?token=${user.access}`));
    // const [socket, setSocket] = useState(io(`wss://192.168.0.136:8000/ws/chat/${id}`));
    // const socket = new io(`wss://192.168.0.136:8000/ws/chat/${id}/`);
    
    const handleSubmitMessage = (e) => {
        e.preventDefault()
        if (text.length === 0) return;
        socket.send(JSON.stringify({message: text}));
        console.log(text);
        setText('')
    }

    useEffect(() => {
        dispatch(getChatById(id));
        // console.log(`${process.env.REACT_APP_SOCKET_API}ws/chat/${id}`)
        // // const socket = io(`wss://shark-app-rycni.ondigitalocean.app/ws/chat/${id}`)
    }, [id])

    useEffect(() => {
        if (socket) {
            socket.onopen = (e) => console.log("Succesfully Connected", e);
            socket.onmessage = ({data}) => {
                const message = JSON.parse(data);
                console.log('message', message)
                switch(message.type) {
                    case "chat_message": {
                        dispatch(addMessage({message, id}));
                        chatBrowser.current.scrollY = -9999;
                        break;
                    }
                }
            }
            socket.onclose = () => {
                setTimeout(function() {
                    console.log("Reconnecting...");
                    setSocket(new WebSocket(`ws://192.168.0.136:8000/ws/chat/${id}/`))
                }, 2000);
            }
            
        }
        return () => {
            setSocket(null);
        }

    }, [socket])
    return(
        <>
        {
            myChat ?
            <div className={styles.chats}>
                        <div className={styles.header}>
                            <div className={styles.contactInfo}>
                                    <div className={styles.imgWrap1}>
                                        <img src={myChat.users[1].first_name} className={styles.profImg}></img>
                                    </div>
                                    <div className={styles.txt}>
                                        <p>{myChat.users[1].first_name+" "+myChat.users[1].last_name }</p>
                                        <p className={styles.lastTxt}>Был(а) в сети 10.11.2022</p>
                                    </div>
                                </div>
                        </div>

                        
                        <div className={styles.Wrap2} >
                            <div ref={chatBrowser} className={styles.chatScroll}>
                              
                                {myChat.message&&  myChat.message.map((item) => (
                                <div className={styles.message}>
                                    <div className={styles.imgWrap1}>
                                        <img src={item.user.picture?item.user.picture:img.defaultP} className={styles.profImg}></img>
                                    </div>
                                    <div className={styles.messagesWrap}>
                                       
                                                <div className={styles.messageContainer}>
                                                    <p className={styles.messageTxt}>{item.message || item.content}</p>
                                                    {/* <p className={styles.messageTime}>00:27</p> */}
                                                </div>
                                            
                                      
                                    </div>
                                </div>
                                ))
                            }
                            </div>
                            <div className={styles.inputPart}>
                                <form
                                    onSubmit={handleSubmitMessage} 
                                    className={styles.postMessage}>
                                    <StyledSearch2 
                                        size='small' 
                                        placeholder='Сообщение...' 
                                        value={text}
                                        onChange={(e)=>setText(e.target.value)}
                                        fullWidth/>
                                    <button type='submit' className={styles.SubmitBtn}><img src={img.up}></img></button>
                                </form>
                            </div>
                        </div>


                    </div>
                : <>
                    {
                        status === 'Loading chat' ?
                        <h1>Loading</h1>
                        : <h1>Page could't find</h1>
                    }
                </>
        }
        </>
    )
}