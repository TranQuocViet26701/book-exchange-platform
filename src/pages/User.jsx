import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function CardBook({ name, desc, image }) {
  return (
    <Card className="mb-4" style={{ padding: '0' }}>
      <Card.Body>
        <Row>
          <Col md="4">
            <Card.Img src={image} />
          </Col>
          <Col md="8">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-muted">
              {desc
                ? desc
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar neque dui, in ultricies libero facilisis a. Donec accumsan mauris at feugiat euismod. Sed ac volutpat diam, ut tincidunt arcu. Suspendisse quis eleifend nibh. Nam placerat euismod massa, eu sagittis felis. Donec ultricies luctus vehicula. Phasellus consequat sapien nec libero tincidunt tincidunt.'}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default function User() {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState(true);
  const [availableBookList, setAvailableBookList] = useState([]);
  const [wishBookList, setWishBookList] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await axios.post(
          `https://afternoon-brook-19976.herokuapp.com/users/get-detail-user`,
          {
            userId,
          }
        );
        setUserInfo(res.data.data.user);
      } catch (err) {
        console.log('error: ', err);
      }
    };

    getUserInfo();
  }, [userId]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await axios.get(
          `https://afternoon-brook-19976.herokuapp.com/book/get-all-books/${userId}`
        );
        setAvailableBookList(res.data.availableBooks);
        setWishBookList(res.data.wishBooks);
      } catch (err) {
        console.log('error: ', err);
      }
    };

    getAllBooks();
  }, [userId]);

  return (
    <Container>
      {userInfo && (
        <>
          <Row className="my-3">
            <h3>{userInfo.name}</h3>
          </Row>
          <Row>
            <Col>
              <h4>Available books</h4>
              {availableBookList &&
                availableBookList.length !== 0 &&
                availableBookList.map((book) => (
                  <CardBook
                    key={book._id}
                    name={book.name}
                    desc={book.description}
                    image={book.image}
                  />
                ))}
            </Col>
            <Col>
              <h4>Wish books</h4>
              {wishBookList &&
                wishBookList.length !== 0 &&
                wishBookList.map((book) => (
                  <CardBook
                    key={book._id}
                    name={book.name}
                    desc={book.description}
                    image={book.image}
                  />
                ))}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
