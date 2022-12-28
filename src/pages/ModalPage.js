import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => { 
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>;

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Where can I get some? here are many variations of passages of Lorem Ipsum available, but the majority have suffered 
            alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true 
            generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence 
            structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, 
            injected humour, or non-characteristic words etc.
        </p>
    </Modal>;

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            { showModal && modal }  {/* // if showModal is true show the modal. if not (showModal is false) , Don't show us the modal*/}
        </div>
    );
}

export default ModalPage;