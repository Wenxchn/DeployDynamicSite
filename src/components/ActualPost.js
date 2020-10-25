import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'

const ActualPost = ({id, title, image, description}) => {
    let inputTitle, inputImage, inputDesc
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <Card border='dark' className='text-white bg-dark mb-3'>
                <Card.Header className="text-center">
                    <Card.Title>Post Number {id} : {title} </Card.Title>
                </Card.Header>
                <Card.Body> 
                    <Card.Img src={image}/>
                    {description}
                </Card.Body>
                <Card.Footer>
                    <div className='btn-toolbar'>
                        &nbsp;&nbsp;&nbsp;
                        <Button className='btn btn-light btn-sm' onClick={() => setIsOpen(true)}>Edit</Button>&nbsp;&nbsp;
                        <Modal show={isOpen} onHide={() => setIsOpen(false)}>
                            <Modal.Body>
                                <Form onSubmit={e => {
                                    e.preventDefault()
                                    console.log("Title: " + inputTitle.value + " Image Link: " + inputImage.value + " Description: " + inputDesc.value)
                                    setIsOpen(false)
                                }}>
                                    <Form.Group>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type='newTitle' placeholder='Enter Blog Title' ref={node => inputTitle = node}></Form.Control>
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control type='newImage' placeholder='Enter Image URL' ref={node => inputImage = node}></Form.Control>
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type='newDescription' placeholder='Enter Description' ref={node => inputDesc = node}></Form.Control>
                                        <Button className='btn btn-dark btn-sm' type='submit'> Save </Button>&nbsp;&nbsp;
                                        <Button className='btn btn-dark btn-sm' onClick={() => setIsOpen(false)}> Cancel </Button>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                        </Modal>
                        <Button className='btn btn-light btn-sm'> Delete </Button>
                    </div>
                </Card.Footer>
            </Card>
        </>
)}

export default ActualPost