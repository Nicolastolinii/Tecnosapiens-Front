
import {  useNavigate } from 'react-router-dom';
import './modal.css';

const Modal = ({ children, isModalOpen,buttonText, nav }) => {


    const navigate = useNavigate();

    const handleClose = () => {
        navigate(nav);
    };

    return (
        <>
            {isModalOpen && (
                <div className="modal-container blu fixed top-0 left-0 w-full h-full flex justify-center items-center z-40">
                    <div className="bg-white gap-4 flex justify-center flex-col items-center p-6 rounded-xl max-h[600px] h-[15rem] w-[30%] shadow-xl z-50">
                        {children}
                        <button className=' bg-[#00BA00] py-2 px-8 rounded-xl text-white  font-poppins font-semibold' onClick={handleClose}>{buttonText}</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;