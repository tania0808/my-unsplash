import React from 'react';
import { useNavigate } from "react-router-dom";


const Modal = () => {
    let navigate = useNavigate();

const logOut = () => {
    localStorage.clear()
    navigate('/auth/login')
}

    return (
        <div className='w-[100px] h-[30px] flex justify-center absolute right-0 top-10 text-xs font-poppins bg-light-grey font-medium rounded-md'>
            <button onClick={logOut}>Log out</button>
        </div>
    );
}

export default Modal;
