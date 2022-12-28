import ReactDOM from "react-dom";
import { useEffect } from "react";
//import Button from "./Button";

function Modal({onClose, children, actionBar}) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => { 
            document.body.classList.remove("overflow-hidden");   
        };
    });

    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-gray-400 opacity-80"></div>
            <div className="fixed p-10 inset-40 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">{actionBar}</div>
                </div>
                {/* <Button onClick={onClose} danger className="absolute bottom-0 right-0">Close</Button> */}
            </div>
        </div>,
        document.querySelector(".modal-container")
    );
}

export default Modal;