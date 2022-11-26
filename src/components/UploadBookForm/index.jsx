import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function UploadBookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isHaveWishBook, setIsHaveWishBook] = useState(false);

  const onSubmit = async (data) => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) history.push('/login');

    console.log('data: ', data);
    const { name1, desc1, image1, name2, desc2, image2 } = data;

    try {
      const res1 = await axios.post(
        'https://afternoon-brook-19976.herokuapp.com/book/upload-book',
        {
          uId: currentUser,
          name: name1,
          description: desc1,
          image: image1,
        }
      );

      console.log('res1: ', res1);

      if (!isHaveWishBook) {
        setIsSuccess(true);
        reset({
          name1: '',
          desc1: '',
          imageUrl1: '',
        });
        return;
      }

      const res2 = await axios.post(
        'https://afternoon-brook-19976.herokuapp.com/book/upload-book',
        {
          uId: currentUser,
          name: name2,
          description: desc2,
          image: image2,
          isHaving: false,
        }
      );

      console.log('res2: ', res2);

      setIsSuccess(true);
      reset({
        name1: '',
        desc1: '',
        image1: '',
        name2: '',
        desc2: '',
        image2: '',
      });
    } catch (err) {
      console.log('error: ', err);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        {isSuccess && (
          <Alert
            variant="success"
            onClose={() => setIsSuccess(false)}
            dismissible
          >
            <Alert.Heading>Create book successful</Alert.Heading>
          </Alert>
        )}
        <Col>
          <h3>Your available book</h3>
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="name1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...register('name1', {
                  required: "Please provide your book's name",
                })}
              />
              {errors.name1 && (
                <Form.Text className="text-danger">
                  {errors.name1.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="desc1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} {...register('desc1')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image1">
              <Form.Label>Image url</Form.Label>
              <Form.Control type="text" {...register('image1')} />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form.Check
            type="switch"
            id="switch"
            value={isHaveWishBook}
            onChange={() => setIsHaveWishBook((prev) => !prev)}
            label="Your wish book"
            className="h3"
          />
          {isHaveWishBook && (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3 mt-3" controlId="name2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register('name2', {
                    required: "Please provide your book's name",
                  })}
                />
                {errors.name2 && (
                  <Form.Text className="text-danger">
                    {errors.name2.message}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="desc2">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} {...register('desc2')} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="image2">
                <Form.Label>Image url</Form.Label>
                <Form.Control type="text" {...register('image2')} />
              </Form.Group>
            </Form>
          )}
        </Col>
      </Row>
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </Container>
  );
}

export default UploadBookForm;
