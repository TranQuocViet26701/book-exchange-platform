import React from 'react';
import { Button, Modal, Form, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from 'axios';


const RequestModal = ({ bookId }) => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [availableList, setAvailableList] = useState([]);
    const [selectedBook, setSelectedBook] = useState();

    useEffect(() => {
        const currentUser = window.localStorage.getItem("currentUser");
        const getAllBooks = async () => {
            const res = await axios.get(
                `https://afternoon-brook-19976.herokuapp.com/book/get-all-books/${currentUser}`
            );
            const data = res.data.availableBooks
            setSelectedBook(data[0]?._id)
            setAvailableList(data);
            console.log("data: ", res.data)
        };

        show && getAllBooks();
    }, [show]);

    const submit = (bookId, selectedBook) => {
        console.log("object");
        const currentUser = window.localStorage.getItem("currentUser");
        const sendRequest = async () => {
            await axios.post(
                `https://afternoon-brook-19976.herokuapp.com/request/create-request`,
                {
                    uId: currentUser,
                    bookBuy: bookId,
                    bookSell: selectedBook
                }
            );
            setShow(false);
        }
        sendRequest();
    }

    return (<>
        <Button onClick={handleShow} >Request</Button>
        <Modal show={show} onHide={handleClose} size="md">
            <Modal.Header closeButton>
                <Modal.Title>
                    Book Available
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Form.Select
                            onChange={(e) => {
                                setSelectedBook(e.target.value)
                            }}
                        >
                            {availableList && availableList.map((book) => (
                                <option value={book._id} key={book._id}>{book.name}</option>
                            ))}
                        </Form.Select>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => { submit(bookId, selectedBook) }}>
                    Send request
                </Button>
            </Modal.Footer>
        </Modal>

    </>);
}

export default RequestModal;
