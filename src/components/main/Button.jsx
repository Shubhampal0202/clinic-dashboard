import React, { useState } from 'react'

function Button({ arr }) {
    const [button, setButton] = useState(arr[0])
    return (
        <div className='main-top-btn-container'>
            {
                arr.map((btnVal,idx) => {
                    return <button key={idx} className={btnVal === button ? 'top-button selected' : 'top-button'}
                    onClick={()=>{setButton(btnVal)}}>{btnVal}</button>
                })
            }
        </div>
    )
}

export default Button