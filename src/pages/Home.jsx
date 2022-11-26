import React, { useEffect, useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CardTimeLine = ({
  uId,
  bookName,
  fullUserName,
  bookId,
  bookImg,
  bookDesc,
}) => {
  return (
    <Card style={{ padding: '0', margin: '20px' }}>
      <Card.Header as="h5" style={{ display: 'flex' }}>
        <Link to={`/user/${uId}`}>{fullUserName}</Link>
      </Card.Header>
      <Card.Body>
        <Card style={{ width: '40rem', margin: '10px', padding: '0' }}>
          <Card.Body>
            <Row>
              <Col md="4">
                <Card.Img src={bookImg} />
              </Col>
              <Col md="8">
                <Card.Title>{bookName}</Card.Title>
                <Card.Text style={{ display: 'flex' }}>{bookDesc}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <div style={{ textAlign: 'right' }}>
          <Button variant="primary">Send Request</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

function Home() {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await axios.get(
        'https://afternoon-brook-19976.herokuapp.com/book/get-all-available-books'
      );
      setBooksList(res.data);
    };
    getAllBooks();
  }, []);

  console.log('booksList', booksList);

  return (
    <Container>
      {booksList &&
        booksList.map((book) => (
          <CardTimeLine
            uId={book.uId}
            key={book.bookId}
            fullUserName={book.fullUserName}
            bookName={book.bookName}
            bookImg={book.bookImg}
            bookDesc={book.bookDesc}
          />
        ))}
    </Container>
  );
}

export default Home;
