import React from 'react';
import { Button, Modal, Form, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from 'axios';


const RequestModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let userId = '63785782c875bf52f33adfd4';
    const [availableList, setAvailableList] = useState([]);
    const [wishList, setWishList] = useState([]);


    useEffect(() => {
        const getAllBooks = async () => {
            const res = await axios.get(
                `https://afternoon-brook-19976.herokuapp.com/book/get-all-books/63785782c875bf52f33adfd4`
            );
            setAvailableList(res.data.availableBooks);
            setWishList(res.data.wishBooks);
            console.log(availableList)
            console.log(wishList);
        };

        getAllBooks();
    }, [userId]);

    return (<>
        <Button onClick={handleShow} >Request</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Book Available
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Form.Select>
                            <option>Book Available</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>

    </>);
}

export default RequestModal;
