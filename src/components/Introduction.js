import React from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { connect } from 'react-redux'
import { setIntroDescription, setIntroImage } from '../actions'


const Introduction = ({text, setIntroDescription, imgText, setIntroImage}) => {
    let inputDescription, inputImg

    return (
        <div className="d-flex justify-content-left">
            <Card className='col-lg-4'>
                <Card.Body>
                    <Card.Title>Welcome to my blog!</Card.Title>&nbsp;
                    <Form onSubmit={e => {
                        e.preventDefault()
                        setIntroImage(inputImg.value)
                        setIntroDescription(inputDescription.value)
                    }}>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type='newImage' placeholder='Enter Image URL' defaultValue='' ref={node => inputImg = node}></Form.Control >
                            <Form.Label>Description</Form.Label>
                            <Form.Control type='newDescription' placeholder='Enter Description' defaultValue='' ref={node => inputDescription = node}></Form.Control>
                            <div className='btn-toolbar'>
                                <Button className='btn btn-dark btn-sm' type='submit'>Save</Button>&nbsp;&nbsp;
                                <Button className='btn btn-dark btn-sm' type='reset'>Cancel</Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <Card className='col-lg-8 card'>
                <Card.Body>
                    <Card.Img src={imgText}/>
                    {text}
                </Card.Body>
            </Card>
        </div>
    )
}

const mapStateToProps = state => ({
    text: state.description,
    imgText: state.image,
})


const mapDispatchToProps = dispatch => {
    return {
        setIntroDescription: text => dispatch(setIntroDescription(text)),
        setIntroImage: imgText => dispatch(setIntroImage(imgText))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduction)