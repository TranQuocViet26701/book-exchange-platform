import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CardBookInfo = () => {
    return (
        <Card style={{ width: '40rem', margin: '10px', padding: '0' }}>
            <Card.Header style={{ display: 'flex' }} as='h6' >Book available</Card.Header>
            <Card.Body>
                <Row>
                    <Col md='4'>
                        <Card.Img src='src/img/pic.jpg' />
                    </Col>
                    <Col md='8'>
                        <Card.Title > Harry Potter and the Goblet of Fire: The Illustrated Edition</Card.Title>
                        <Card.Text style={{ display: 'flex' }} >Harry Potter wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream).</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CardBookInfo;
