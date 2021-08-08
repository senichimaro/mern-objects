import React, { useState } from 'react'
import { appConfig } from '../config'
import { postFormData } from '../services/services'

import Nav from './Nav'
import Form from './Form'
import Modal from './Modal'

const FormPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSubmit = async data => {
    event.preventDefault()
    // console.log("handleSubmit", data);
    // console.log("post to:", appConfig.api.post);

    const response = await postFormData(data)

    // handleModal()
    setIsModalOpen(response)
  }


  return (
    <>
      <Nav />
      <Form handleSubmit={handleSubmit} />
      <Modal isModalOpen={isModalOpen} handleModal={handleModal} />
    </>
  )
}

export default FormPage
