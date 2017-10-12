import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const WelcomeModal = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Welcome to BootCruit!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header> </Header>
        <p>Welcome [new student name here]!</p>
        <p>We're excited to have you on board this exciting journey for programmers.</p>
        <p>Don't forget to update your profile!</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default WelcomeModal