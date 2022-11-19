import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function UploadBookForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    console.log('name: ', name);
    console.log('description: ', description);
    console.log('imageUrl: ', imageUrl);
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3 mt-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your book name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your book description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Image url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your book image url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Form>
        <Form.Group className="mb-3 mt-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your book name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your book description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Image url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your book image url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Create Book
        </Button>
      </Form>
    </Container>
  );
}

export default UploadBookForm;
