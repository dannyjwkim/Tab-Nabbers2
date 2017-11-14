import React from 'react'
import { Button,  Modal } from 'semantic-ui-react'


/**
 * Small Modal toggling close and open
 * @param name
 * @param title
 * @param children
 * @param footer
 * @param toggleSignUp
 * @constructor ModalComponent
 */

const ModalComponent = ({ name, title, children, footer, toggleSignUp }) => (
    <Modal
        size = 'small'
        onOpen={toggleSignUp}
        trigger={<Button >{name}</Button>}>
        {title ? <Modal.Header>{title }</Modal.Header> : ''}

        <Modal.Content>
            <Modal.Description>
                { children }
            </Modal.Description>
        </Modal.Content>



        <Modal.Actions content = 'Done'>
            <a href="#" onClick={toggleSignUp}> {footer ? footer : '' }</a>
        </Modal.Actions>


    </Modal>
);




export default ModalComponent;