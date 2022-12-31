import React from 'react';
import { Modal as RsuiteModal } from 'rsuite';

const Modal = ({ show = false, handleClose, children, title = '', footer }) => {
    return (
        <RsuiteModal open={show} onClose={handleClose}>
            <RsuiteModal.Header>
                <RsuiteModal.Title>{title}</RsuiteModal.Title>
            </RsuiteModal.Header>
            <RsuiteModal.Body>{children}</RsuiteModal.Body>
            {footer && <RsuiteModal.Footer>{footer}</RsuiteModal.Footer>}
        </RsuiteModal>
    );
};

export default Modal;
