import React from 'react';
import Button from './Button';
import './main.css'
const Main = ({str}) => {
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
                <Button arr={arr} />
                <div className='img-date'>
                    <img src='images/profile.jpg' alt="" className='img' />
                    <div>
                        <div>{day} {month} {year} {hours}.{minutes} {shift}</div>
                        <div className='gap'>Appointment With Doctor Arun</div>
                        <div>Doctor World Clinic</div>
                        {str?<div style={{marginTop:"6px"}}>{str}</div>:""}
                    </div>
                </div>
                <div className='main-bottom-button-container'>
                    <button className='bottom-button color'>RESCHEDULE</button>
                    <button className='bottom-button color'>CANCLE</button>
                    <button className='bottom-button normal'><span><i className="fa-regular fa-eye"></i></span> VIEW</button>
                </div>
            </div>
         
        </>
    )
}
export default Main;