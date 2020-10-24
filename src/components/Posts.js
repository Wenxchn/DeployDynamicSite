import React, { useState } from 'react'
import { Alert, Button, Card, Form, Modal, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { connect } from 'react-redux'
import { createPost } from '../actions'
import ActualPost from './ActualPost'

const Posts = ({posts, createPost}) => {
    const [isOpen, setIsOpen] = useState(false)
    let inputTitle, inputImage, inputDesc

    return (
        <div>
            <Card>
                <Card.Body>
                    <Row>
                        <Card.Title>&nbsp; Blog Posts</Card.Title> &nbsp; &nbsp;
                        <Button className='btn btn-dark btn-sm' onClick={() => setIsOpen(true)}>Add Post</Button>
                        <Modal show={isOpen} onHide={() => setIsOpen(false)}>
                            <Modal.Header> New Post </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={e => {
                                    e.preventDefault()
                                    console.log("Title: " + inputTitle.value + " Image Link: " + inputImage.value + " Description: " + inputDesc.value)
                                    createPost(inputTitle.value, inputImage.value, inputDesc.value) //Creating error here goes to setImage??
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
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: postList => dispatch(createPost(postList))
    }
}

export default connect(null, mapDispatchToProps)(Posts)