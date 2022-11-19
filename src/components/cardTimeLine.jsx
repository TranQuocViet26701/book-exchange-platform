import React from 'react';
import { Card, Button } from 'react-bootstrap';
import CardBookInfo from './cardBookInfo';

const CardTimeLine = () => {
    return (
        <Card style={{ padding: '0' }}>
            <Card.Header as='h5' style={{ display: 'flex' }}>HieuVo2307</Card.Header>

            <Card.Body>
                <CardBookInfo />
                <div style={{ textAlign: 'right' }}>
                    <Button variant="primary">Primary</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardTimeLine;
