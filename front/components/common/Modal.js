import React from 'react'
import { Button,  Modal } from 'semantic-ui-react'


/**
 * Small Modal toggling close and open
 * @param name
 * @param title
 * @param children
 * @param isSignUp
 * @param isSignIn
 * @param toggleSignUp
 * @constructor ModalComponent
 */

const ModalComponent = ({name, title, children, isSignUp, isSignIn, toggleSignUp}) => (
    <Modal
        size = 'small'
        open = {isSignUp ? isSignUp : isSignIn}
        onOpen={toggleSignUp}
        trigger={<Button onClick={toggleSignUp}>{name}</Button>}>
        {title ? <Modal.Header>{title }</Modal.Header> : ''}

        <Modal.Content>
            <Modal.Description>
                {children}
            </Modal.Description>
        </Modal.Content>



        <Modal.Actions content = 'Done'>
            <p>Already have an account? <button  onClick={toggleSignUp}>Login</button></p>
            <Button> Close</Button>
        </Modal.Actions>


    </Modal>
);




export default ModalComponent;