import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RequestModal from '../components/Modal';

const CardTimeLine = ({ uId, bookName, fullUserName, bookImg, bookDesc }) => {
  return (
    <Card style={{ width: '50%', margin: '20px auto', padding: '0' }}>
      <Card.Header as="h5">
        <Link style={{ textDecoration: 'none' }} to={`/user/${uId}`}>
          {fullUserName}
        </Link>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md="4">
            <Card.Img src={bookImg} />
          </Col>
          <Col md="8">
            <h4>{bookName}</h4>
            <p className="text-muted">
              {bookDesc
                ? bookDesc
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar neque dui, in ultricies libero facilisis a. Donec accumsan mauris at feugiat euismod. Sed ac volutpat diam, ut tincidunt arcu. Suspendisse quis eleifend nibh. Nam placerat euismod massa, eu sagittis felis. Donec ultricies luctus vehicula. Phasellus consequat sapien nec libero tincidunt tincidunt.'}
            </p>
          </Col>
        </Row>
        <div style={{ textAlign: 'right' }}>
          <RequestModal />
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
      console.log(res.data);
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
            bookId={book.bookId}
          />
        ))}
    </Container>
  );
}

export default Home;
