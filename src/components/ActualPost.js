import React from 'react'
import { Card } from 'react-bootstrap'

const ActualPost = ({id, title, image, description}) => {
    return (
        <Card>
            <Card.Title> {title} </Card.Title>
            <Card.Body> 
                <Card.Img src={image}/>
                Post#{id}: {description}
            </Card.Body>
        </Card>
)}

export default ActualPost