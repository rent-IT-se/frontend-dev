import React from 'react'
import "./styles.css"
import img from '../img'
function ApproveEmail() {
  return (
    <div className="wrapper0">
        <div className="imgWrap0">
            <img src={img.rentPic}className="img0"/>
        </div>
        <h1 className="tit0">Ваш email успешно активирован</h1>
            <p>Можете закрыть это окно и продолжить работу </p>
        </div>
  )
}

export default ApproveEmail