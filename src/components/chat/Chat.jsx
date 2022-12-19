import React, { useEffect } from 'react'
import img from '../../img'
import styles from "./chat.module.scss"
import Breadcrumbs from "../breadCrumbs/BreadCrumbs"
import { StyledSearch2 } from '../../muiStyles/MainPageStyledUi/UiElement'
import { useDispatch, useSelector } from 'react-redux'
import { getChat } from '../../redux/slices/chat'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { ChatDetail } from './ChatDetail'

const getName = (arr, myId) => +arr[0].id === +myId ? (arr[1].first_name + ' ' + arr[1].last_name) : arr[0].first_name + ' ' + arr[0].last_name

function Chat() {
    const dispatch = useDispatch();
    const {chatList: contactList, status} = useSelector(state => state.chat);
    const myId = useSelector(state => state.auth.user.user_id);
    useEffect(() => {
        dispatch(getChat({id: myId}))
    },   [dispatch])
    return (
        <div className={styles.wrap}>
           
            <p className={styles.Title}>Чат</p>
            <div className={styles.chatWrap}>
                <div className={styles.contacts}>
                    <div className={styles.header}>
                        <StyledSearch2 fullWidth placeholder='Поиск'/>
                    </div>

                    <div className={styles.scroll1}>
                        {
                            contactList.map((contact) => (
                                <Link 
                                    to={`${contact.id}`}
                                    className={styles.contactItem}>
                                    <div className={styles.contactInfo}>
                                        <div className={styles.imgWrap1}>
                                            <img src={contact.users.pictures} className={styles.profImg}></img>
                                        </div>
                                        <div className={styles.txt}>
                                            <p>{contact.users?.length > 1 ? getName(contact.users, myId) : null}</p>
                                        </div>
                                    </div>        
                                </Link>
                            ))
                        }

                        
                    </div> 

                </div>
                <Routes>
                    <Route path=":id" element={<ChatDetail />}/>
                </Routes>
                
            </div>
        </div>
    )
}

export default Chat