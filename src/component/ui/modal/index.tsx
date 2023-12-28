import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';

type PropsTypes = {
    isOpen : boolean;
    children: React.ReactNode;
}

const Modal = (props: PropsTypes) => {
    const { isOpen, children } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsModalOpen(isOpen)
        }
    },[isOpen])

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            {isModalOpen && (
                <div className={styles['modal-overlay']} onClick={closeModal}>
                    <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
                        <span className={styles['modal-close']} onClick={closeModal}>
                            &times;
                        </span>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
