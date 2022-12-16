import React from 'react';
import Button from './Button';
import profile2 from '../../images/profile2.png'
import './main.css'
const Main = ({ str }) => {
    const arr = ["Clinic", "Test", "Surgery", "Medicine"]
    const MONTH = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date = new Date()
    const day = date.getDate();
    const monthIdx = date.getMonth();
    const month = MONTH[monthIdx]
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes()
    let shift = ''
    if (hours >= 12) {
        hours = hours % 12;
        shift = "PM";
    } else {
        shift = "AM";
    }
    return (
        <>
            <div className='main-container'>
                <div>
                    <Button arr={arr} />
                    <div className='img-date'>
                        <img src={profile2} alt="" className='img' />
                        <div className='content'>
                            <div className='div1'>{day} {month} {year} {hours}.{minutes} {shift}</div>
                            <div className='div2'>Appointment With Doctor Arun</div>
                            <div className='div3'>Doctor World Clinic</div>
                            {str ? <div style={{ marginTop: "6px",fontWeight:"600" }}>{str}</div> : ""}
                        </div>
                    </div>
                    <div className='main-bottom-button-container'>
                        <button className='bottom-button color btn1'>RESCHEDULE</button>
                        <button className='bottom-button color btn2'>CANCEL</button>
                        <button className='bottom-button normal btn3'><span><i className="fa-regular fa-eye"></i></span> VIEW</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Main;