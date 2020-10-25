import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { deletePost, editPost } from '../actions'

const ActualPost = ({id, title, image, description, deletePost, editPost}) => {
    let inputTitle, inputImage, inputDesc
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <Card border='dark' className='text-white bg-dark mb-3'>
                <Card.Header className="text-center">
                    <Card.Title> {title} </Card.Title>
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
                                    editPost(id, inputTitle.value, inputImage.value, inputDesc.value)
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
                        <Button className='btn btn-light btn-sm' onClick={() => deletePost(id)}> Delete </Button> &nbsp;#{id}
                    </div>
                </Card.Footer>
            </Card>
        </>
)}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: id => dispatch(deletePost(id)),
        editPost: (id, title, image, description) => dispatch(editPost(id, title, image, description))
    }
}

export default connect(null, mapDispatchToProps)(ActualPost)