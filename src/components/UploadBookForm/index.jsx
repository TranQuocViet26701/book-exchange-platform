import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';

function UploadBookForm() {
  const userId = '1';
  const [availableName, setAvailableName] = useState('');
  const [availableDesc, setAvailableDesc] = useState('');
  const [availableImageUrl, setAvailableImageUrl] = useState('');

  const [wishName, setWishName] = useState('');
  const [wishDesc, setWishDesc] = useState('');
  const [wishImageUrl, setWishImageUrl] = useState('');

  const [show, setShow] = useState(false);

  const handleSubmit = async () => {
    if (!availableName) return;

    const res1 = await axios.post(
      'https://afternoon-brook-19976.herokuapp.com/book/upload-book',
      {
        uId: userId,
        name: availableName,
        image: availableImageUrl,
      }
    );

    console.log('res1: ', res1.data);

    if (wishName) {
      const res2 = await axios.post(
        'https://afternoon-brook-19976.herokuapp.com/book/upload-book',
        {
          uId: userId,
          name: wishName,
          image: wishImageUrl,
          isHaving: false,
        }
      );

      setWishName('');
      setWishDesc('');
      setWishImageUrl('');
    }

    setAvailableName('');
    setAvailableDesc('');
    setAvailableImageUrl('');
    setShow(true);
  };

  return (
    <Container className="mt-4">
      <Row>
        {show && (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Create book successful</Alert.Heading>
          </Alert>
        )}
      </Row>
      <Row>
        <Col>
          <h2>Your available book</h2>
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your book name"
                value={availableName}
                onChange={(e) => setAvailableName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your book description"
                value={availableDesc}
                onChange={(e) => setAvailableDesc(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Image url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your book image url"
                value={availableImageUrl}
                onChange={(e) => setAvailableImageUrl(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <h2>Your wish book</h2>
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your book name"
                value={wishName}
                onChange={(e) => setWishName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your book description"
                value={wishDesc}
                onChange={(e) => setWishDesc(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Image url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your book image url"
                value={wishImageUrl}
                onChange={(e) => setWishImageUrl(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={handleSubmit}>
          Create Book
        </Button>
      </div>
    </Container>
  );
}

export default UploadBookForm;
